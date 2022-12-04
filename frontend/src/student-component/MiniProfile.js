/* eslint-disable jsx-a11y/img-redundant-alt */
import "../Student.css";

const MiniProfile = () => {
   return (
      <div className="flex space-x-3">
         <div className="flex flex-col">
            <span className="text-xl font-semibold">Md Takib</span>
            <span className="text-right text-light_gray font-medium text-sm">
               Student
            </span>
         </div>
         <img className="h-[65px] w-[65px] rounded-full" src="" alt="" />
      </div>
   );
};
export default MiniProfile;
