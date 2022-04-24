<?php

use yii\db\Migration;
use yii\db\Schema;

/**
 * Class m220312_210553_users_table
 */
class m220312_210553_users_table extends Migration
{
    const TABLE_NAME = 'users';

    public function up()
    {
        $this->createTable(self::TABLE_NAME, [
            'id' => Schema::TYPE_PK,
            'username' => Schema::TYPE_STRING . ' NOT NULL',
            'email' => Schema::TYPE_STRING . ' NOT NULL',
            'password' => Schema::TYPE_STRING . ' NOT NULL',
            'phone' => Schema::TYPE_STRING,
            'isAdmin' => Schema::TYPE_BOOLEAN,
            'access-token' => Schema::TYPE_STRING . ' NOT NULL',
            'auth-key' => Schema::TYPE_STRING . ' NOT NULL',
        ]);
    }

    public function down()
    {
        $this->dropTable(self::TABLE_NAME);
        return false;
    }
}
