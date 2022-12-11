import "./tlog.css";


const Treg = () => {
    return ( 
        
<html>
<head>
  <title>Somadhan</title>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>


<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
</head>
<body>
    <div className="max">
<div className="box-form">
	<div className="left">
		<div className="overlay">
		<h1></h1>
        <img src="storage\ui-photos\logo copy.png" alt="somadhan" className=""/>
		<p>Somadhan is your best companion for study. Access answers to all the question you have. Live tutors to help you out. <br/>Join Today! </p>
		<span>
			<p>Visit our social media pages</p>
			<a href="https://www.facebook.com/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
			<a href="https://www.twitter.com/"><i className="fa fa-twitter" aria-hidden="true"></i> Twitter</a>
		</span>
		</div>
	</div>
	
	
		<div className="right">
		<h1>Register</h1>
		<p>Already have an account? <a href="/student-login">Log in now</a></p>
		<div className="inputs">
       
        Name:
   
    <input type="text" id="name" name="name"/>
<span ></span><br/>
       
Email:   
    <input type="email" id="email" name="email"/>
    <span ></span><br/>

   
        Phone No:
   
    <input type="text" id="phn" name="phn"/>
    <span ></span><br/>

        Password:
 
    <input type="text" id="pass" name="pass"/>
    <span ></span><br/>

        Current Job:
   
    <input type="text" id="cj" name="cj"/>
    <span ></span><br/>

        CV:
   
    <input type="file" id="cv" name="cv" accept=".pdf/"/>
    <span ></span>
<br/>

        Photo:

    <input type="file" id="photo" name="photo" accept="image/*"/>
    <span ></span><br/>

        DoB:
   
    <input type="date" id="dob" name="dob "/>
    <span ></span><br/>
		</div>
		
			
	
			
		
			
			<button>Register</button>
	</div>
	
</div>
</div>
</body>
</html>
     );
}
 
export default Treg;