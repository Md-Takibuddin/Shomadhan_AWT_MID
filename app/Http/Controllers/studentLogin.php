<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\student_info;
use Session;
use Hash;

class studentLogin extends Controller
{
    public function login()
    {
        return view("student.login");
    }
}

