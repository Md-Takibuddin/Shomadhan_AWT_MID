
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <title>Registration</title>
  </head>

  <body>
    <div class="container">
        <a href="{{url('login')}}" class="btn btn-primary my-3">Back to Login</a>

        @if(Session::has('regSuccess'))
        <p class="alert alert-success">{{Session::get('regSuccess')}}</p>
        @endif

<form action="{{url('registrationData')}}" method="post" enctype="multipart/form-data">
    @csrf
    <div class="form-row">
    <div class="form-group col-md-6">
        <label for="inputAddress"> Name</label>
        <input type="text" class="form-control" name="name"value="{{old("name")}}">
        @error('name')
        <span class="text-error" style="color: red">{{$message}}</span>
      @enderror
    </div>
    <div class="form-group col-md-6">
        <label for="inputAddress">phone number</label>
        <input type="text" class="form-control" name="phone_number"value="{{old("phone_number")}}">
        @error('phone_number')
        <span class="text-error" style="color: red">{{$message}}</span>
      @enderror
    </div>
    <div class="form-row">
        <div class="form-group col-md-6">
            <label for="inputAddress"> School</label>
            <input type="text" class="form-control" name="school" value="{{old("school")}}">
            @error('school')
            <span class="text-error" style="color: red">{{$message}}</span>
          @enderror
        </div>
        <div class="form-group col-md-6">
            <label for="inputAddress">class</label>
            <input type="text" class="form-control" name="class" value="{{old("class")}}">
            @error('class')
            <span class="text-error" style="color: red">{{$message}}</span>
          @enderror
        </div>
        <div class="form-group col-md-6">
            <label for="inputAddress">Date of Birth</label>
            <input type="date" class="form-control" name="dob" value="{{old("dob")}}">
            @error('class')
            <span class="text-error" style="color: red">{{$message}}</span>
          @enderror
        </div>

</div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" name="email" value="{{old("email")}}">
      @error('email')
      <span class="text-error" style="color: red">{{$message}}</span>
    @enderror
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" name="password">
      @error('password')
      <span class="text-error" style="color: red">{{$message}}</span>
    @enderror
    </div>
    <div class="form-group col-md-6">
      <label for="inputphoto">Photo</label>
      <input type="file" class="form-control" name="photo">
      @error('file')
      <span class="text-error" style="color: red">{{$message}}</span>
    @enderror
    </div>
  </div>



  <input type="submit" class="btn btn-primary" value="Submit">
</form>

    </div>
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  </body>
</html>
