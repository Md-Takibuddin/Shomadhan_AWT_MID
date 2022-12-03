import "../Student.css";
import MiniProfile from "./MiniProfile";
import SideBar from "./SideBar";

const Appointment = () => {
    return (
        <div>
            <body>
                <main class="relative">
                    <div class="grid grid-cols-12 | relative">
                        <aside class="col-span-2 | bg-white">
                            {/* {{-- <sidebar-component> --}} */}

                            <SideBar />
                            {/* {{-- </sidebar-component> --}} */}
                        </aside>
                        <section class="col-span-10 bg-[#F6F6FF] p-10">
                            {/* {{-- <haeder-component> --}} */}
                            <nav class="flex">
                                <h1 class="flex-1 | text-purple text-[38px] font-bold">
                                    Appointment
                                </h1>
                                <MiniProfile />
                            </nav>
                            {/* {{-- </haeder-component> --}} */}

                            <div class="flex flex-col space-y-10">
                                <div class="flex mt-5">
                                    <div class="ml-auto">
                                        <button
                                            id="appointment_btn"
                                            class="ml-auto cta_btn_base bg-purple w-fit"
                                        >
                                            Apply for Appointment
                                        </button>
                                    </div>
                                </div>
                                {/* @if(Session::has('applied'))
                    <div class="flex p-4 mb-4 text-lg  bg-[#E5FEE5] rounded-lg w-fit " role="alert">
                        <div class="text-[#27AE60]">
                          <span class="font-medium">Applied for appoinment</span>
                        </div>
                      </div>
                      @endif */}
                                <section>
                                    <h3 class="header-1 mb-4">
                                        Accepted Appointment
                                    </h3>
                                    <div class="grid grid-cols-12 gap-5">
                                        {/* <!-- Item --> */}
                                        {/* @foreach ($acceptedApnt as $data )
                            <div
                                class="w-full space-y-3 | col-span-4 | bg-white p-5 rounded-xl | cursor-pointer hover:shadow-md transition-shadow duration-300"
                            >
                                <div class="flex space-x-4">
                                    <img
                                        class="h-[22px] w-[22px]"
                                        src="storage/ui-photos/dashboard/clndr.png"
                                        alt=""
                                    />
                                    <span
                                        class="text-purple font-medium text-xl"
                                        >{{$data->date}}</span
                                    >
                                </div>
                                <div class="text-sm text-light_gray">
                                    <div>Instructor : {{$data->t_id}}</div>
                                    <div>Subject : {{$data->subject}}</div>
                                </div>
                            </div>
                            @endforeach */}
                                    </div>
                                </section>
                                <section>
                                    <h3 class="header-1 mb-4">
                                        Pending Appointment
                                    </h3>
                                    <div class="grid grid-cols-12 gap-5">
                                        {/* <!-- Item --> */}
                                        {/* @foreach ($pendingApnt as $data )
                            <div
                                class="w-full space-y-3 | col-span-4 | bg-white p-5 rounded-xl | cursor-pointer hover:shadow-md transition-shadow duration-300"
                            >
                                <div class="flex space-x-4">
                                    <img
                                        class="h-[22px] w-[22px]"
                                        src="storage/ui-photos/dashboard/clndr.png"
                                        alt=""
                                    />
                                    <span
                                        class="text-purple font-medium text-xl"
                                        >{{$data->date}}</span
                                    >
                                </div>
                                <div class="text-sm text-light_gray">
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
                        class="fixed min-h-screen w-screen top-0 left-0 z-50 | backdrop-blur-sm bg-white/10 | justify-center items-center | hidden | transition-all duration-300 ease-in-out"
                    >
                        <div class="w-fit bg-white rounded-xl p-5 transition-shadow shadow">
                            <h6 class="text-center font-bold text-2xl py-7">
                                Apply for Appointment
                            </h6>
                            <form
                                class="grid grid-cols-2 gap-5 text-sm text-light_gray"
                                action="{{url('setAppointment')}}"
                                method="post"
                            >
                                <div class="w-full flex flex-col">
                                    <label for="">Date</label>
                                    <input
                                        class="input_base"
                                        type="date"
                                        name="date"
                                        required
                                    />
                                </div>
                                <div class="w-full flex flex-col">
                                    <label for="">Duration</label>
                                    <input
                                        class="input_base"
                                        type="text"
                                        name="duration"
                                        required
                                    />
                                </div>
                                <div class="w-full flex flex-col">
                                    <label for="">Subject</label>
                                    <input
                                        class="input_base"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </div>
                                <div class="w-full flex flex-col">
                                    <label for="">Chapter</label>
                                    <input
                                        class="input_base"
                                        type="text"
                                        name="chapter"
                                        required
                                    />
                                </div>
                                <div class="col-span-2">
                                    <div class="flex space-x-5 justify-center items-center">
                                        <button
                                            id="modal_cancle_btn"
                                            class="cta_btn_base !text-light_gray border-[1px] border-light_gray !w-min"
                                        >
                                            Cancle
                                        </button>
                                        <button
                                            type="submit"
                                            class="cta_btn_base bg-purple !w-min"
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
        </div>
    );
};
export default Appointment;
