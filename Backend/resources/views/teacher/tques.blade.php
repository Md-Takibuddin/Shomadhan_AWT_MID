@extends('teacher.layouts.app')
@section('content')
     <h2>Question Pending</h2> 


<h1>Question List</h1>

<table border="0" width="90%">
    <tr>
        <th>Question ID</th>
          
        <th>Student ID</th>
          
        <th>Question</th>
                
        <th>Question Photo</th>

        <th>Action</th>
      
    </tr>
    <tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    </tr>
   
    @foreach($questions as $question)
    <tr>
<col style="width:10%">
<col style="width:10%">
<col style="width:40%">
<col style="width:30%">

        <td align="center">{{$question['id']}}</td>
          
        <td align="center">{{$question['s_id']}}</td>
          
        <td align="center">{{$question['qus']}}</td>
                    
        <td align="center"><img src="{{$question['qus_photo']}}" alt="question photo" width="120" height="90"></td>

        <td align="center"><a href={{"insans/". $question['id'] }}>Give Answer</a></td>
                             
            
    </tr>
    @endforeach
</table>
</center>
    
   
      
    
    </div>

    </div>

@endsection










    <link rel="stylesheet" href="/css/side.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">
    <link rel="stylesheet" href="/css/flex.css">