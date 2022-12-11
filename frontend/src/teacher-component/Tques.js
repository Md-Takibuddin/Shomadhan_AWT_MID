import Tsidebar from "./Tsidebar";
import "./teacherques.css";
const Tques = () => {

    const [ans, setAns] = useState();
    const callApi = async () => {
        try {
           const resp = await axios.post(
              "http://127.0.0.1:8000/api/tdashdata",
              {
                 t_id: userInfo.t_id,
              }
           );
           const { accepted, pending } = resp.data;
           setAccepted(accepted);
           setPending(pending);
           setAns(resp.data[1]);
           setQuspend(resp.data[0]);
           setAppointment(resp.data[2]);
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
  
    <tr>

        <td align="center"></td>
          
        <td align="center"></td>
          
        <td align="center"></td>
                    
        <td align="center"><img src="#" alt="question photo" width="120" height="90"/></td>

        <td align="center"><a href="/teacher-answer">Give Answer</a></td>
                             
            
    </tr>

</table>

</div></center>
</div>
        
      );
}
 
export default Tques;