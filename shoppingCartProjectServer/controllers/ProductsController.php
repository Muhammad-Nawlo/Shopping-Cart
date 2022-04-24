<?php
/**
 * Created by PhpStorm.
 * User: USER
 * Date: 3/23/2022
 * Time: 1:40 PM
 */

namespace app\controllers;


use app\models\Products;
use sizeg\jwt\JwtHttpBearerAuth;
use Yii;
use yii\filters\auth\CompositeAuth;
use yii\filters\auth\HttpBearerAuth;
use yii\filters\auth\QueryParamAuth;
use yii\filters\Cors;
use yii\web\Controller;
use yii\web\Response;

class ProductsController extends Controller
{
    public $enableCsrfValidation = false;

    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors['corsFilter'] = [
            'class' => Cors::className(),
            'cors' => [
                'Origin' => ['http://localhost:4200', 'http://localhost'],
                'Access-Control-Request-Method' => ['*'],
                'Access-Control-Allow-Methods' => ['POST', 'PUT', 'OPTIONS', 'GET'],
                'Access-Control-Allow-Headers' => ['*'],
                'Access-Control-Request-Headers' => ['*'],
                'Access-Control-Allow-Credentials' => true,
            ]
        ];
        $behaviors['authenticator'] = [
            'class' => CompositeAuth::className(),
            'except' => ['index','get-all'],
            'authMethods' => [
                HttpBearerAuth::class,
                QueryParamAuth::class,
                JwtHttpBearerAuth::class
            ],
        ];
        return $behaviors;
    }

    public function beforeAction($action)
    {
        yii::$app->response->format = Response::FORMAT_JSON;
        return parent::beforeAction($action);
    }

    public function actionIndex()
    {
        return ['msg' => 'ok', 'info' => 'It is working'];
    }

    public function actionGetAll()
    {
        $products = Products::find()->where([])->with('category')->asArray()->all();
        return $products ? ['msg' => 'ok', 'products' => $products] : ['msg' => 'error', 'info' => 'There are no products'];
    }

    public function actionGet($id)
    {
        $id = intval($id);
        if ($id) {
            $product = Products::find()->where(['id' => $id])->with('category')->one();
            return $product ? ['msg' => 'ok', 'product' => $product] : ['msg' => 'error', 'info' => 'There is no product'];
        } else {
            return ['msg' => 'error', 'info' => 'Invalid id'];
        }
    }

    public function actionDelete($id)
    {
        $id = intval($id);
        if ($id) {
            $product = Products::findOne(['id' => $id]);
            if ($product) {
                if ($product->delete()) {
                    return ['msg' => 'ok'];
                } else {
                    return ['msg' => 'error', 'info' => $product->getErrors()];
                }
            } else {
                return ['msg' => 'error', 'info' => 'There is no product has this id'];
            }
        } else {
            return ['msg' => 'error', 'info' => 'Invalid id'];
        }
    }

    public function actionAdd()
    {
        $data = json_decode(\Yii::$app->request->getRawBody(), true);

        if (!$data['name'])
            return ['msg' => 'error', 'info' => 'There is missing parameter (name)'];
        if (!$data['price'])
            return ['msg' => 'error', 'info' => 'There is missing parameter (price)'];
        if (!$data['categoryId'])
            return ['msg' => 'error', 'info' => 'There is missing parameter (categoryId)'];

        if (isset($data['id'])) {
            $id = intval($data['id']);
            $product = Products::findOne(['id' => $id]);
        } else {
            $product = new Products();
        }
        $product->name = $data['name'];
        $product->price = $data['price'];
        $product->img = $data['img'];
        $product->categoryId = $data['categoryId'];

        if ($product->validate() && $product->save()) {
            return ['msg' => 'ok', 'product' => $product];
        } else {
            return ['msg' => 'error', 'info' => $product->getErrors()];
        }

    }

    public function actionUpdate()
    {
        $data = json_decode(\Yii::$app->request->getRawBody(), true);

        if (!$data['name'])
            return ['msg' => 'error', 'info' => 'There is missing parameter (name)'];
        if (!$data['price'])
            return ['msg' => 'error', 'info' => 'There is missing parameter (price)'];
        if (!$data['categoryId'])
            return ['msg' => 'error', 'info' => 'There is missing parameter (categoryId)'];
        if (!$data['id'])
            return ['msg' => 'error', 'info' => 'There is missing parameter (id)'];

        $id = intval($data['id']);
        $product = Products::findOne(['id' => $id]);
        if ($product) {
            $product->name = $data['name'];
            $product->price = $data['price'];
            $product->img = $data['img'];
            $product->categoryId = $data['categoryId'];
            if ($product->validate() && $product->save()) {
                return ['msg' => 'ok', 'newProduct' => $product];
            } else {
                return ['msg' => 'error', 'info' => $product->getErrors()];
            }
        } else {
            return ['msg' => 'error', 'info' => 'There is no product has this id'];
        }

    }

}