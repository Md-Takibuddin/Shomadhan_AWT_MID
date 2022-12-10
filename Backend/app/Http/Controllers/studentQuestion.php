<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\question;
use App\Models\teacher_infos;
use App\Models\student_info;

use Session;


class studentQuestion extends Controller
{
    public function question()
    {
        $s_id= Session::get('id');
        $answeredQus = question::where
        ([
            ['s_id','=',$s_id],
            ['status', '=', 'answered'],
        ])->get();

        $pendingQus = question::where
        ([
            ['s_id','=',$s_id],
            ['status', '=', 'pending'],
        ])->get();

        //$qus = question::all();

        return view('student.question',compact('answeredQus','pendingQus'));
    }

    public function postQuestion(Request $qus)
    {

       $s_id= Session::get('id');
        $validate = $qus->validate([
            "question"=>"required",
            "subject"=>"required",
            ],
            );


    $postQus = new question();
    $postQus->s_id = $s_id;
    $postQus->qus = $qus->question;

    if($qus->hasfile('qusPhoto')){
        $photoName= time().$qus->subject.".".$qus->file('qusPhoto')->getClientOriginalExtension();
        $path = $qus->file('qusPhoto')->storeAs('/public/question',$photoName);
        $postQus['qus_photo']='../storage/question/'.$photoName;
    } else {
        $postQus->qus_photo = "null";
    }
    // $photoName= time().$regData->name.".".$regData->file('photo')->getClientOriginalExtension();
    // $path = $regData->file('photo')->storeAs('/public/images',$photoName);
    // $student['photo']='/storage/images/'.$photoName;

    //$postQus->qus_photo = "null";
    $postQus->subject = $qus->subject;
    $postQus->t_id = "null";
    $postQus->ans = "Not answered yet";
    $postQus->ans_photo = "null";
    $postQus->status = "pending";
    $postQus->s_feedback = "null";
    $postQus->save();

    Session::flash('posted','Question Posted');
    return redirect()->back();
    }



    public function viewQus ($id) {

        $qus = question::where ('id','=',$id)->first();
        if($qus->qus_photo!= "null"){
            Session::flash('qusPhoto','true');
        }
        if($qus->ans_photo!= "null"){
            Session::flash('ansPhoto','true');
        }

        return view('student.questionView',compact('qus'));
    }

    public function apiTest()
    {
        return question::all();
    }


    public function apiPost(Request $req){
        $qus = new Product();
        $qus->s_id = "10";
        $qus->qus = $req->qus;
        $qus->subject = $req->subject;
        $qus->qus_photo = "null";
        $qus->t_id = "null";
        $qus->ans = "Not answered yet";
        $qus->ans_photo = "null";
        $qus->status = "pending";
        $qus->s_feedback = "null";
        $qus->save();
        return ["Data send"];
    }

    public function ansqus ()
    {
        $s_id= Session::get('id');
        $answeredQus = question::where
        ([
            ['s_id','=',$s_id],
            ['status', '=', 'answered'],
        ])->get();

        return question::all();
    }



    public function postQus(Request $qus)
    {


    $postQus = new question();
    $postQus->s_id = "1";
    $postQus->qus = $qus->qus;


    // $photoName= time().$regData->name.".".$regData->file('photo')->getClientOriginalExtension();
    // $path = $regData->file('photo')->storeAs('/public/images',$photoName);
    // $student['photo']='/storage/images/'.$photoName;

    $postQus->qus_photo = "null";
    $postQus->subject = $qus->subject;
    $postQus->t_id = "null";
    $postQus->ans = "Not answered yet";
    $postQus->ans_photo = "null";
    $postQus->status = "pending";
    $postQus->s_feedback = "null";
   $postQus->save();
        return "Question Posted";

}
}
