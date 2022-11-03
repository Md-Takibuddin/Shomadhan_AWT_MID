
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <title>Login</title>
  </head>
<br><br><br>
  <body>
    <div class="container">
<br><br>
@if(Session::has('fail'))
<p class="alert alert-danger">Email or Password in incorrect.</p>
@endif


<form action="{{url('loginData')}}" method="post">
    @csrf
  <div class="form-row">
    <div class="form-group col-md-3">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" name="email" value="{{old('email')}}">
      @error('email')
        <span class="text-error" style="color: red">{{$message}}</span>
      @enderror
    </div>
</div>
<div class="form-row">
    <div class="form-group col-md-3">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" name="password">
      @error('password')
      <span class="text-error" style="color: red">{{$message}}</span>
    @enderror
    </div>

</div>
  <input type="submit" class="btn btn-primary" value="Login">
  <a href="{{url('signup')}}" class="btn btn-primary my-3">Registration</a>
</form>

    </div>
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  </body>
</html>

