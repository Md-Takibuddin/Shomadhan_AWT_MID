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
}
