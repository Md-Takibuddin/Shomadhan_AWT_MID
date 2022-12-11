<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\student_info;
use Illuminate\Support\Facades\File;
use Session;
use Hash;
use Mail;

class studentRegistration extends Controller
{
    public function registration()
    {
        return view("student.registration");
    }

    public function registrationData(Request $regData)
    {
        $validate = $regData->validate([
                    "name"=>"required|max:20",
                    'phone_number'=>'required|regex:/^([0-9\s\-\+\(\)]*)$/ |unique:student_infos',
                    'school'=>'required',
                    'class'=>'required',
                    'dob'=>'required|date|before:-12 years',
                    'email'=>'required|email|unique:student_infos',
                    'password'=>'required'
                    ],
                    );
        $at="basic";
        $tq=0;

        $student = new Student_info();
        $student->name = $regData->name;
        $student->phone_number = $regData->phone_number;
        $student->email = $regData->email;
        $student->password = Hash::make ($regData->password);
        $student->school = $regData->school;
        $student->class = $regData->class;
        $student->dob = $regData->dob;


        if($regData->file('photo')){

        $photoName= time().$regData->name.".".$regData->file('photo')->getClientOriginalExtension();
        $path = $regData->file('photo')->storeAs('/public/images',$photoName);
        $student['photo']='/storage/public/images/'.$photoName;
        // $student->photo = $regData->photo;
        }else{
            $student['photo']='storage/ui-photos/userdp.png';
        }

        $student->account_type =  $at;
        $student->total_qus = $tq;
        $student->save();


        Session::flash('regSuccess','Congratulation! Registration successful');
        return redirect()->back();
    }

    public function reactSignIn(Request $regData )
    {
        $at="basic";
        $tq=0;

        $student = new Student_info();
        $student->name = $regData->name;
        $student->phone_number = $regData->phone_number;
        $student->email = $regData->email;
        $student->password = Hash::make ($regData->password);
        $student->school = $regData->school;
        $student->class = $regData->class;
        $student->dob = $regData->dob;
        if($regData->file('photo')){

            $photoName= time().$regData->name.".".$regData->file('photo')->getClientOriginalExtension();
            $path = $regData->file('photo')->storeAs('/images',$photoName);
            $student['photo']='http://localhost:8000/storage/images/'.$photoName;
            }else{
                $student['photo']='http://localhost:8000/storage/ui-photos/userdp.png';
            }

            $student->account_type =  $at;
            $student->total_qus = $tq;

            if($student->save()){
                $name =['name'=> $regData->name];
                $email['to']=$regData->email;
                Mail::send('mail',$name, function ($message)use ($email) {
                    $message->from('shomadhan.edu@gmail.com', 'Shomadhan');
                    $message->to($email['to']);
                    $message->subject('Account Created Successful');
                });

                return "Data saved";
            }else return "not saved";


        // if ($vali){
        //         return $regData;
        // }else return "Invalid Data";
        // return $regData->file('photo');

    }

}
