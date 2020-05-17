<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHomesTable extends Migration
{
    /**
     * Run the migrations.
     * Used to Tables and/or columns to a databaase
     * @return void
     */
    public function up()
    {
        Schema::create('homes', function (Blueprint $table) {
            $table->id();
            $table->string('type');
            $table->string('address');
            $table->float('price', 8, 2);
            $table->integer('zipcode');
            $table->string('imageUrl');
            $table->timestamps();
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
            Schema::dropIfExists('homes');
            // Schema::drop('price');
            // Schema::drop('zipcode');
        });
    }
}
