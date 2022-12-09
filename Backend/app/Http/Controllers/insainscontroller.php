<?php

namespace App\Http\Controllers;
use App\Models\question;

use Illuminate\Http\Request;

class insainscontroller extends Controller
{
    //

    function ans($q_id)
    {
        $tid=session()->get('id');
        //$qid="5";   
           $ques = question::where([['t_id',$tid],['status','pending'],['id',$q_id]])->get();
           //$answeredQus= $qus1->count();
           return view('teacher.insans')->with('answer',$ques);
    }

    function ansupdate(Request $req)
    {
                $q_id=$req->an3;
                $qup=  question::where('id',$q_id)->first();
                $qup->ans=$req->an1;

                $img = $req->file('an2');
                $name = $img->getClientOriginalName();
                $fileName = 'public/assets/images/'. $name;
                $img->move('public/assets/images/', $fileName);
                $qup->ans_photo = $fileName;
                //$qup->ans_photo=$req->an2;*/
                $qup->status='Answered';
                $qup->save();
                return redirect("tques");

    }
}
