/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";

const MiniProfile = () => {
   const [userInfo, setInfo] = useState(() => {
      // getting stored value
      const saved = localStorage.getItem("userInfo");
      const initialValue = JSON.parse(saved);
      return initialValue;
   });
   return (
      <div className="flex space-x-3">
         <div className="flex flex-col">
            <span className="text-xl font-semibold">{userInfo.name}</span>
            <span className="text-right text-light_gray font-medium text-sm">
               Student
            </span>
         </div>
         <img
            className="h-[65px] w-[65px] rounded-full"
            src={userInfo.photo}
            alt=""
         />
      </div>
   );
};
export default MiniProfile;
