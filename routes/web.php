<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\studentLogin;
use App\Http\Controllers\studentRegistration;
use App\Http\Controllers\studentQuestion;
use App\Http\Controllers\studentSettings;
use App\Http\Controllers\studentDashboard;



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
Route::get('/postQuestion',[studentQuestion::class,'postQuestion']);
Route::get('/settings',[studentSettings::class,'settings'])->middleware('loginCheck');
