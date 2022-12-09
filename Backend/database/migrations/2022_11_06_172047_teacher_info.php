<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TeacherInfo extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('teacher_infos', function (Blueprint $table){

            $table->id('t_id')->nullable();
            $table->string('name')->nullable();
            $table->string('t_email')->unique()->nullable();
            $table->string('phoneNo')->nullable();
            $table->string('password')->nullable();
            $table->string('current_job')->nullable();
            $table->string('cv')->nullable();
            $table->string('photo')->nullable();
            $table->date('dob')->nullable();
            $table->string('active_time')->nullable();  
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
