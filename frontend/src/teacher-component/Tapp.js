import Tsidebar from "./Tsidebar";
import "./teacherques.css";
import axios from "axios";
import { useEffect, useState } from "react";
const Tapp = () => {

    
    const [userInfo, setInfo] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("userInfo");
        const initialValue = JSON.parse(saved);
        return initialValue;
     });
    const [appointment, setAppointment] = useState();
   
    const callApi = async () => {
        try {
           const resp = await axios.post(
              "http://127.0.0.1:8000/api/tdashdata",
              {
                 t_id: userInfo.t_id,
              }
           );
           const { accepted, pending } = resp.data;
           //setAccepted(accepted);
           //setPending(pending);
           setAppointment(resp.data[4]);
          // setSid(resp.data[3][0]);
           //setQus(resp.data[3]);
           //setQid(resp.data[3][0]);
           console.log(resp.data[4])
        } catch (error) {
           console.log(error);
        }
     };
  
     useEffect(() => {
        callApi();
     }, []);

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
   
    {appointment?.map((appointment) => (
    <tr align="center">


        <td>{appointment.id}</td>
          
        <td>{appointment.s_id}</td>
          
        <td>{appointment.subject}</td>

        <td>{appointment.duration}</td>
                    
        <td>{appointment.date}</td>

        <td>{appointment.status}</td>

    </tr>
    ))}
</table>
</div>
</center> 
        </div>
     );
}
 
export default Tapp;