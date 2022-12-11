const Treg = () => {
    return ( 
        
<html>
<head>
  <title>Somadhan</title>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>


<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>

</head>
<body>
<form action="treg" enctype="multipart/form-data" method="POST">
    @csrf
<!-- partial:index.partial.html -->
<div class="box-form">
	<div class="left">
		<div class="overlay">
		<h1></h1>
        <img src="public\assets\images\logo.png" alt="somadhan" class="logo">
		<p>Somadhan is your best companion for study. Access answers to all the question you have. Live tutors to help you out. <br>Join Today! </p>
		<span>
			<p>Visit our social media pages</p>
			<a href="https://www.facebook.com/"><i class="fa fa-facebook" aria-hidden="true"></i></a>
			<a href="https://www.twitter.com/"><i class="fa fa-twitter" aria-hidden="true"></i> Twitter</a>
		</span>
		</div>
	</div>
	
	
		<div class="right">
		<h1>Register</h1>
		<p>Already have an account? <a href="{{url('tlog')}}">Log in now</a></p>
		<div class="inputs">
       
        Name:
   
    <input type="text" id="name" name="name">
<span style="color:red">@error('name'){{$message}}@enderror</span><br>
       
Email:   
    <input type="email" id="email" name="email">
    <span style="color:red">@error('email'){{$message}}@enderror</span><br>

   
        Phone No:
   
    <input type="text" id="phn" name="phn">
    <span style="color:red">@error('phn'){{$message}}@enderror</span><br>

        Password:
 
    <input type="text" id="pass" name="pass">
    <span style="color:red">@error('pass'){{$message}}@enderror</span><br>

        Current Job:
   
    <input type="text" id="cj" name="cj">
    <span style="color:red">@error('cj'){{$message}}@enderror</span><br>

        CV:
   
    <input type="file" id="cv" name="cv" accept=".pdf">
    <span style="color:red">@error('cv'){{$message}}@enderror</span>
<br>

        Photo:

    <input type="file" id="photo" name="photo" accept="image/*">
    <span style="color:red">@error('photo'){{$message}}@enderror</span><br>

        DoB:
   
    <input type="date" id="dob" name="dob">
    <span style="color:red">@error('dob'){{$message}}@enderror</span><br>
		</div>
			
	
			
		
			
			<button>Register</button>
	</div>
	
</div>
<!-- partial -->
</form>
</body>
</html>
     );
}
 
export default Treg;