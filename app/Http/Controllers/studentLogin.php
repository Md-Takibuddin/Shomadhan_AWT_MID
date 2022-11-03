<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\student;

class studentLogin extends Controller
{
    public function login()
    {
        return view("student.login");
    }
}

