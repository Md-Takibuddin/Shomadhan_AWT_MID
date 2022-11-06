<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\studentLogin;
use App\Http\Controllers\studentRegistration;
use App\Http\Controllers\studentQuestion;
use App\Http\Controllers\studentSettings;
use App\Http\Controllers\studentDashboard;
use App\Http\Controllers\studentAppointment;



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
Route::get('/questionView/{id}',[studentQuestion::class,'viewQus']);


Route::get('test',function () {
    return view('student.questionView');
 });

