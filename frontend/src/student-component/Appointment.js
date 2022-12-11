import { Alert, Input } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import "../Student.css";
import AppointmentData from "./AppointmentData";

import MiniProfile from "./MiniProfile";
import SideBar from "./SideBar";

const Appointment = () => {
   const [showModal, setShowModal] = useState(false);
   const [postedAlert, setPostedAlert] = useState(false);
   const applyBtn = () => {
      setShowModal(true);
   };
   const cencleBtn = () => {
      setShowModal(false);
   };

   let [date, setDate] = useState("");
   let [duration, setDuration] = useState("");
   let [subject, setSubject] = useState("");

   const [userInfo, setInfo] = useState(() => {
      // getting stored value
      const saved = localStorage.getItem("userInfo");
      const initialValue = JSON.parse(saved);
      return initialValue;
   });

   const postAppointment = (e) => {
      e.preventDefault();
      var postAppointment = {
         s_id: userInfo.id,
         date: date,
         duration: duration,
         subject: subject,
      };
      console.log(postAppointment);
      axios
         .post("http://127.0.0.1:8000/api/postAppointment", postAppointment)
         .then((resp) => {
            console.log(resp.data);
            if (resp.data === "Posted") {
               // window.location.reload();
               setPostedAlert(true);
               setShowModal(false);
            }
            // const qus = resp.data;
            // alert(qus);
            //
            // setShowModal(false);
            // Navigate("/student-question");
         })
         .catch((err) => {
            console.log(err);
         });
   };

   return (
      <body>
         <main className="relative">
            <div className="grid grid-cols-12 | relative">
               <aside className="col-span-2 | bg-white">
                  {/* {{-- <sidebar-component> --}} */}
                  <SideBar />
                  {/* {{-- </sidebar-component> --}} */}
               </aside>
               <section className="col-span-10 bg-[#F6F6FF] p-10">
                  {/* {{-- <haeder-component> --}} */}
                  <nav className="flex">
                     <h1 className="flex-1 | text-purple text-[38px] font-bold">
                        Appointment
                     </h1>
                     <MiniProfile />
                  </nav>
                  {/* {{-- </haeder-component> --}} */}

                  <div className="flex flex-col space-y-10">
                     <div className="flex mt-5">
                        <div className="ml-auto">
                           <button
                              id="appointment_btn"
                              className="ml-auto cta_btn_base bg-purple w-fit"
                              onClick={applyBtn}
                           >
                              Apply for Appointment
                           </button>
                        </div>
                     </div>
                     {postedAlert && (
                        <Alert color="light-green">
                           A success alert for showing message.
                        </Alert>
                     )}
                     <AppointmentData />

                     {/* <!-- Item --> */}
                  </div>
               </section>
            </div>
            {/* <!-- Modal --> */}
            {showModal && (
               <div
                  className={`fixed min-h-screen w-screen top-0 left-0 z-50 | backdrop-blur-sm bg-black/20  |
         justify-center items-center | transition-all duration-300 ease-in-out flex`}
               >
                  <div className="w-fit bg-white rounded-xl p-5 transition-shadow shadow">
                     <h6 className="text-center font-bold text-2xl py-7">
                        Apply for Appointment
                     </h6>
                     <div className="grid grid-cols-2 gap-5 text-sm text-light_gray">
                        <div className="w-full flex flex-col">
                           <label>Date</label>
                           <input
                              className="input_base"
                              type="date"
                              name="date"
                              required
                              onChange={(e) => setDate(e.target.value)}
                           />
                        </div>
                        <div className="w-full flex flex-col">
                           <label>Duration</label>
                           <input
                              className="input_base"
                              type="text"
                              name="duration"
                              required
                              onChange={(e) => setDuration(e.target.value)}
                           />
                        </div>
                        <div className="w-full flex flex-col">
                           <label>Subject</label>
                           <input
                              className="input_base"
                              type="text"
                              name="subject"
                              required
                              onChange={(e) => setSubject(e.target.value)}
                           />
                        </div>
                        <div className="w-full flex flex-col">
                           <label>Chapter</label>
                           <input
                              className="input_base"
                              type="text"
                              name="chapter"
                           />
                        </div>
                        <div className="col-span-2">
                           <div className="flex space-x-5 justify-center items-center">
                              <button
                                 id="modal_cancle_btn"
                                 className="cta_btn_base !text-light_gray border-[1px] border-light_gray !w-min"
                                 onClick={cencleBtn}
                              >
                                 Cancle
                              </button>
                              <button
                                 type="submit"
                                 className="cta_btn_base bg-purple !w-min"
                                 onClick={postAppointment}
                              >
                                 Apply
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            )}
         </main>
         <script src="js/appointmentScript.js"></script>
      </body>
   );
};
export default Appointment;
