/* eslint-disable jsx-a11y/img-redundant-alt */
import "../Student.css";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import Notes from "./Notes";
import AskQus from "./AskQus";
import Summery from "./Summery";
import { useState } from "react";

const Dashboard = () => {
   const [name, setName] = useState(() => {
      // getting stored value
      const saved = localStorage.getItem("name");
      const initialValue = JSON.parse(saved);
      return initialValue;
   });
   return (
      <div>
         <main className="grid grid-cols-12">
            <SideBar />
            <section className="col-span-10 bg-[#F6F6FF] p-10">
               <TopBar />
               <div className="grid grid-cols-12">
                  <div className="col-span-8 flex flex-col space-y-10">
                     <Summery />
                     <AskQus />
                     <Notes />
                  </div>
                  <aside className="col-span-4 | flex flex-col space-y-10 px-10">
                     {/* <!-- Start of Active Teacher --> */}
                     <section>
                        <h4 className="header-1 mb-4">Active Teacher</h4>
                        <div className="w-full | p-5 rounded-xl bg-white | flex flex-col space-y-5">
                           <div className="flex flex-col">
                              <div className="text-3xl text-green font-semibold mb-2">
                                 24
                              </div>
                              <div className="text-light_gray text-base">
                                 Instructors are active now to solve your
                                 problem
                              </div>
                           </div>
                        </div>
                     </section>
                     {/* <!-- End of Active Teacher --> */}

                     {/* <!-- Start of appointment --> */}

                     <section>
                        <h4 className="header-1 mb-4">Appointment</h4>
                        <div className="w-full | p-5 rounded-xl bg-white | flex flex-col space-y-5">
                           {/* <!-- Item --> */}

                           <div className="w-full space-y-3">
                              <div className="flex space-x-4">
                                 <img
                                    className="h-[22px] w-[22px]"
                                    src="storage/ui-photos/dashboard/clndr.png"
                                    alt=""
                                 />
                                 <span className="text-purple font-medium text-xl">
                                    20 Dec, 2022
                                 </span>
                              </div>
                              <p className="text-sm text-light_gray">
                                 You have an appointment with MR Shipon
                              </p>
                           </div>
                        </div>
                     </section>
                     {/* <!-- End of appointment -->
                        <!-- Start of Evnets --> */}
                     <section>
                        <h4 className="header-1 mb-4">Events</h4>
                        <div className="w-full | p-5 rounded-xl bg-white | flex flex-col space-y-5">
                           {/* <!-- Item --> */}
                           <div className="grid grid-cols-12 w-full">
                              <img
                                 className="col-span-3 h-[75px] w-[75px] rounded-xl"
                                 src="storage/ui-photos/dashboard/events/Mask group-1.png"
                                 alt=""
                              />
                              <div className="col-span-9 | flex flex-col justify-center">
                                 <span className="font-medium text-xl">
                                    Bdapps National Hackathon 2022
                                 </span>
                                 <span className="text-sm text-green">
                                    Ongoing
                                 </span>
                              </div>
                           </div>
                           {/* <!-- Item --> */}
                           <div className="grid grid-cols-12 w-full">
                              <img
                                 className="col-span-3 h-[75px] w-[75px] rounded-xl"
                                 src="storage/ui-photos/dashboard/events/Mask group-2.png"
                                 alt=""
                              />
                              <div className="col-span-9 | flex flex-col justify-center">
                                 <span className="font-medium text-xl">
                                    CTO Forum launches Innovation Hackathon 2022
                                 </span>
                                 <span className="text-sm text-green">
                                    Ongoing
                                 </span>
                              </div>
                           </div>
                           <div className="grid grid-cols-12 w-full">
                              <img
                                 className="col-span-3 h-[75px] w-[75px] rounded-xl"
                                 src="storage/ui-photos/dashboard/events/Mask group.png"
                                 alt=""
                              />
                              <div className="col-span-9 | flex flex-col justify-center">
                                 <span className="font-medium text-xl">
                                    AIUB Hackathon
                                 </span>
                                 <span className="text-sm text-orange_">
                                    Coming soon
                                 </span>
                              </div>
                           </div>
                        </div>
                     </section>
                     {/* <!-- End of Evnets --> */}
                  </aside>
               </div>

               {/* ------------- */}
            </section>
         </main>
      </div>
   );
};

export default Dashboard;
