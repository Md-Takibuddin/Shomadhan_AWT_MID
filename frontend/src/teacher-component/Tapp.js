import Tsidebar from "./Tsidebar";
import "./teacherques.css";
const Tapp = () => {
    return ( 
        <div>
            <Tsidebar/>
            <center>
            <h1>Appointment List</h1>
            <div className="tques">
<table border="0" width="90%">
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
   

    <tr>


        <td></td>
          
        <td></td>
          
        <td></td>

        <td></td>
                    
        <td></td>

        <td></td>

    </tr>
 
</table>
</div>
</center> 
        </div>
     );
}
 
export default Tapp;