<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\student_info;
use Session;
use Hash;

class studentRegistration extends Controller
{
    public function registration()
    {
        return view("student.registration");
    }

    public function registrationData(Request $regData)
    {
        $validate = $regData->validate([
                    "name"=>"required|max:20",
                    'phone_number'=>'required|regex:/^([0-9\s\-\+\(\)]*)$/ |unique:student_infos',
                    'school'=>'required',
                    'class'=>'required',
                    'dob'=>'required',
                    'email'=>'required|email|unique:student_infos',
                    'password'=>'required|min:8|max:20'
                    ],
                    );
        $at="basic";
        $tq=0;

        $student = new Student_info();
        $student->name = $regData->name;
        $student->phone_number = $regData->phone_number;
        $student->email = $regData->email;
        $student->password = Hash::make ($regData->password);
        $student->school = $regData->school;
        $student->class = $regData->class;
        $student->dob = $regData->dob;
        $student->photo = $regData->email;
        $student->account_type =  $at;
        $student->total_qus = $tq;

        $student->save();
        Session::flash('regSuccess','Congratulation! Registration successful');
        return redirect()->back();
    }

}
