<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "shopping_carts".
 *
 * @property int $id
 * @property string|null $uId
 *
 * @property ShoppingCartsProducts[] $shoppingCartsProducts
 */
class ShoppingCarts extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'shopping_carts';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['uId'], 'string', 'max' => 50],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'uId' => 'U ID',
        ];
    }

    /**
     * Gets query for [[ShoppingCartsProducts]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getShoppingCartsProducts()
    {
        return $this->hasMany(ShoppingCartsProducts::className(), ['cartId' => 'id']);
    }
}
