<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\student_info;
use App\Models\teacher_infos;
use App\Models\token;
use Illuminate\Support\Str;


use Session;
use Cookie;
use Hash;
use DateTime;
use TeacherInfo;

class studentLogin extends Controller
{
    public function login()
    {
        if (session()->has('email')) {
            return redirect('dashboard');
        } elseif (Cookie::get('email') != null && Cookie::get('email') != "") {
            if ($this->checkLogin(Cookie::get('email'), Cookie::get('password'))) {
                return redirect('dashboard');
            }
        } else {
            return view('student.login');
        }
    }

    public static function checkLogin($email, $password)
    {
        $user = Student_info::where('email', $email)->first();

        if ($user && Hash::check($password, $user->password)) {
            $loginData->session()->put('email', $loginData->email);
            session()->put('name', $user->name);
            session()->put('id', $user->id);
            session()->put('photo', $user->photo);
            return true;
        } else {
            return false;
        }
    }

    public function loginData(Request $loginData)
    {
        $validate = $loginData->validate(
            [
                "email" => "required|email",
                'password' => 'required'
            ],
        );

        $user = Student_info::where('email', '=', $loginData->email)->first();
        $user1 = teacher_infos::where('t_email', '=', $loginData->email)->first();

        if ($user) {
            if (Hash::check($loginData->password, $user->password)) {
                $loginData->session()->put('email', $loginData->email);
                session()->put('name', $user->name);
                session()->put('id', $user->id);
                session()->put('photo', $user->photo);
                if ($loginData->has('remember')) {
                    Cookie::queue('email', $loginData->email, 3600);
                    Cookie::queue('password', $loginData->password, 3600);
                }
                return redirect('dashboard');
            } else {
                Session::flash('fail', 'Email or Password in incorrect.');
                return redirect()->back();
            }
        } elseif ($user1) {
            $session = teacher_infos::where('t_email', '=', $loginData->email)->where('password', '=', $loginData->password)->get();

            if (count($session) > 0 && $loginData == true) {
                $loginData->session()->put('id', $session[0]->t_id);
                $loginData->session()->put('name', $session[0]->name);
                $loginData->session()->put('email', $session[0]->t_email);
                $loginData->session()->put('phn', $session[0]->phoneNo);
                $loginData->session()->put('pass', $session[0]->password);
                $loginData->session()->put('cj', $session[0]->current_job);
                $loginData->session()->put('cv', $session[0]->cv);
                $loginData->session()->put('db', $session[0]->dob);

                //echo $session[0];

                return redirect("tdash");
            }
        } else {
            Session::flash('fail', 'Email or Password in incorrect.');
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
        $user = Student_info::where('email', '=', $req->email)->first();
        $user1 = teacher_infos::where('t_email', '=', $req->email)->where('password', '=', $req->password)->first();

        if ($user) {
            if (Hash::check($req->password, $user->password)) {
                session()->put('name', $user->name);
                session()->put('id', $user->id);
                $api_token = Str::random(64);
                $token = new token();
                $token->userid = $user->id;
                $token->token = $api_token;
                $token->created = new DateTime();
                $token->save();

                return response()->json([
                    'login' => "ok",
                    'userInfo' => $user
                ]);
            } 
            else return "No user found";
        } 
        elseif ($user1) {
            $session = teacher_infos::where('t_email', '=', $req->email)->where('password', '=', $req->password)->get();

            $req->session()->put('id', $session[0]->t_id);
            $req->session()->put('name', $session[0]->name);
            $req->session()->put('email', $session[0]->t_email);
            $req->session()->put('phn', $session[0]->phoneNo);
            $req->session()->put('pass', $session[0]->password);
            $req->session()->put('cj', $session[0]->current_job);
            $req->session()->put('cv', $session[0]->cv);
            $req->session()->put('db', $session[0]->dob);
            return response()->json([
                'login' => "t_ok",
                'userInfo' => $user1
            ]);
        }
        
        else return "No user found";
    }
}
