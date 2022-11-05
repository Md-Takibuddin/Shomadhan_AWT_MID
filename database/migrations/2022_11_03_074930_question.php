<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Question extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('questions', function (Blueprint $table) {
            $table->id();
            $table->string ('s_id');
            $table->string ('qus');
            $table->string ('t_id');
            $table->string ('ans');
            $table->string ('qus_photo');
            $table->string ('ans_photo');
            $table->string ('status');
            $table->string ('s_feedback');
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
