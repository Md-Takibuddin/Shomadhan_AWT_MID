<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\student_info;
use Session;

class studentSettings extends Controller
{
    public function settings()
    {
        $data = student_info::where ('email','=',Session::get('email'))->first();
        $photo = $data->photo;
        return view('student.settings',compact('data','photo'));
    }

    public function updateData(Request $newData)
    {
        $data = student_info::where ('email','=',Session::get('email'))->first();


        $data ->dob = $newData->dob;
        $data ->phone_number = $newData->phone_no;
        $data ->school = $newData->school_collage;
        $data ->class = $newData->class;
        $data->save();
        return redirect()->back();
    }
}
