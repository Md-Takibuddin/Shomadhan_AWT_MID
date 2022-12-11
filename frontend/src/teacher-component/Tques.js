import Tsidebar from "./Tsidebar";
import "./teacherques.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Tques = () => {

    const [userInfo, setInfo] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("userInfo");
        const initialValue = JSON.parse(saved);
        return initialValue;
     });
    const [qid, setQid] = useState();
    const [sid, setSid] = useState();
    const [qus, setQus] = useState();
    const [qusphoto, setPhoto] = useState();
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
           //setQid(resp.data[3][0]);
           //setSid(resp.data[3][0]);
           setQus(resp.data[3]);
           //setQid(resp.data[3][0]);
           console.log(resp.data)
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
    <h2>Question Pending</h2> 
    <h1>Question List</h1>
<div className="tques">
  
           

    //console.log(qus.qus),
<table border="0" width="90%">
    <tr>
        <th>Question ID</th>
          
        <th>Student ID</th>
          
        <th>Question</th>
                
        <th>Question Photo</th>

        <th>Action</th>
      
    </tr>
    <tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    </tr>
    {qus?.map((qus) => (
    <tr>

        <td align="center">{qus.id}</td>
          
        <td align="center">{qus.s_id}</td>
          
        <td align="center">{qus.qus}</td>
                    
        <td align="center"><img src={qus.qus_photo} alt="question photo" width="120" height="90"/></td>

        <td align="center"><a href="/teacher-answer">Give Answer</a></td>
                             
            
    </tr>
 ))}
</table>
 
</div></center>
</div>
      
      ); 
}
 
export default Tques;