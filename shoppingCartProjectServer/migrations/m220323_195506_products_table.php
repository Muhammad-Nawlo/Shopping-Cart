<?php

use yii\db\Migration;
use yii\db\Schema;

/**
 * Class m220323_195506_products_table
 */
class m220323_195506_products_table extends Migration
{
    const TABLE_NAME = 'products';

    public function up()
    {
        $tableOptions = [];
        if ($this->db->driverName == 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB';
        }
        $this->createTable(self::TABLE_NAME, [
            'id' => Schema::TYPE_PK,
            'name' => Schema::TYPE_STRING . ' not null',
            'price' => Schema::TYPE_INTEGER . ' not null',
            'img' => Schema::TYPE_STRING,
            'categoryId' => Schema::TYPE_INTEGER. ' not null',
        ], $tableOptions);
        $this->addForeignKey('categoryFk', self::TABLE_NAME, 'categoryId', 'categories', 'id');

    }

    public function down()
    {
        $this->dropForeignKey('categoryFk',self::TABLE_NAME);
        $this->dropTable(self::TABLE_NAME);
        return false;
    }
}
