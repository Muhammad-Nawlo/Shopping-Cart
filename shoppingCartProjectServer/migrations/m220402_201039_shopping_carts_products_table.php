<?php

use yii\db\Migration;
use yii\db\Schema;

/**
 * Class m220402_201039_shopping_carts_products_table
 */
class m220402_201039_shopping_carts_products_table extends Migration
{
    const TABLE_NAME = 'shopping_carts_products';

    public function up()
    {
        $tableOptions = null;
        if ($this->db->driverName == 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB';
        }
        $this->createTable(self::TABLE_NAME, [
            'id' => Schema::TYPE_PK,
            'cartId' => Schema::TYPE_INTEGER . ' not null',
            'productId' => Schema::TYPE_INTEGER . ' not null',
            'quantity' => Schema::TYPE_INTEGER . ' default(0)',
        ], $tableOptions);

        $this->addForeignKey('productFk', self::TABLE_NAME, 'productId', 'products', 'id');
        $this->addForeignKey('cartFk', self::TABLE_NAME, 'cartId', 'shopping_carts', 'id');
    }

    public function down()
    {
        $this->dropForeignKey('cartFk', self::TABLE_NAME);
        $this->dropForeignKey('productFk', self::TABLE_NAME);
        $this->dropTable(self::TABLE_NAME);
        return false;
    }
}
