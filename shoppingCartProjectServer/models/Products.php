<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "products".
 *
 * @property int $id
 * @property string $name
 * @property int $price
 * @property string|null $img
 * @property int $categoryId
 *
 * @property Categories $category
 * @property ShoppingCartsProducts[] $shoppingCartsProducts
 */
class Products extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'products';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['name', 'price', 'categoryId'], 'required'],
            [['price', 'categoryId'], 'integer'],
            [['name'], 'string', 'max' => 255],
            [['categoryId'], 'exist', 'skipOnError' => true, 'targetClass' => Categories::className(), 'targetAttribute' => ['categoryId' => 'id']],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Name',
            'price' => 'Price',
            'img' => 'Img',
            'categoryId' => 'Category ID',
        ];
    }

    /**
     * Gets query for [[Category]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getCategory()
    {
        return $this->hasOne(Categories::className(), ['id' => 'categoryId']);
    }

    /**
     * Gets query for [[ShoppingCartsProducts]].
     *
     * @return \yii\db\ActiveQuery
     */
    public function getShoppingCartsProducts()
    {
        return $this->hasMany(ShoppingCartsProducts::className(), ['productId' => 'id']);
    }
}
