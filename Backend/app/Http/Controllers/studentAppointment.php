<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\appointment;
use Session;


class studentAppointment extends Controller
{
    public function appointment()
    {
        $s_id= Session::get('id');
        $acceptedApnt = appointment::where
        ([
            ['s_id','=',$s_id],
            ['status', '=', 'accepted'],
        ])->get();

        $pendingApnt = appointment::where
        ([
            ['s_id','=',$s_id],
            ['status', '=', 'pending'],
        ])->get();

    return view('student.appointment',compact('acceptedApnt','pendingApnt'));

    }

    public function setAppointment(Request $apoData)
    {
        // $validate = $apoData->validate([
        //     "data"=>"required",
        //     'subject'=>'required',
        //     'chapter'=>'required',
        //     'duration'=>'required'
        //     ],
        //     );

        $appointment = new appointment();
        $appointment->s_id =  Session::get('id');
        $appointment->date = $apoData->date;
        $appointment->duration = $apoData->duration;
        $appointment->subject = $apoData->subject;
        $appointment->status = "pending";
        $appointment->save();

        Session::flash('applied','true');
        return redirect()->back();

    }
    public function postAppointment(Request $apoData)
    {
        $appointment = new appointment();
        $appointment->s_id =  $apoData->s_id;;
        $appointment->date = $apoData->date;
        $appointment->duration = $apoData->duration;
        $appointment->subject = $apoData->subject;
        $appointment->status = "pending";
        if($appointment->save()){
            return "Posted";
        }else return "Error";
    }
}
