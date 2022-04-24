<?php

namespace app\controllers;


use sizeg\jwt\JwtHttpBearerAuth;
use yii\filters\auth\CompositeAuth;
use yii\filters\auth\HttpBearerAuth;
use yii\filters\auth\QueryParamAuth;
use yii\filters\Cors;
use yii\web\Controller;
use yii\web\Response;

use app\models\Categories;

class CategoriesController extends Controller
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
            'class' => CompositeAuth::class,
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
        \Yii::$app->response->format = Response::FORMAT_JSON;
        return parent::beforeAction($action);
    }

    public function actionIndex()
    {
        return ['msg' => 'ok', 'info' => 'It is working'];
    }

    public function actionGetAll()
    {
        $categories = Categories::find()->where([])->asArray()->all();
        return $categories ? ['msg' => 'ok', 'categories' => $categories] : ['msg' => 'error', 'info' => 'There are no category'];
    }

    public function actionGet($id)
    {
        $id = intval($id);
        if ($id) {
            $category = Categories::findOne(['id' => $id]);
            return $category ? ['msg' => 'ok', 'category' => $category] : ['msg' => 'error', 'info' => 'There is no category'];
        } else {
            return ['msg' => 'error', 'info' => 'Invalid id'];
        }
    }

    public function actionDelete($id)
    {
        $id = intval($id);
        if ($id) {
            $category = Categories::findOne(['id' => $id]);
            if ($category) {
                if ($category->delete()) {
                    return ['msg' => 'ok'];
                } else {
                    return ['msg' => 'error', 'info' => $category->getErrors()];
                }
            } else {
                return ['msg' => 'error', 'info' => 'There is no category has this id'];
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


        if (isset($data['id'])) {
            $id = intval($data ['id']);
            $category = Categories::findOne(['id' => $id]);
        } else {
            $category = new Categories();
        }
        $category->name = $data['name'];
        if ($category->validate() && $category->save()) {
            return ['msg' => 'ok', 'category' => $category];
        } else {
            return ['msg' => 'error', 'info' => $category->getErrors()];

        }

    }


    public function actionUpdate()
    {
        $data = json_decode(\Yii::$app->request->getRawBody(), true);

        if (!$data['name'])
            return ['msg' => 'error', 'info' => 'There is missing parameter (name)'];
        if (!$data['id'])
            return ['msg' => 'error', 'info' => 'There is missing parameter (id)'];

        $id = intval($data['id']);
        $category = Categories::findOne(['id' => $id]);
        if ($category) {
            $category->name = $data['name'];
            if ($category->validate() && $category->save()) {
                return ['msg' => 'ok', 'updatedCategory' => $category];
            } else {
                return ['msg' => 'error', 'info' => $category->getErrors()];
            }
        } else {
            return ['msg' => 'error', 'info' => 'There is no category has this id'];

        }
    }

}