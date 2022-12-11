import React, { useEffect } from "react";
import axios from "axios";
import { useLocalStorage } from "../hook";
import { useState, userEffect } from "react";

const PendingQus = () => {
   const [qus, setQus] = useState();
   const [userInfo, setInfo] = useState(() => {
      // getting stored value
      const saved = localStorage.getItem("userInfo");
      const initialValue = JSON.parse(saved);
      return initialValue;
   });

   const callApi = async () => {
      try {
         const resp = await axios.post("http://127.0.0.1:8000/api/pendingQus", {
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
            <div className="w-full space-y-3 | col-span-4 | bg-white p-5 rounded-xl | cursor-pointer hover:shadow-md transition-shadow duration-300">
               <div className="flex space-x-5">
                  <span className="text-purple bg-purple bg-opacity-10 h-min px-2 py-1 rounded font-medium text-lg">
                     Q
                  </span>
                  <p>{qus.qus}</p>
               </div>
            </div>

            //    <li key={qus.id}>{qus.qus}</li>
         ))}
      </div>
   );
};

export default PendingQus;
