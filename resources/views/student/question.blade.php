<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Question</title>
</head>
<body>


<br><br>

@if(Session::has('posted'))
        <p class="alert alert-success">{{Session::get('posted')}}</p>
        @endif
        <p >{{Session::get('id')}}</p>
<form action="{{url('postQuestion')}}" method="get">
<br>
<table>
    @foreach ($qus as $data)
    <tr>
        <td>Qus : {{ $data ->qus}}</td>
        <td>Ans : {{ $data ->ans}}</td>
    </tr>
    @endforeach
</table>


<br>
    <input type="text" name="question" placeholder="type your qus here">
    @error('question')
    <span class="text-error" style="color: red">{{$message}}</span>
  @enderror

    <input type="submit" class="btn btn-primary my-3">

</form>





</body>
</html>
