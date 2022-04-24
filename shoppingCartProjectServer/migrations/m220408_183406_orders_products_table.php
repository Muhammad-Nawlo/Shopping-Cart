<?php

use yii\db\Migration;
use yii\db\Schema;

/**
 * Class m220408_183406_orders_products_table
 */
class m220408_183406_orders_products_table extends Migration
{
    const TABLE_NAME = '{{%orders_products}}';

    public function up()
    {
        $tableOptions = null;
        if ($this->db->driverName == 'mysql') {
            $tableOptions = "CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB";
        }
        $this->createTable(self::TABLE_NAME, [
            'orderId' => Schema::TYPE_INTEGER,
            'userId' => Schema::TYPE_INTEGER,
            'productId' => Schema::TYPE_INTEGER,
            'quantity'=>Schema::TYPE_INTEGER .' not null'
        ], $tableOptions);
        $this->addForeignKey('ordersFk', self::TABLE_NAME, 'orderId', 'orders', 'id');
        $this->addForeignKey('productsFk', self::TABLE_NAME, 'productId', 'products', 'id');
        $this->addForeignKey('usersFk', self::TABLE_NAME, 'userId', 'users', 'id');

    }

    public function down()
    {
        $this->dropForeignKey('usersFk',self::TABLE_NAME);
        $this->dropForeignKey('productsFk',self::TABLE_NAME);
        $this->dropForeignKey('ordersFk',self::TABLE_NAME);
        $this->dropTable(self::TABLE_NAME);
        return false;
    }
}
