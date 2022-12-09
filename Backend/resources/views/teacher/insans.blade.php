@extends('teacher.layouts.app')
@section('content')
     <h2>Answering</h2> 
@foreach($answer as $answer)
     <form action="/insans" method="post" enctype="multipart/form-data">
      @csrf

      <br><br>
    Question ID:   
  <label>{{$answer['id']}}</label>  
   <br>
    <br>
   
    Student ID:   
  <label>{{$answer['s_id']}}</label>  
   <br>
    <br>
   
    Question:   
  <label>{{$answer['qus']}}</label>  
   <br>
    <br>
   
    Question Photo:&nbsp;<br>   
  <label><img src="{{$answer['qus_photo']}}" alt="Question photo" width="120" height="90"></label>  
   <br>
    <br>
   
    Answer:   
<input type="hidden" name="an3" id="an3" value="{{$answer['id']}}"> 

<!--input type="text" name="an1" id="" value="{{$answer['ans']}}" class="bigbox"  required-->
<textarea name="an1" id="" cols="90" rows="5" required class="bigbox"></textarea>  
   <br>
    <br>
    Answer Photo:   
<input type="file" name="an2" id="">  
   <br>
    <br>
     <input type="submit" value="Submit Answer">  
   

@endforeach


@endsection

<link rel="stylesheet" href="/css/flex.css">