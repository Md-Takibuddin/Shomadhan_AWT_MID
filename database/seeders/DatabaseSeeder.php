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
            'dob'=>'2002-11-10',
            'photo'=>'/storage/images/1667635233Sakib Uddin.jpg',
            'account_type'=>'Basic',
            'total_qus'=>'0'
            ]);


        DB::table('student_infos')->insert([
            'name'=>'Rafio ',
            'phone_number'=>'01779011550',
            'email'=>'rafio@gmail.com',
            'password'=>'$2y$10$lQN7pVM7.CwWFLQvE2n99.2BRWohgpUZWy9j7aRr9XjiNNN0RlEKi',
            'school'=>'Siraj Mia school and collage',
            'class'=>'10',
            'dob'=>'2000-11-10',
            'photo'=>'null',
            'account_type'=>'Basic',
            'total_qus'=>'0'
            ]);

        DB::table('questions')->insert([
            's_id'=>'1 ',
            'qus'=>'what is mass?',
            't_id'=>'RASHIDUL HASAN NABIL',
            'qus_photo'=>'null',
            'subject'=>'Math',
            'ans'=>'Mass (symbolized m) is a dimensionless quantity representing the amount of matter
            in a particle or object. The standard unit of mass in the International
            System (SI) is the kilogram (kg).',
            'ans_photo'=>'null',
            'status'=>'answered',
            's_feedback'=>'null'
            ]);

            DB::table('questions')->insert([
                's_id'=>'1',
                'qus'=>'What do you mean by 0?',
                't_id'=>'RIFAT ABDULLAH',
                'qus_photo'=>'../storage/question/qus1.png',
                'subject'=>'Math',
                'ans'=>'The subtlety is that derivative is a concept that applies to functions.
                So if by 0 you mean the real number, no. If by 0 you mean the identity element
                of some finite Abelian group, again no.',
                'ans_photo'=>'../storage/question/ans1.jpg',
                'status'=>'answered',
                's_feedback'=>'null'
                ]);

            DB::table('questions')->insert([
                's_id'=>'1',
                'qus'=>'why water is a polar compound?',
                't_id'=>'null',
                'qus_photo'=>'nul',
                'subject'=>'biology',
                'ans'=>'Not solved yet',
                'ans_photo'=>'null',
                'status'=>'pending',
                's_feedback'=>'null'
                ]);



        DB::table('teacher_infos')->insert([
            't_id'=>'10',
            'name'=>'RASHIDUL HASAN NABIL',
            't_email'=>'nabil@email.com'
            ]);

        DB::table('teacher_infos')->insert([
            't_id'=>'11',
            'name'=>'RIFAT ABDULLAH',
            't_email'=>'rafio@email.com'
            ]);

        DB::table('teacher_infos')->insert([
            't_id'=>'12',
            'name'=>'shan',
            't_email'=>'shan@email.com'
            ]);


        DB::table('appointments')->insert([
            's_id'=>'1',
            'subject'=>'Math',
            'duration'=>'2h',
            't_id'=>'SHIPON HOSSAIN',
            'date'=>'15 Dec, 2022',
            'status'=>'pending'
            ]);

        DB::table('appointments')->insert([
                's_id'=>'1',
                'subject'=>'Physics',
                'duration'=>'1h',
                't_id'=>'Takib',
                'date'=>'02 Dec, 2022',
                'status'=>'accepted'
                ]);



    }
}
