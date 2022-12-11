import React, { useEffect } from "react";
import axios from "axios";
import { useLocalStorage } from "../hook";
import { useState, userEffect } from "react";
import { Link } from "react-router-dom";

const AppointmentData = () => {
   const [accepted, setAccepted] = useState();
   const [pending, setPending] = useState();

   const [userInfo, setInfo] = useState(() => {
      // getting stored value
      const saved = localStorage.getItem("userInfo");
      const initialValue = JSON.parse(saved);
      return initialValue;
   });
   console.log(userInfo);
   console.log("-----------");
   console.log(userInfo.id, userInfo.email);
   const callApi = async () => {
      try {
         const resp = await axios.post(
            "http://127.0.0.1:8000/api/appointments",
            {
               s_id: userInfo.id,
            }
         );
         const { accepted, pending } = resp.data;
         setAccepted(accepted);
         setPending(pending);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      callApi();
   }, []);
   return (
      <section>
         <section>
            <h3 className="header-1 mb-4">Accepted Appointment</h3>
            <div className="grid grid-cols-12 gap-5">
               {accepted?.map((data) => (
                  <div className="w-full space-y-3 | col-span-4 | bg-white p-5 rounded-xl | cursor-pointer hover:shadow-md transition-shadow duration-300">
                     <div className="flex space-x-4">
                        <img
                           className="h-[22px] w-[22px]"
                           src="storage/ui-photos/dashboard/clndr.png"
                           alt=""
                        />
                        <span className="text-purple font-medium text-xl">
                           {data.date}
                        </span>
                     </div>
                     <div className="text-sm text-light_gray">
                        <div>Instructor : {data.t_id}</div>
                        <div>Subject : {data.subject}</div>
                     </div>
                  </div>
               ))}
            </div>
         </section>
         <br />
         <section>
            <h3 className="header-1 mb-4">Pending Appointment</h3>
            <div className="grid grid-cols-12 gap-5">
               {/* <!-- Item --> */}
               {pending?.map((data) => (
                  <div className="w-full space-y-3 | col-span-4 | bg-white p-5 rounded-xl | cursor-pointer hover:shadow-md transition-shadow duration-300">
                     <div className="flex space-x-4">
                        <img
                           className="h-[22px] w-[22px]"
                           src="storage/ui-photos/dashboard/clndr.png"
                           alt=""
                        />
                        <span className="text-purple font-medium text-xl">
                           {data.date}
                        </span>
                     </div>
                     <div className="text-sm text-light_gray">
                        <div>Subject : {data.subject}</div>
                     </div>
                  </div>
               ))}
            </div>
         </section>
      </section>
      //   <div className="grid grid-cols-12 gap-5">
      //      {qus?.map((qus) => (
      //         <Link
      //            to={`/questionView/${qus.id}`}
      //            className="w-full space-y-3 | col-span-4 |
      //     bg-white p-5 rounded-xl | cursor-pointer hover:shadow-md transition-shadow duration-300"
      //         >
      //            <div className="flex space-x-5">
      //               <span className="text-purple bg-purple bg-opacity-10 h-min px-2 py-1 rounded font-medium text-lg">
      //                  Q
      //               </span>
      //               <p>{qus.qus}</p>
      //            </div>
      //            <div className="flex space-x-5">
      //               <span className="text-green bg-green bg-opacity-10 h-min px-2 py-1 rounded font-medium text-lg">
      //                  A
      //               </span>
      //               <p className="truncate">{qus.ans}</p>
      //            </div>
      //            <span className="flex pt-2 space-x-2">
      //               <span className="text-light_gray text-sm">
      //                  Solver by {qus.t_id}
      //               </span>
      //               <img
      //                  className="h-5 w-5"
      //                  src="storage/ui-photos/dashboard/solved.png"
      //                  alt=""
      //               />
      //            </span>
      //         </Link>
      //         //    <li key={qus.id}>{qus.qus}</li>
      //      ))}
      //   </div>
   );
};

export default AppointmentData;
