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
       if(session()->has('email')){
           return redirect('dashboard');
           }else{
            return view('student.login');
           }
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
            session()->put('name',$user->name);
            session()->put('id',$user->id);

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


    public function logout()
   {
    Session::forget('key');
    Session::flush();
    return redirect('login');
   }

}

