<?php

use yii\db\Migration;
use yii\db\Schema;

/**
 * Class m220323_194556_category_table
 */
class m220323_194556_category_table extends Migration
{
    const TABLE_NAME = 'categories';

    public function up()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB';
        }
        $this->createTable(self::TABLE_NAME, [
            'id' => Schema::TYPE_PK,
            'name' => Schema::TYPE_STRING . ' not null',
        ], $tableOptions);


    }

    public function down()
    {

        $this->dropTable(self::TABLE_NAME);
        return false;
    }

}
