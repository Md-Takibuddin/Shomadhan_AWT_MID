import Tsidebar from "./Tsidebar";
import "./teacherques.css";

const Tgiveans = () => {
    return ( 
<div>
    <Tsidebar/>
    <div>
        <center>
    <h2>Answering</h2> 
     <form action="#" method="post" enctype="multipart/form-data">

      <br/><br/>
    Question ID:   
  <label>01</label>  
   <br/>
    <br/>
   
    Student ID:   
  <label>06</label>  
   <br/>
    <br/>
   
    Question:   
  <label>What is React?</label>  
   <br/>
    <br/>
   
    Question Photo:&nbsp;<br/>   
  <label><img src="" alt="Question photo" width="120" height="90"/></label>  
   <br/>
    <br/>
   
    Answer:   
<input type="hidden" name="an3" id="an3" value=""/> 

<textarea name="an1" id="" cols="90" rows="5" required class="bigbox"></textarea>  
   <br/>
    <br/>
    Answer Photo:   
<input type="file" name="an2" id=""/>  
   <br/>
    <br/>
     <input type="submit" value="Submit Answer"/>  
   </form>
   </center>
    </div>
</div>
     );
}
 
export default Tgiveans;