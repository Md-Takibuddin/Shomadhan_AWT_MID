<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\appointment;


class studentAppointment extends Controller
{
    public function appointment()
    {
       return view('student.appointment');
    }
}
