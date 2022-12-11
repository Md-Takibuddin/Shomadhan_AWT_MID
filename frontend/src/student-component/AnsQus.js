import React, { useEffect } from "react";
import axios from "axios";
import { useLocalStorage } from "../hook";
import { useState, userEffect } from "react";
import { Link } from "react-router-dom";

const AnsQus = () => {
   const [qus, setQus] = useState();
   const [userInfo, setInfo] = useState(() => {
      // getting stored value
      const saved = localStorage.getItem("userInfo");
      const initialValue = JSON.parse(saved);
      return initialValue;
   });
   // componentDidMount() {
   //    axios.get(`http://127.0.0.1:8000/api/ansqus`).then((res) => {
   //       const qus = res.data;
   //       this.setState({ qus });
   //    });
   // }
   // let obj = { s_id: userInfo.id };

   // console.log(obj);
   const callApi = async () => {
      try {
         const resp = await axios.post("http://127.0.0.1:8000/api/ansqus", {
            s_id: userInfo.id,
         });
         //  const setQus = resp.data;
         setQus(resp.data);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      callApi();
   }, []);
   return (
      <div className="grid grid-cols-12 gap-5">
         {qus?.map((qus) => (
            <Link
               to={`/questionView/${qus.id}`}
               className="w-full space-y-3 | col-span-4 |
        bg-white p-5 rounded-xl | cursor-pointer hover:shadow-md transition-shadow duration-300"
            >
               <div className="flex space-x-5">
                  <span className="text-purple bg-purple bg-opacity-10 h-min px-2 py-1 rounded font-medium text-lg">
                     Q
                  </span>
                  <p>{qus.qus}</p>
               </div>
               <div className="flex space-x-5">
                  <span className="text-green bg-green bg-opacity-10 h-min px-2 py-1 rounded font-medium text-lg">
                     A
                  </span>
                  <p className="truncate">{qus.ans}</p>
               </div>
               <span className="flex pt-2 space-x-2">
                  <span className="text-light_gray text-sm">
                     Solver by {qus.t_id}
                  </span>
                  <img
                     className="h-5 w-5"
                     src="storage/ui-photos/dashboard/solved.png"
                     alt=""
                  />
               </span>
            </Link>
            //    <li key={qus.id}>{qus.qus}</li>
         ))}
      </div>
   );
};

// import "../Student.css";
// import { Link } from "react-router-dom";
// import React, { useState, userEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// state = {
//    data: [],
// };
// const AnsQus = () => {
//    axios.get(`http://127.0.0.1:8000/api/ansqus`).then((res) => {
//       const data = res.data;
//       this.setState({ data });
//    });

//    return data.map((data) => {
//       <a
//          href="{{url('questionView/'.$data ->id)}}"
//          className="w-full space-y-3 | col-span-4 |
//         bg-white p-5 rounded-xl | cursor-pointer hover:shadow-md transition-shadow duration-300"
//       >
//          <div className="flex space-x-5">
//             <span className="text-purple bg-purple bg-opacity-10 h-min px-2 py-1 rounded font-medium text-lg">
//                Q
//             </span>
//             <p>{data.qus}</p>
//          </div>
//          <div className="flex space-x-5">
//             <span className="text-green bg-green bg-opacity-10 h-min px-2 py-1 rounded font-medium text-lg">
//                A
//             </span>
//             <p className="truncate">{data.ans}</p>
//          </div>
//          <span className="flex pt-2 space-x-2">
//             <span className="text-light_gray text-sm">
//                Solver by {data.t_id}
//             </span>
//             <img
//                className="h-5 w-5"
//                src="storage/ui-photos/dashboard/solved.png"
//                alt=""
//             />
//          </span>
//       </a>;
//    });
// };

export default AnsQus;
