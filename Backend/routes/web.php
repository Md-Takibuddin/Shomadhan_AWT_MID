<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\studentLogin;
use App\Http\Controllers\studentRegistration;
use App\Http\Controllers\studentQuestion;
use App\Http\Controllers\studentSettings;
use App\Http\Controllers\studentDashboard;
use App\Http\Controllers\studentAppointment;


use App\Http\Controllers\teacherRegcontroller;
use App\Http\Controllers\tlogcontroller;
use App\Http\Controllers\tquescontroller;
use App\Http\Controllers\tprofcontroller;
use App\Http\Controllers\tcrappointmentcontroller;
use App\Http\Controllers\insainscontroller;
use App\Http\Middleware\validatelogin;
use Illuminate\Http\Request;



Route::get('/', function () {
    return view('student.login');
});

Route::get('/login',[studentLogin::class,'login']);
Route::get('/signup',[studentRegistration::class,'registration']);
Route::post('/registrationData',[studentRegistration::class,'registrationData']);
Route::post('/loginData',[studentLogin::class,'loginData']);
Route::get('/dashboard',[studentDashboard::class,'dashboard'])->middleware('loginCheck');
Route::get('/logout',[studentLogin::class,'logout']);
Route::get('/question',[studentQuestion::class,'question'])->middleware('loginCheck');
Route::post('/postQuestion',[studentQuestion::class,'postQuestion']);
Route::get('/settings',[studentSettings::class,'settings'])->middleware('loginCheck');
Route::get('/appointment',[studentAppointment::class,'appointment'])->middleware('loginCheck');
Route::get('/questionView/{id}',[studentQuestion::class,'qusView']);
Route::put('/updateData',[studentSettings::class,'updateData']);
Route::put('/updatePass',[studentSettings::class,'updatePass']);
Route::post('/setAppointment',[studentAppointment::class,'setAppointment'])->middleware('loginCheck');

Route::group(['middleware'=>'web'],function(){
    Route::view("Register","teacher.treg");
    Route::post("treg",[teacherRegcontroller::class,'inputData']);
    Route::post("tdash",[tlogcontroller::class,'checkLogin']);
    //Route::get("tlog",[tlogcontroller::class,'checkLogin']);
    Route::get("tlogout",[tlogcontroller::class,'logout'])->name('tlogout');
   //Route::view("/","tlog");
    Route::view("tlog","teacher.tlog");
    Route::view("tdash","teacher.tdash");
    Route::view("tques","teacher.tques");
    Route::view("tnotific","teacher.tnotific");
    Route::view("apnt","teacher.tcappnt");
    Route::view("tabout","teacher.tabout");
    Route::get("tques",[tquescontroller::class,'unansques']);
    Route::get("tans",[tquescontroller::class,'ansques']);
    Route::get("tprofile",[tprofcontroller::class,'showdata']);
    Route::get("inc.side",[tprofcontroller::class,'showname']);
    Route::post("tprofile",[tprofcontroller::class,'updatedata']);
    Route::get("tdash",[tquescontroller::class,'quescount']);
    //Route::get("tdash",[tprofcontroller::class,'showdata']);
    Route::get("apnt",[tcrappointmentcontroller::class,'appointment']);
    Route::get("insans/{q_id}",[insainscontroller::class,'ans']);
    Route::post("insans",[insainscontroller::class,'ansupdate']);

    });
