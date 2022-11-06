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
            'email'=>'gamertakib@gmail.com',
            'password'=>'$2y$10$lQN7pVM7.CwWFLQvE2n99.2BRWohgpUZWy9j7aRr9XjiNNN0RlEKi',
            'school'=>'Dhaka collage',
            'class'=>'10',
            'dob'=>'20,May 2021',
            'photo'=>'/storage/images/1667635233Sakib Uddin.jpg',
            'account_type'=>'Basic',
            'total_qus'=>'0'
            ]);


        DB::table('student_infos')->insert([
            'name'=>'Rafio ',
            'phone_number'=>'01779011550',
            'email'=>'rafio@gmail.com',
            'password'=>'$2y$10$lQN7pVM7.CwWFLQvE2n99.2BRWohgpUZWy9j7aRr9XjiNNN0RlEKi',
            'school'=>'Bangla collage',
            'class'=>'10',
            'dob'=>'20,May 2021',
            'photo'=>'null',
            'account_type'=>'Basic',
            'total_qus'=>'0'
            ]);

        DB::table('questions')->insert([
            's_id'=>'1 ',
            'qus'=>'what is mass?',
            't_id'=>'1',
            'qus_photo'=>'null',
            'subject'=>'Math',
            'ans'=>'What is mass in short answer?
            Mass (symbolized m) is a dimensionless quantity representing the amount of matter in a particle or object. The standard unit of mass in the International System (SI) is the kilogram (kg).',
            'ans_photo'=>'null',
            'status'=>'answered',
            's_feedback'=>'null'
            ]);

        DB::table('appointment')->insert([
            's_id'=>'1',
            'subject'=>'Math',
            'duration'=>'1 hour',
            't_id'=>'null',
            'date'=>'20/12/2022',
            'status'=>'pending'
            ]);

        DB::table('appointment')->insert([
            's_id'=>'1',
            'subject'=>'physics',
            'duration'=>'30 min',
            't_id'=>'null',
            'date'=>'20/12/2022',
            'status'=>'accepted'
            ]);
    }
}
