<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <title>Dashboard</title>
  </head>
<br><br><br>
  <body>
    <div class="container">
        <a href="{{url('logout')}}" class="btn btn-primary my-3 float-right" >Log Out</a>
        <h4>Welcome to Dashboard</h4>
<br><br>


@if(Session::has('email'))
<p >{{Session::get('email')}}</p>
@endif


<img src="{{asset('/storage/images/1667605720Takib uddin74575217_2520664701356780_5892743916645515264_n.jpg')}}" >

<a href="{{url('myData')}}" class="btn btn-primary my-3">My Data</a>
<a href="{{url('show-data')}}" class="btn btn-primary my-3">See All User</a>


    </div>
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  </body>
</html>


