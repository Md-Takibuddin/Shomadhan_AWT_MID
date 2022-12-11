import Tsidebar from "./Tsidebar";
import "./teacherques.css";
import axios from "axios";
import { useEffect, useState } from "react";
const Tans = () => {

    const [userInfo, setInfo] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("userInfo");
        const initialValue = JSON.parse(saved);
        return initialValue;
     });
   // const [qid, setQid] = useState();
   // const [sid, setSid] = useState();
    const [ans, setAns] = useState();
    //const [qusphoto, setPhoto] = useState();
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
           setAns(resp.data[5]);
           //setQid(resp.data[3][0]);
           console.log(resp.data[5])
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
            <h2>Answered Question</h2> 


<h1>Question List</h1>
<div className="tques">
<table border="0" width="80%" >
    <tr>
        <th>Question ID</th>
          
        <th>Student ID</th>
          
        <th>Question</th>

        <th>Question Photo</th>
        
        <th>Answer</th>

        <th>Answer Photo</th>
                
        


      
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

        <td align="center"></td>
          
        <td align="center"></td>
          
        <td align="center"></td>
        
        <td align="center"><img src="" alt="question photo" width="120" height="90"/></td>
        
        <td align="left"></td>

        <td align="center"><img src="" alt="answer photo" width="120" height="90"/></td>
                       
    </tr>
</table>

            </div>
            </center>
        </div>
     );
}
 
export default Tans;