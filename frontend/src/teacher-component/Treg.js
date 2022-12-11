
const Treg = () => {
    return ( 
        
<html>
<head>
  <title>Somadhan</title>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>


<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
</head>
<body>
<div class="box-form">
	<div class="left">
		<div class="overlay">
		<h1></h1>
        <img src="#" alt="somadhan" class="logo"/>
		<p>Somadhan is your best companion for study. Access answers to all the question you have. Live tutors to help you out. <br/>Join Today! </p>
		<span>
			<p>Visit our social media pages</p>
			<a href="https://www.facebook.com/"><i class="fa fa-facebook" aria-hidden="true"></i></a>
			<a href="https://www.twitter.com/"><i class="fa fa-twitter" aria-hidden="true"></i> Twitter</a>
		</span>
		</div>
	</div>
	
	
		<div class="right">
		<h1>Register</h1>
		<p>Already have an account? <a href="#">Log in now</a></p>
		<div class="inputs">
       
        Name:
   
    <input type="text" id="name" name="name"/>
<span style="color:red"></span><br/>
       
Email:   
    <input type="email" id="email" name="email"/>
    <span style="color:red"></span><br/>

   
        Phone No:
   
    <input type="text" id="phn" name="phn"/>
    <span style="color:red"></span><br/>

        Password:
 
    <input type="text" id="pass" name="pass"/>
    <span style="color:red"></span><br/>

        Current Job:
   
    <input type="text" id="cj" name="cj"/>
    <span style="color:red"></span><br/>

        CV:
   
    <input type="file" id="cv" name="cv" accept=".pdf/"/>
    <span style="color:red"></span>
<br/>

        Photo:

    <input type="file" id="photo" name="photo" accept="image/*"/>
    <span style="color:red"></span><br/>

        DoB:
   
    <input type="date" id="dob" name="dob "/>
    <span style="color:red"></span><br/>
		</div>
		
			
	
			
		
			
			<button>Register</button>
	</div>
	
</div>

</body>
</html>
     );
}
 
export default Treg;