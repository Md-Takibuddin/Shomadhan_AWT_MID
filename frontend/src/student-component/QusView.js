import axios from "axios";
import { useEffect, useState } from "react";
import { Link, React, useParams } from "react-router-dom";
import MiniProfile from "./MiniProfile";
import SideBar from "./SideBar";

const QusView = () => {
   const [qus, setQus] = useState();
   const { id } = useParams();
   //const [qusData, setQusData] = useState();
   useEffect(() => {
      callApi();
   }, []);
   const callApi = async () => {
      try {
         const resp = await axios.get("http://127.0.0.1:8000/api/QusView", {
            id: id,
         });
         const Data = resp.data;
         console.log(Data);
         setQus(Data);
         console.log(qus);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div>
         <section className="col-span-10 bg-[#F6F6FF] p-10">
            {/* {{-- <haeder-component>--}} */}
            <nav className="flex">
               <h1 className="flex-1 | text-purple text-[38px] font-bold">
                  Question
               </h1>

               <MiniProfile />
            </nav>

            <div className="flex flex-col space-y-10">
               <div className="flex space-x-3 items-center cursor-pointer w-min">
                  <Link to={"/student-question"} className="nav_item">
                     <img
                        className="h-5 w-5"
                        src="../storage/ui-photos/dashboard/left-arrow.png"
                        alt=""
                     />
                     <span className="text-lg text-light_gray">Back</span>
                  </Link>
               </div>

               <section>
                  <article className="flex flex-col space-y-8">
                     <div className="bg-white rounded-xl px-10 py-5 font-semibold">
                        <div className="flex space-x-5">
                           <span className="text-purple bg-purple bg-opacity-10 h-min p-2 rounded font-medium text-xl">
                              Q
                           </span>
                           <p>What do you mean by 0?</p>
                        </div>
                        {/* <!-- Ignore whole figure tag if there is not image --> */}

                        <figure className="flex justify-center items-center mt-5">
                           <img
                              className="h-fit w-fit object-contain max-w-[560px]"
                              src="../storage/question/qus1.png"
                              alt=""
                           />
                        </figure>
                     </div>
                     <div className="flex space-x-5 bg-white rounded-xl px-10 py-5">
                        <span className="text-green bg-green bg-opacity-10 h-min p-2 rounded font-medium text-xl">
                           A
                        </span>
                        <div>
                           <span className="flex space-x-2">
                              <span className="text-light_gray text-sm">
                                 Solved by RIFAT ABDULLAH
                              </span>
                              <img
                                 className="h-5 w-5"
                                 src="../storage/ui-photos/dashboard/solved.png"
                                 alt=""
                              />
                           </span>
                           <p className="py-5">
                              The subtlety is that derivative is a concept that
                              applies to functions. So if by 0 you mean the real
                              number, no. If by 0 you mean the identity element
                              of some finite Abelian group, again no.
                           </p>

                           {/* <!-- Ignore whole figure tag if there is not image --> */}

                           <figure className="flex justify-center items-center mt-5">
                              <img
                                 className="h-fit w-fit object-contain max-w-[560px]"
                                 src="../storage/question/ans1.jpg"
                                 alt=""
                              />
                           </figure>
                        </div>
                     </div>
                  </article>
               </section>
            </div>
         </section>
      </div>
   );
};
export default QusView;
