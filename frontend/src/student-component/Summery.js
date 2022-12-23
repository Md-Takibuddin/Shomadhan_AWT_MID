import axios from "axios";
import { useEffect, useState } from "react";
import "../Student.css";

const Summery = () => {
   const [Aqus, setAQus] = useState();
   const [Pqus, setPQus] = useState();
   const [userInfo, setInfo] = useState(() => {
      // getting stored value
      const saved = localStorage.getItem("userInfo");
      const initialValue = JSON.parse(saved);
      return initialValue;
   });
   const Api1 = async () => {
      try {
         const resp = await axios.post("http://127.0.0.1:8000/api/countAqus", {
            s_id: userInfo.id,
         });
         setAQus(resp.data.length);
      } catch (error) {
         console.log(error);
      }
   };
   const Api2 = async () => {
      try {
         const resp = await axios.post("http://127.0.0.1:8000/api/countPqus", {
            s_id: userInfo.id,
         });

         setPQus(resp.data.length);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      Api1();
      Api2();
   }, []);

   return (
      <div className="grid grid-cols-3 | gap-10">
         {/* <!--  --> */}
         <div className="p-5 rounded-xl bg-blue__ bg-opacity-25">
            <div className="flex">
               <span className="flex-1 font-bold text-[32px]">{Pqus}</span>
               <figure className="h-[40px] w-[40px] bg-blue__ rounded-full p-2">
                  <img
                     src="storage/ui-photos/dashboard/Double Check.png"
                     alt=""
                  />
               </figure>
            </div>
            <span className="text-light_gray text-2xl">Posted question</span>
         </div>
         <div className="p-5 rounded-xl bg-green bg-opacity-25">
            <div className="flex">
               <span className="flex-1 font-bold text-[32px]">{Aqus}</span>
               <figure className="h-[40px] w-[40px] bg-green rounded-full p-2">
                  <img src="storage/ui-photos/dashboard/design.png" alt="" />
               </figure>
            </div>
            <span className="text-light_gray text-2xl">Answered question</span>
         </div>
         <div className="p-5 rounded-xl bg-[#FCAB5E] bg-opacity-25">
            <div className="flex">
               <span className="flex-1 font-bold text-[32px]">
                  {Aqus + Pqus}
               </span>
               <figure className="h-[40px] w-[40px] bg-[#FCAB5E] rounded-full p-2">
                  <img src="storage/ui-photos/dashboard/Help.png" alt="" />
               </figure>
            </div>
            <span className="text-light_gray text-2xl">Pending question</span>
         </div>
         {/* <!--  --> */}
      </div>
   );
};

export default Summery;
