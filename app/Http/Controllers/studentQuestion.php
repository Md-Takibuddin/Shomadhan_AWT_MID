<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\question;
use Session;


class studentQuestion extends Controller
{
    public function question()
    {
        $s_id= Session::get('id');
        $qus = question::where ('s_id','=',$s_id)->get();
        //$qus = question::all();

        return view('student.question',compact('qus'));
    }

    public function postQuestion(Request $qus)
    {

       $s_id= Session::get('id');
        $validate = $qus->validate([
            "question"=>"required",
            "subject"=>"required"
            ],
            );

    $postQus = new question();
    $postQus->s_id = $s_id;
    $postQus->qus = $qus->question;
    $postQus->subject = $qus->subject;
    $postQus->t_id = "null";
    $postQus->ans = "Not answered yet";

    $photoName= time().$s_id.$qus->subject.".".$qus->file('qusPhoto')->getClientOriginalExtension();
    $path = $qus->file('qusPhoto')->storeAs('/public/question',$photoName);
    $postQus['qus_photo']='/storage/question/'.$photoName;

    $postQus->ans_photo = "null";
    $postQus->status = "pending";
    $postQus->s_feedback = "null";
    $postQus->save();

    Session::flash('posted','Question Posted');
    return redirect()->back();


    }
}
