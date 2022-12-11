<?php

namespace App\Http\Controllers;
use session;
use App\Models\teacher_infos;
use App\Http\Controllers\tlogcontroller;
use App\Models\teacher_info;
use Illuminate\Http\Request;

class tprofcontroller extends Controller
{
    function showdata()
    {
        if(session()->has('email'))
        {
           $tid=session()->get('id');
           $data=  teacher_infos::where('t_id',$tid)->get();
           return view('teacher.tprofile',['teacher_info'=>$data]);       
        }
        else
        {
            echo "access denied";
        }
            //$req->session()->put('name',$session[0]->t_id);  
            //echo $session[0];       
    }
    function showname()
    {
        if(session()->has('email'))
        {
           $tid=session()->get('id');
           $data=  teacher_infos::where('t_id',$tid)->get();
           return view('teacher.inc.side',['teacher_info'=>$data]);       
        }
            //$req->session()->put('name',$session[0]->t_id);  
            //echo $session[0];       
    }
    
    function updatedata(Request $req)
    {
        //$tid=session()->get('id');
        $tid =13;
       $tup=  teacher_infos::where('t_id',$tid)->first();
               // $tup=new teacher_infos;
                $tup->name=$req->input('name');
                $tup->t_email=$req->input('email');
                $tup->phoneno=$req->phn;
                $tup->password=$req->pass;
                $tup->current_job=$req->cj;
                $tup->cv=$req->cv;
                if($req->hasfile('photo'))
                {
                $img = $req->file('photo');
                $name = $img->getClientOriginalName();
                $fileName = 'public/assets/images/'. $name;
                $img->move('public/assets/images/', $fileName);
                $tup->photo = $fileName;
                }
                //$tup->photo=$req->photo;
                $tup->dob=$req->dob;
                $tup->save();
                //return redirect("tprofile");
                return $tup;
    }

      
    


}
