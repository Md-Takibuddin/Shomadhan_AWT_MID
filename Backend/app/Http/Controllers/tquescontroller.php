<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use session;
use App\Models\question;
use App\Models\appointment;
use App\Models\teacher_infos;

class tquescontroller extends Controller
{
    //

    function ansques()
    {
        if(session()->has('email'))
        {
           $tid=session()->get('id');
    //$data =  question::all();   
    $data1 = question:: where([['t_id',$tid],['status','Answered']])->get();    
    //return view('teacher.tans')->with('questions',$data1);
    return $data1;}
    else
    {
        echo "access denied";
    }
    }
    function unansques()
    {
        if(session()->has('email'))
        {
           $tid=session()->get('id');
    //$data =  question::all();
    $data2 = question:: where([['t_id',$tid],['status','pending']])->get();    
    //return view('teacher.tques')->with('questions',$data2);
    return $data2;}
    else
    {
        echo "access denied";
    }

    }

    function quescount(Request $id)
    {  
        
        if(true)
        {
           //$tid=session()->get('id');     
          // $tid=13;
           $tid= $id->t_id;
           $qus1 = question:: where([['t_id',$tid],['status','Answered']])->get();
           $answeredQus= $qus1->count();
   
           $qus2 = question:: where([['t_id',$tid],['status','pending']])->get();
           $notansweredQus= $qus2->count();
           
           $app = appointment::where('t_id',$tid)->count();
           $applist = appointment::where('t_id',$tid)->get();
           $quependlist = question:: where([['t_id',$tid],['status','pending']])->get();    
           //$tid=session()->get('id');
          // $data=  teacher_infos::where('t_id',$tid)->get();
          //$data =  appointment::where('t_id',$tid)->get();   
       
           //return view('tdash',['teacher_info'=>$data]); 

          // return view('teacher.tdash')->with('countans',$answeredQus)->with('countnotans',$notansweredQus)->with('countapp',$app)->with('teacher_info',$data);
            return [$answeredQus,$notansweredQus,$app,$quependlist,$applist,$qus1];
        }
        else
        {
            echo "access denied";
        }
           
    }

}
