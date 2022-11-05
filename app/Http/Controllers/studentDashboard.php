<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\student_info;
use App\Models\question;
use Session;

class studentDashboard extends Controller
{

    public function dashboard()
    {
        if(session()->has('email')){

            $user = Student_info::where ('email','=',Session::get('email'))->first();
            $photo = $user->photo;

            $s_id= Session::get('id');
            $qus = question::where ('s_id','=',$s_id)->get();
            $totalQus= $qus->count();

            $qus = question::where([
                ['s_id',$s_id],
                ['status','answered']
            ])->get();
            $answeredQus= $qus->count();

            $qus = question::where([
                ['s_id',$s_id],
                ['status','pending']
            ])->get();
            $pendingQus= $qus->count();

            // $wordCount = $wordlist->count();

        return view('student.dashboard',compact('photo','totalQus','answeredQus','pendingQus'));
       }else return redirect('login');
    }

}
