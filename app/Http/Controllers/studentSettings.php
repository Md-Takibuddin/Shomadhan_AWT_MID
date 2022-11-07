<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\student_info;
use Illuminate\Support\Facades\File;
use Session;
use Hash;

class studentSettings extends Controller
{
    public function settings()
    {
        $data = student_info::where ('email','=',Session::get('email'))->first();
        $photo = $data->photo;
        return view('student.settings',compact('data','photo'));
    }

    public function updateData(Request $newData)
    {
        $data = student_info::where ('email','=',Session::get('email'))->first();
        $data ->dob = $newData->dob;
        $data ->phone_number = $newData->phone_no;
        $data ->school = $newData->school_collage;
        $data ->class = $newData->class;

        if ($newData->file('photo')) {
                // if (File::exits($data->photo)) {
                //     File::delete($data->photo);
                // }
            $photoName= time().$data->name.".".$newData->file('photo')->getClientOriginalExtension();
            $path = $newData->file('photo')->storeAs('/public/images',$photoName);
            $data['photo']='/storage/images/'.$photoName;
            session()->put('photo','/storage/images/'.$photoName);

        }

        $data->save();
        return redirect()->back();
    }

    public function updatePass(Request $pass)
    {
        $validate = $pass->validate([
            'oldPass'=>'required',
            'newPass'=>'required'
            ],
            );

        $user = student_info::where ('email','=',Session::get('email'))->first();
        if ($user && Hash::check($pass->oldPass,$user->password)){
            $user->password = Hash::make ($pass->newPass);
            $user->save();

            Session::flash('passChanged','successful');
            return redirect()->back();
        }
        else {
            Session::flash('notChanged','unsuccessful');
            return redirect()->back();
        }
    }
}



