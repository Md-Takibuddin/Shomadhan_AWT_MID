<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\student_info;
use Session;
use Hash;

class studentLogin extends Controller
{
    public function login()
    {
        return view("student.login");
    }

    public function loginData(Request $loginData)
    {
        $validate = $loginData->validate([
            "email"=>"required|email",
            'password'=>'required'
            ],
            );

        $user = Student_info::where ('email','=',$loginData->email)->first();

        if($user){
            if (Hash::check($loginData->password,$user->password)){
            $loginData->session()->put('email',$loginData->email);
            Session::flash('user',$user->name);
            return redirect('dashboard');
            }
            else {
                Session::flash('fail','Email or Password in incorrect.');
                return redirect()->back();
            }
        }
        else {
            Session::flash('fail','Email or Password in incorrect.');
            return redirect()->back();
        }

    }

    public function dashboard()
    {
        return view("student.dashboard");
    }
}

