<?php

use yii\db\Migration;
use yii\db\Schema;

/**
 * Class m220408_182737_orders_table
 */
class m220408_182737_orders_table extends Migration
{
    const TABLE_NAME = '{{%orders}}';

    public function up()
    {
        $tableOptions = null;
        if ($this->db->driverName == 'mysql') {
            $tableOptions = "CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB";
        }
        $this->createTable(self::TABLE_NAME, [
            'id' => Schema::TYPE_PK,
            'name'=>Schema::TYPE_STRING.' not null',
            'address' => Schema::TYPE_STRING . ' not null',
            'city' => Schema::TYPE_STRING . ' not null'
        ], $tableOptions);
    }

    public function down()
    {
        $this->dropTable(self::TABLE_NAME);
        return false;
    }
}
