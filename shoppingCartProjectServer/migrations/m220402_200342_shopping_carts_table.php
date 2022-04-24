<?php

use yii\db\Migration;
use yii\db\Schema;

/**
 * Class m220402_200342_shopping_carts_table
 */
class m220402_200342_shopping_carts_table extends Migration
{
    const TABLE_NAME = 'shopping_carts';

    public function up()
    {
        $tableOptions = null;
        if ($this->db->driverName == 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB';
        }
        $this->createTable(self::TABLE_NAME, [
            'id' => Schema::TYPE_PK,
            'uId' => Schema::TYPE_STRING . ' unique',
        ], $tableOptions);

    }

    public function down()
    {
        $this->dropTable(self::TABLE_NAME);
        return false;
    }

}
