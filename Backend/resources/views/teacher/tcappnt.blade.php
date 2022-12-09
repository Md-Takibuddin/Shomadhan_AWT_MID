@extends('teacher.layouts.app')
@section('content')
     <h2> </h2> 


<h1>Appointment List</h1>

<table border="0" width="100%" style="color:mediumslateblue">
    <tr>
        <th>Appointment ID</th>
          
        <th>Student ID</th>
          
        <th>Subject</th>
        
        <th>Duration</th>
                
        <th>Date</th>

        <th>Status</th>
      
    </tr>
    <tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    </tr>
   
    @foreach($apnt as $appointment)
    <tr>


        <td align="center">{{$appointment['ap_id']}}</td>
          
        <td align="center">{{$appointment['s_id']}}</td>
          
        <td align="center">{{$appointment['subject']}}</td>

        <td align="center">{{$appointment['duration']}}</td>
                    
        <td align="center">{{$appointment['date']}}</td>

        <td align="center">{{$appointment['status']}}</td>
        <td>&nbsp;</td>
            <br>
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