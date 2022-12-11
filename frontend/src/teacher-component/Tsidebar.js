import "../Side.css";
import "./Tdash.js";

const Tsidebar = () => {
  
    return ( 
   


	<nav>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet"/>
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet"/>
		<ul>
			<li className="logo"></li>
			<li>
				<a href="/teacher-dash"><i className="fa fa-dashboard"></i>Dashboard</a>
			</li>
			<li>
      <a href="/teacher-profile"><i className="fa fa-picture-o"></i>portfolio</a>
        
			</li>
			<li>
				<a href="#"><i className="fa fa-bell"></i>Notification</a>
			</li>
			<li>
      <a href="#"><i className="fa fa-book"></i>about</a>
			</li>
			<li>
				<a href="/student-login"><i className="fa fa-sign-out"></i>LogOut</a>
			</li>
		</ul>
	</nav>


    );
}
 
export default Tsidebar;