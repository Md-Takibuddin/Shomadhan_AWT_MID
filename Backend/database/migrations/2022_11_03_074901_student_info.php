<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class StudentInfo extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('student_infos', function (Blueprint $table) {
            $table->id();
            $table->string ('name');
            $table->string ('phone_number');
            $table->string ('email');
            $table->string ('password');
            $table->string ('school');
            $table->string ('class');
            $table->string ('dob');
            $table->string ('photo');
            $table->string ('account_type');
            $table->integer ('total_qus');
            $table->timestamps();
        });

        Schema::create('tokens', function (Blueprint $table) {
            $table->id();
            $table->string ('userId');
            $table->string ('token');
            $table->dateTime('created');
            $table->dateTime('expired');
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
