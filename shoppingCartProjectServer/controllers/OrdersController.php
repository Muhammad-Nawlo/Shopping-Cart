<?php
/**
 * Created by PhpStorm.
 * User: USER
 * Date: 4/8/2022
 * Time: 11:20 AM
 */

namespace app\controllers;


use app\models\Orders;
use app\models\OrdersProducts;
use sizeg\jwt\JwtHttpBearerAuth;
use Yii;
use yii\db\Query;
use yii\filters\auth\CompositeAuth;
use yii\filters\auth\HttpBearerAuth;
use yii\filters\auth\QueryParamAuth;
use yii\filters\Cors;
use yii\web\Controller;
use yii\web\Response;

class OrdersController extends Controller
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

//        $behaviors['authenticator'] = [
//            'class' => CompositeAuth::class,
//            'except' => ['index', 'add', 'get-shopping-cart'],
//            'authMethods' => array(
//                HttpBearerAuth::class,
//                QueryParamAuth::class,
//                JwtHttpBearerAuth::class
//            ),
//        ];
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

    public function actionGetAll($userId = null)
    {
        $query = (new Query())->from('')
        if ($userId) {
            $orders = OrdersProducts::find()->where(['userId' => $userId])->with(['order', 'product', 'user'])->asArray()->all();
        } else {
            $orders = OrdersProducts::find()->where([])->with(['order', 'product', 'user'])->asArray()->all();
        }
        $shippingOrders =[];
//        foreach ($orders as $o){
//
//        }
//        $orders=  array_map(function($o){
//            return [
//                'orderId'=>$o['orderId'],
//                'products'=>$o['product']
//            ];
//        },$orders);
        return $orders;
    }

    public function actionGet()
    {

    }

    public function actionAdd()
    {
        $data = (array)json_decode(Yii::$app->request->getRawBody());

        if (!$data['userId'])
            return ['msg' => 'error', 'info' => 'There is missing parameter (userId)'];
        if (!$data['name'])
            return ['msg' => 'error', 'info' => 'There is missing parameter (name)'];
        if (!$data['address'])
            return ['msg' => 'error', 'info' => 'There is missing parameter (address)'];
        if (!$data['city'])
            return ['msg' => 'error', 'info' => 'There is missing parameter (city)'];
        if (!$data['products'])
            return ['msg' => 'error', 'info' => 'There is missing parameter (products)'];

        $newOrder = new Orders();
        $newOrder->name =
        $newOrder->address = $data['address'];
        $newOrder->city = $data['city'];
        if ($newOrder->validate() && $newOrder->save()) {
            foreach ($data['products'] as $p) {
                $p = (array)$p;
                $newOrderProducts = new OrdersProducts();
                $newOrderProducts->userId = intval($data['userId']);
                $newOrderProducts->orderId = $newOrder->id;
                $newOrderProducts->productId = intval($p['productId']);
                $newOrderProducts->quantity = intval($p['quantity']);
                $newOrderProducts->save();
            }
            return ['msg' => 'ok'];
        } else {
            return ['msg' => 'error', 'info' => $newOrder->getErrors()];

        }

    }

}