<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\question;
use Session;


class studentQuestion extends Controller
{
    public function question()
    {
        return view('student.question');
    }

    public function postQuestion(Request $qus)
    {

       $s_id= Session::get('id');
        $validate = $qus->validate([
            "question"=>"required"
            ],
            );

    $postQus = new question();
    $postQus->s_id = $s_id;
    $postQus->qus = $qus->question;
    $postQus->t_id = "null";
    $postQus->ans = "Not answered yet";
    $postQus->qus_photo = "null";
    $postQus->ans_photo = "null";
    $postQus->status = "pending";
    $postQus->s_feedback = "null";
    $postQus->save();

    Session::flash('posted','Question Posted');
    return redirect()->back();


    }
}
