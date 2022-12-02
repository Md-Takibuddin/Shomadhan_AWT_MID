/* eslint-disable jsx-a11y/img-redundant-alt */
import "../Student.css";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import Notes from "./Notes";
import AskQus from "./AskQus";
import Summery from "./Summery";

const Dashboard = () => {
    return (
        <div>
            <main class="grid grid-cols-12">
                <SideBar />
                <section class="col-span-10 bg-[#F6F6FF] p-10">
                    <TopBar />
                    <div class="grid grid-cols-12">
                        <div class="col-span-8 flex flex-col space-y-10">
                            <Summery />
                            {/* @if(Session::has('posted'))
                        <p class="alert alert-success">{{Session::get('posted')}}</p>
                        @endif */}
                            <AskQus />
                            <Notes />
                        </div>
                        <aside class="col-span-4 | flex flex-col space-y-10 px-10">
                            {/* <!-- Start of Active Teacher --> */}
                            <section>
                                <h4 class="header-1 mb-4">Active Teacher</h4>
                                <div class="w-full | p-5 rounded-xl bg-white | flex flex-col space-y-5">
                                    <div class="flex flex-col">
                                        <div class="text-3xl text-green font-semibold mb-2">
                                            24
                                        </div>
                                        <div class="text-light_gray text-base">
                                            Instructors are active now to solve
                                            your problem
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* <!-- End of Active Teacher --> */}

                            {/* <!-- Start of appointment --> */}

                            <section>
                                <h4 class="header-1 mb-4">Appointment</h4>
                                <div class="w-full | p-5 rounded-xl bg-white | flex flex-col space-y-5">
                                    {/* <!-- Item --> */}
                                    {/* @foreach ($acceptedApnt as $data )
                                <div class="w-full space-y-3">
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
                                    <p class="text-sm text-light_gray">
                                        You have an appointment with {{$data->t_id}}
                                    </p>
                                </div>
                                @endforeach */}
                                </div>
                            </section>
                            {/* <!-- End of appointment -->
                        <!-- Start of Evnets --> */}
                            <section>
                                <h4 class="header-1 mb-4">Evnets</h4>
                                <div class="w-full | p-5 rounded-xl bg-white | flex flex-col space-y-5">
                                    {/* <!-- Item --> */}
                                    <div class="grid grid-cols-12 w-full">
                                        <img
                                            class="col-span-3 h-[75px] w-[75px] rounded-xl"
                                            src="storage/ui-photos/dashboard/events/Mask group-1.png"
                                            alt=""
                                        />
                                        <div class="col-span-9 | flex flex-col justify-center">
                                            <span class="font-medium text-xl">
                                                Bdapps National Hackathon 2022
                                            </span>
                                            <span class="text-sm text-green">
                                                Ongoing
                                            </span>
                                        </div>
                                    </div>
                                    {/* <!-- Item --> */}
                                    <div class="grid grid-cols-12 w-full">
                                        <img
                                            class="col-span-3 h-[75px] w-[75px] rounded-xl"
                                            src="storage/ui-photos/dashboard/events/Mask group-2.png"
                                            alt=""
                                        />
                                        <div class="col-span-9 | flex flex-col justify-center">
                                            <span class="font-medium text-xl">
                                                CTO Forum launches Innovation
                                                Hackathon 2022
                                            </span>
                                            <span class="text-sm text-green">
                                                Ongoing
                                            </span>
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-12 w-full">
                                        <img
                                            class="col-span-3 h-[75px] w-[75px] rounded-xl"
                                            src="storage/ui-photos/dashboard/events/Mask group.png"
                                            alt=""
                                        />
                                        <div class="col-span-9 | flex flex-col justify-center">
                                            <span class="font-medium text-xl">
                                                AIUB Hackathon
                                            </span>
                                            <span class="text-sm text-orange_">
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
