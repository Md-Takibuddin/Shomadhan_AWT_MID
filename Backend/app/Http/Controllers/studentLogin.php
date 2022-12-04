<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\student_info;
use App\Models\token;
use Illuminate\Support\Str;

use Session;
use Cookie;
use Hash;
use DateTime;

class studentLogin extends Controller
{
    public function login()
    {
        if(session()->has('email')){
           return redirect('dashboard');
        }
        elseif(Cookie::get('email') != null && Cookie::get('email') != ""){
            if($this->checkLogin(Cookie::get('email'), Cookie::get('password')))
            {
                return redirect('dashboard');
            }
        }else{
            return view('student.login');
           }
    }

    public static function checkLogin($email, $password)
    {
        $user = Student_info::where('email', $email)->first();

            if ($user && Hash::check($password,$user->password)){
            $loginData->session()->put('email',$loginData->email);
            session()->put('name',$user->name);
            session()->put('id',$user->id);
            session()->put('photo',$user->photo);
            return true;
            }
            else {
             return false;
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
            session()->put('photo',$user->photo);
            if ($loginData->has('remember')) {
                Cookie::queue('email', $loginData->email, 3600);
                Cookie::queue('password', $loginData->password, 3600);
            }
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
    Cookie::queue(Cookie::forget('email'));
    Cookie::queue(Cookie::forget('password'));
    return redirect('login');
   }

   public function reactLogin(Request $req)
    {
        $user = Student_info::where ('email','=',$req->email)->first();
        if ($user){
            if (Hash::check($req->password,$user->password)){
                session()->put('name',$user->name);
                session()->put('id',$user->id);
                $api_token = Str::random(64);

                $token = new token();
                $token->userid = $user->id;
                $token->token = $api_token;
                $token->created = new DateTime();

                $token->save();
                return $token;
            }
            return "No user found";

        }

        return "No user found";

    }


}

