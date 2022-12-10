<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\studentQuestion;
use App\Http\Controllers\studentLogin;
use App\Http\Controllers\studentRegistration;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
// student API
Route::get('/qus/list',[studentQuestion::class,'apiTest']);
Route::post('/qus/post',[studentQuestion::class,'apiPost']);
Route::post('/reactLogin',[studentLogin::class,'reactLogin']);
Route::get('/ansqus',[studentQuestion::class,'ansqus']);
Route::post('/postQus',[studentQuestion::class,'postQus']);
Route::post('/reactSignIn',[studentRegistration::class,'reactSignIn']);


//teacher API
