import Tsidebar from "./Tsidebar";
import "./teacherques.css";

const Tans = () => {
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