<?php

namespace App\Http\Controllers;

use App\Models\teacher_infos;
use Illuminate\Http\Request;

class teacherRegcontroller extends Controller
{
    function inputData(Request $req)
    {
        $req->validate([
            "name"=>"required",
            "email"=>"required",
            "phn"=>"required",
            "pass"=>"required",
            "cj"=>"required",
            "cv"=>"required",
            "photo"=>"required",
            "dob"=>"required",
            ]);
            
            if($req==true)
            {
                $member = new teacher_infos();
                $member->name=$req->name;
                $member->t_email=$req->email;
                $member->phoneno=$req->phn;
                $member->password=$req->pass;
                $member->current_job=$req->cj;
                $member->cv=$req->cv;


                $img = $req->file('photo');
                $name = $img->getClientOriginalName();
                $fileName = 'public/assets/images/'. $name;
                $img->move('public/assets/images/', $fileName);
                $member->photo = $fileName;

                //$member->photo=$req->photo;   return redirect("tlog");
                $member->dob=$req->dob;
                $member->save();
                return redirect("tlog");
                
            }
        }

}
