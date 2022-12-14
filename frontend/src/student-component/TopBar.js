/* eslint-disable jsx-a11y/img-redundant-alt */

import MiniProfile from "./MiniProfile";

const TopBar = () => {
   return (
      <div>
         <nav className="flex">
            <h1 className="flex-1 | text-purple text-[38px] font-bold">
               Dashboard
            </h1>
            <MiniProfile />
         </nav>
      </div>
   );
};

export default TopBar;
