import "./grid.css";
import "./button.css";
import Tsidebar from "./Tsidebar";
import axios from "axios";
import { useEffect, useState } from "react";

const Tdash = () => {

    const [accepted, setAccepted] = useState();
    const [pending, setPending] = useState();
    const [ans, setAns] = useState();
    const [quspend, setQuspend] = useState();
    const [appointment, setAppointment] = useState();
 
    const [userInfo, setInfo] = useState(() => {
       // getting stored value
       const saved = localStorage.getItem("userInfo");
       const initialValue = JSON.parse(saved);
       return initialValue;
    });
 
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


    const dummy1=5;
    const dummy2=50;
    const dummy3=25;

    const [posts, setPosts] = useState ([]);

   

    return ( 
/*
<div classNameName="parent">
<div classNameName="div1">Somadhan</div>
<div classNameName="div2"> </div>
<div classNameName="div3"></div>
<div classNameName="div4"> <Tsidebar/> </div>
<div classNameName="div5"><button classNameName="button-36" role="button">{dummy1} Question Pending</button></div>
<div classNameName="div6"><button classNameName="button-37" role="button">{dummy2} Appointment List</button></div>
<div classNameName="div7"><button classNameName="button-38" role="button">{dummy3} Question Answered</button></div>
<div classNameName="div8"></div>
<div classNameName="div9"> </div>
<div classNameName="div10"> </div>
<div classNameName="div11"> </div>
</div>
*/
<html>
Somadhan
<Tsidebar />
<div className="myflex">
<div><a href="/teacher-ques"><button className="button-36" role="button">{ans} <br/>Question Pending</button></a></div>
<div><a href="/teacher-appointment"><button className="button-37" role="button">{appointment} <br/>Appointment List</button></a></div>
<div><a href="/teacher-showans"><button className="button-38" role="button">{quspend} <br/>Question Answered</button></a></div>
</div>
</html>

     );
}
 
export default Tdash;