<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddHomesColumns extends Migration
{
    /**
     * Run the migrations.
     * Used to Tables and/or columns to a databaase
     * @return void
     */
    public function up()
    {
        Schema::table('homes', function (Blueprint $table) {
            $table->string('city');
            $table->string('state');
        });
    }

    /**
     * Reverse the migrations.
     * Used to drop tables and/or columns from database
     *
     * @return void
     */
    public function down()
    {
        Schema::table('homes', function (Blueprint $table){
            $table->drop('city');
            $table->drop('state');
        });
    }
}
