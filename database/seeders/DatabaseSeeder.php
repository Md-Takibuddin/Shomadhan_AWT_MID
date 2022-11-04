<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('student_infos')->insert([
            'name'=>'Takib Uddin',
            'phone_number'=>'01779011690',
            'email'=>'takib@gmail.com',
            'password'=>'1234',
            'school'=>'Dhaka collage',
            'class'=>'10',
            'dob'=>'20,May 2021',
            'photo'=>'null',
            'account_type'=>'Basic',
            'total_qus'=>'0'
            ]);


        DB::table('student_infos')->insert([
            'name'=>'Rafio ',
            'phone_number'=>'01779011550',
            'email'=>'rafio@gmail.com',
            'password'=>'1234',
            'school'=>'Bangla collage',
            'class'=>'10',
            'dob'=>'20,May 2021',
            'photo'=>'null',
            'account_type'=>'Basic',
            'total_qus'=>'0'
            ]);
    }
}
