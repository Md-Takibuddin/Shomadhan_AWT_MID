<?php

namespace App\Http\Controllers;


use App\Models\teacher_infos;
use Illuminate\Http\Request;
use session;

class tlogcontroller extends Controller
{
    //
    function checkLogin(Request $req)
    {

        $req->validate([
          
           "email"=>"required",
        
            "pass"=>"required"]);

   $session = teacher_infos::where('t_email', '=', $req->email)->where('password', '=', $req->pass)->get();  
   if (count($session)>0 && $req==true) {

    $req->session()->put('id',$session[0]->t_id);    
    $req->session()->put('name',$session[0]->name);    
    $req->session()->put('email',$session[0]->t_email);
    $req->session()->put('phn',$session[0]->phoneNo);
    $req->session()->put('pass',$session[0]->password);
    $req->session()->put('cj',$session[0]->current_job);
    $req->session()->put('cv',$session[0]->cv);
    $req->session()->put('db',$session[0]->dob);

    //echo $session[0];
    
    return redirect("tdash");
    //echo session()->get('email');
   }
   else
   {
    
    return back()->withInput()->withErrors(['warn'=>'Credentials do not match']);
    
   } 

    
 }

 public function logout(Request $req)
 {
  $req->session()->forget('id');    
  $req->session()->forget('name');    
  $req->session()->forget('email');
  $req->session()->forget('phn');
  $req->session()->forget('pass');
  $req->session()->forget('cj');
  $req->session()->forget('cv');
  $req->session()->forget('db');
  return redirect('tlog');
 }



}
