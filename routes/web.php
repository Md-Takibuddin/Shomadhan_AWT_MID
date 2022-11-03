<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\studentLogin;
use App\Http\Controllers\studentRegistration;


Route::get('/', function () {
    return view('welcome');
});

Route::get('/login',[studentLogin::class,'login']);
Route::get('/signup',[studentRegistration::class,'registration']);
Route::post('/registrationData',[studentRegistration::class,'registrationData']);
Route::post('/loginData',[studentLogin::class,'loginData']);
Route::get('/dashboard',[studentLogin::class,'dashboard']);
