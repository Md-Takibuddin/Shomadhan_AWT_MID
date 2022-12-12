import axios from "axios";
import { useEffect, useState } from "react";
import { React, useParams } from "react-router-dom";
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
         const resp = await axios.post("http://127.0.0.1:8000/api/QusView", {
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
               <a href="{{url('question')}}">
                  <div className="flex space-x-3 items-center cursor-pointer w-min">
                     <img
                        className="h-5 w-5"
                        src="../storage/ui-photos/dashboard/left-arrow.png"
                        alt=""
                     />
                     <span className="text-lg text-light_gray">Back</span>
                  </div>
               </a>
               <section>
                  <article className="flex flex-col space-y-8">
                     <div className="bg-white rounded-xl px-10 py-5 font-semibold">
                        <div className="flex space-x-5">
                           <span className="text-purple bg-purple bg-opacity-10 h-min p-2 rounded font-medium text-xl">
                              Q
                           </span>
                           <p>{}</p>
                        </div>
                        {/* <!-- Ignore whole figure tag if there is not image --> */}

                        <figure className="flex justify-center items-center mt-5">
                           <img
                              className="h-fit w-fit object-contain max-w-[560px]"
                              src="{{$qus->qus_photo}}"
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
                                 Solved by {}
                              </span>
                              <img
                                 className="h-5 w-5"
                                 src="../storage/ui-photos/dashboard/solved.png"
                                 alt=""
                              />
                           </span>
                           <p className="py-5">{}</p>

                           {/* <!-- Ignore whole figure tag if there is not image --> */}

                           <figure className="flex justify-center items-center mt-5">
                              <img
                                 className="h-fit w-fit object-contain max-w-[560px]"
                                 src="{{$qus->ans_photo}}"
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
