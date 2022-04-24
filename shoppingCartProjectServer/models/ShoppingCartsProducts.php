<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "shopping_carts_products".
 *
 * @property int $id
 * @property int|null $cartId
 * @property int|null $productId
 * @property int|null $quantity
 *
 * @property ShoppingCarts $cart
 * @property Products $product
 */
class ShoppingCartsProducts extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'shopping_carts_products';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['cartId', 'productId', 'quantity'], 'integer'],
            [['cartId'], 'exist', 'skipOnError' => true, 'targetClass' => ShoppingCarts::className(), 'targetAttribute' => ['cartId' => 'id']],
            [['productId'], 'exist', 'skipOnError' => true, 'targetClass' => Products::className(), 'targetAttribute' => ['productId' => 'id']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'cartId' => 'Cart ID',
            'productId' => 'Product ID',
            'quantity' => 'Quantity',
        ];
    }

    /**
     * Gets query for [[Cart]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getCart()
    {
        return $this->hasOne(ShoppingCarts::className(), ['id' => 'cartId']);
    }

    /**
     * Gets query for [[Product]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getProduct()
    {
        return $this->hasOne(Products::className(), ['id' => 'productId']);
    }
}
