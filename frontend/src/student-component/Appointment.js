import "../Student.css";
import MiniProfile from "./MiniProfile";
import SideBar from "./SideBar";

const Appointment = () => {
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
                           >
                              Apply for Appointment
                           </button>
                        </div>
                     </div>
                     {/* @if(Session::has('applied'))
                    <div className="flex p-4 mb-4 text-lg  bg-[#E5FEE5] rounded-lg w-fit " role="alert">
                        <div className="text-[#27AE60]">
                          <span className="font-medium">Applied for appoinment</span>
                        </div>
                      </div>
                      @endif */}
                     <section>
                        <h3 className="header-1 mb-4">Accepted Appointment</h3>
                        <div className="grid grid-cols-12 gap-5">
                           {/* <!-- Item --> */}
                           {/* @foreach ($acceptedApnt as $data )
                            <div
                                className="w-full space-y-3 | col-span-4 | bg-white p-5 rounded-xl | cursor-pointer hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="flex space-x-4">
                                    <img
                                        className="h-[22px] w-[22px]"
                                        src="storage/ui-photos/dashboard/clndr.png"
                                        alt=""
                                    />
                                    <span
                                        className="text-purple font-medium text-xl"
                                        >{{$data->date}}</span
                                    >
                                </div>
                                <div className="text-sm text-light_gray">
                                    <div>Instructor : {{$data->t_id}}</div>
                                    <div>Subject : {{$data->subject}}</div>
                                </div>
                            </div>
                            @endforeach */}
                        </div>
                     </section>
                     <section>
                        <h3 className="header-1 mb-4">Pending Appointment</h3>
                        <div className="grid grid-cols-12 gap-5">
                           {/* <!-- Item --> */}
                           {/* @foreach ($pendingApnt as $data )
                            <div
                                className="w-full space-y-3 | col-span-4 | bg-white p-5 rounded-xl | cursor-pointer hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="flex space-x-4">
                                    <img
                                        className="h-[22px] w-[22px]"
                                        src="storage/ui-photos/dashboard/clndr.png"
                                        alt=""
                                    />
                                    <span
                                        className="text-purple font-medium text-xl"
                                        >{{$data->date}}</span
                                    >
                                </div>
                                <div className="text-sm text-light_gray">
                                    <div>Subject : {{$data->subject}}</div>
                                </div>
                            </div>
                            @endforeach */}
                        </div>
                     </section>
                  </div>
               </section>
            </div>
            {/* <!-- Modal --> */}
            <div
               id="modal"
               className="fixed min-h-screen w-screen top-0 left-0 z-50 | backdrop-blur-sm bg-white/10 | justify-center items-center | hidden | transition-all duration-300 ease-in-out"
            >
               <div className="w-fit bg-white rounded-xl p-5 transition-shadow shadow">
                  <h6 className="text-center font-bold text-2xl py-7">
                     Apply for Appointment
                  </h6>
                  <form
                     className="grid grid-cols-2 gap-5 text-sm text-light_gray"
                     action="{{url('setAppointment')}}"
                     method="post"
                  >
                     <div className="w-full flex flex-col">
                        <label for="">Date</label>
                        <input
                           className="input_base"
                           type="date"
                           name="date"
                           required
                        />
                     </div>
                     <div className="w-full flex flex-col">
                        <label for="">Duration</label>
                        <input
                           className="input_base"
                           type="text"
                           name="duration"
                           required
                        />
                     </div>
                     <div className="w-full flex flex-col">
                        <label for="">Subject</label>
                        <input
                           className="input_base"
                           type="text"
                           name="subject"
                           required
                        />
                     </div>
                     <div className="w-full flex flex-col">
                        <label for="">Chapter</label>
                        <input
                           className="input_base"
                           type="text"
                           name="chapter"
                           required
                        />
                     </div>
                     <div className="col-span-2">
                        <div className="flex space-x-5 justify-center items-center">
                           <button
                              id="modal_cancle_btn"
                              className="cta_btn_base !text-light_gray border-[1px] border-light_gray !w-min"
                           >
                              Cancle
                           </button>
                           <button
                              type="submit"
                              className="cta_btn_base bg-purple !w-min"
                           >
                              Apply
                           </button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </main>
         <script src="js/appointmentScript.js"></script>
      </body>
   );
};
export default Appointment;
