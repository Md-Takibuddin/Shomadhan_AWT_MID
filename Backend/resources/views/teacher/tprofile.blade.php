@extends('teacher.layouts.app')
@section('content')

@foreach($teacher_info as $teacher_info)
<form action="tprofile" method="POST" enctype="multipart/form-data">
@csrf
<div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="{{asset($teacher_info->photo)}}"><span class="font-weight-bold"> <input type="file" name="photo" accept="image/*"> {{$teacher_info['name']}}</span>{{$teacher_info['t_email']}}</span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Name</label><input type="text" name="name" class="form-control" value="{{$teacher_info['name']}}"></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">E-mail</label><input type="text" name="email" class="form-control" value="{{$teacher_info['t_email']}}"></div>
                    <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" name="phn" class="form-control" value="{{$teacher_info['phoneNo']}}"></div>
                    <div class="col-md-12"><label class="labels">Current Job</label><input type="text" name="cj" class="form-control" value="{{$teacher_info['current_job']}}"></div>
                    <div class="col-md-12"><label class="labels">Curriculum Vitae</label><input type="file" name="cv" accept=".pdf" class="form-control" placeholder="{{$teacher_info['cv']}}"  value="{{$teacher_info['cv']}}"></div>
                    <div class="col-md-12"><label class="labels">Date of Birth</label><input type="date" name="dob" class="form-control" value="{{$teacher_info['dob']}}"></div>
                    <div class="col-md-12"><label class="labels">Password</label><input type="text" name="pass" class="form-control" value="{{$teacher_info['password']}}"></div>
                </div>
                <div class="mt-5 text-center"><input class="btn btn-primary profile-button" type="submit" value="Save Profile"></div>
            </div>
        </div>
       
        </div>
    </div>
</div>
</div>
</div>
</form>
    @endforeach 
<link rel="stylesheet" href="/css/prof.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/css/bootstrap.min.css">

@endsection


