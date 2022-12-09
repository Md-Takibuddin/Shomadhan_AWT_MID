<?php

namespace App\Http\Controllers;
use App\Models\appointment;

use Illuminate\Http\Request;

class tcrappointmentcontroller extends Controller
{
     function appointment()
    {
        if(session()->has('email'))
        {
            
        $tid=session()->get('id');     
        $data =  appointment::where('t_id',$tid)->get();   
        return view('teacher.tcappnt')->with('apnt',$data);
        }
        else
        {
            echo "access denied";
        }
    }

}
