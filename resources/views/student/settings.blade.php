<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=br, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <br>
    <br>
    <table>
        <tr>
            <td>Name: <input type="text" value="{{$data->name}}"> </td>
        </tr>
        <tr>
            <td>number: <input type="text" value="{{$data->phone_number}}"> </td>
        </tr>
        <tr>
            <td>email: <input type="text" value="{{$data->email}}"> </td>
        </tr>
        <tr>
            <td>school: <input type="text" value="{{$data->school}}"> </td>
        </tr>
        <tr>
            <td>class: <input type="text" value="{{$data->class}}"> </td>
        </tr>
        <tr>
            <td>dob: <input type="text" value="{{$data->dob}}"> </td>
        </tr>
        <tr>
            <img src="{{asset("$photo")}}" >
        </tr>
    </table>
</body>
</html>
