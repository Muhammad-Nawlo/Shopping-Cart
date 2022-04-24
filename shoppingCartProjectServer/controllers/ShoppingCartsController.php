<?php
/**
 * Created by PhpStorm.
 * User: Muhammad Nawlo
 * Date: 4/2/2022
 * Time: 1:19 PM
 */

namespace app\controllers;


use app\models\ShoppingCarts;
use app\models\ShoppingCartsProducts;
use sizeg\jwt\JwtHttpBearerAuth;
use Yii;
use yii\filters\auth\CompositeAuth;
use yii\filters\auth\HttpBearerAuth;
use yii\filters\auth\QueryParamAuth;
use yii\filters\Cors;
use yii\web\Controller;
use yii\web\Response;

class ShoppingCartsController extends Controller
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
            'except' => ['index', 'add', 'get-shopping-cart'],
            'authMethods' => array(
                HttpBearerAuth::class,
                QueryParamAuth::class,
                JwtHttpBearerAuth::class
            ),
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

    public function actionAdd()
    {
        $newCart = new  ShoppingCarts();
        $newCart->uId = Yii::$app->security->generateRandomString(50);
        if ($newCart->validate() && $newCart->save())
            return ['msg' => 'ok', 'cartId' => $newCart->uId];
    }

    public function actionAddProductToCart($cartId = null, $productId = null)
    {
        $productId = intval($productId);
        $cart = ShoppingCarts::findOne(['uId' => $cartId]);
        if (!$cart) return ['msg' => 'error', 'info' => 'Invalid cart id'];

        $shoppingCart = ShoppingCartsProducts::findOne(['cartId' => $cart->id, 'productId' => $productId]);

        if (!$shoppingCart)
            $shoppingCart = new ShoppingCartsProducts();

        $shoppingCart->productId = $productId;
        $shoppingCart->cartId = $cart->id;
        $shoppingCart->quantity += 1;
        if ($shoppingCart->validate() && $shoppingCart->save()) {
            $shoppingCart = ShoppingCartsProducts::find()->where(['cartId' => $cart->id])->with(['product'])->asArray()->all();
            return ['msg' => 'ok', 'shoppingCart' => $shoppingCart];
        } else {
            return ['msg' => 'error', 'info' => $shoppingCart->getErrors()];

        }
    }

    public function actionRemoveProductFromCart($cartId= null,$productId){
        $productId = intval($productId);
        $cart = ShoppingCarts::findOne(['uId' => $cartId]);
        if (!$cart) return ['msg' => 'error', 'info' => 'Invalid cart id'];

        $shoppingCart = ShoppingCartsProducts::findOne(['cartId' => $cart->id, 'productId' => $productId]);

        if (!$shoppingCart)
            $shoppingCart = new ShoppingCartsProducts();

        $shoppingCart->productId = $productId;
        $shoppingCart->cartId = $cart->id;
        $shoppingCart->quantity -= 1;
        if ($shoppingCart->validate() && $shoppingCart->save()) {
            $shoppingCart = ShoppingCartsProducts::find()->where(['cartId' => $cart->id])->with(['product'])->asArray()->all();
            return ['msg' => 'ok', 'shoppingCart' => $shoppingCart];
        } else {
            return ['msg' => 'error', 'info' => $shoppingCart->getErrors()];

        }

    }

    public function actionGetShoppingCart($cartId)
    {
        $cart = ShoppingCarts::findOne(['uId' => $cartId]);
        if (!$cart) return ['msg' => 'error', 'info' => 'Invalid cart id'];

        $shoppingCart = ShoppingCartsProducts::find()->where(['cartId' => $cart->id])->with(['product'])->asArray()->all();
        $product = [];
        foreach ($shoppingCart as $sh) {
             $sh['product']['quantity'] = $sh['quantity'];
            $product[] = $sh['product'];
        }
        return ['msg' => 'ok', 'products' => $product];
    }
}