
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="{{asset('css/app.css')}}" rel="stylesheet">
        <title>Appointment</title>
    </head>
    <body>
        <main class="relative">
            <div class="grid grid-cols-12 | relative">
                <aside class="col-span-2 | bg-white">
                   {{-- <sidebar-component> --}}

                    <div class="sticky top-0 left-0 h-screen flex flex-col overflow-x-auto | p-4">
                        <figure class="h-[70px] w-full">
                            <img
                                class="h-full w-full object-contain"
                                src="storage/ui-photos/logo.png"
                                alt="logo"
                            />
                        </figure>
                        <nav class="flex flex-col space-y-4 mt-10">
                            <a class="nav_item" href="{{url('dashboard')}}">
                                <img
                                    src="storage/ui-photos/nav-icons/home.png"
                                    alt="nav-icon"
                                />
                                <span>Dashboard</span>
                            </a>
                            <a class="nav_item" href="{{url('question')}}">
                                <img
                                    src="storage/ui-photos/nav-icons/qus.png"
                                    alt="nav-icon"
                                />
                                <span>Questions</span>
                            </a>
                            <a class="nav_item" href="{{url('appointment')}}">
                                <img
                                    src="storage/ui-photos/nav-icons/appointment.png"
                                    alt="nav-icon"
                                />
                                <span>Appointment</span>
                            </a>
                            <a class="nav_item" href="{{url('settings')}}">
                                <img
                                    src="storage/ui-photos/nav-icons/settings.png"
                                    alt="nav-icon"
                                />
                                <span>Settings</span>
                            </a>
                            <a class="nav_item" href="{{url('logout')}}">
                                <img
                                    src="storage/ui-photos/nav-icons/log-out.png"
                                    alt="nav-icon"
                                />
                                <span>Log out</span>
                            </a>
                        </nav>
                        <section
                            class="relative | flex flex-col space-y-7 | mt-auto px-5 pb-5"
                        >
                            <div class="relative | z-10 flex flex-col space-y-4">
                                <figure>
                                    <img
                                        src="storage/ui-photos/subscription.png"
                                        alt=""
                                    />
                                </figure>
                                <h6 class="text-center font-bold text-xl">
                                    Premium Subscription
                                </h6>
                                <p class="text-center text-sm">
                                    Be a Premium user and get access to new features
                                </p>
                                <button
                                    class="bg-purple py-3 px-5 rounded-xl text-white font-semibold hover:shadow-xl transition-all ease-in-out duration-300"
                                >
                                    Upgrade Now
                                </button>
                            </div>
                            <div
                                class="absolute h-[60%] w-full left-0 bottom-0 z-0 | bg-purple bg-opacity-60 rounded-xl"
                            ></div>
                        </section>
                    </div>
                    {{-- </sidebar-component> --}}
                </aside>
                <section class="col-span-10 bg-[#F6F6FF] p-10">
                    {{-- <haeder-component> --}}
                        <nav class="flex">
                            <h1 class="flex-1 | text-purple text-[38px] font-bold">
                                Question
                            </h1>
                            <div class="flex space-x-3">
                                <div class="flex flex-col">
                                    <span class="text-xl font-semibold"
                                        >{{Session::get('name')}}</span
                                    >
                                    <span
                                        class="text-right text-light_gray font-medium text-sm"
                                        >Student</span
                                    >
                                </div>
                                <img
                                    class="h-[65px] w-[65px] rounded-full"
                                    src="{{asset(Session::get('photo'))}}"
                                    alt=""
                                />
                            </div>
                        </nav>
                    {{-- </haeder-component> --}}

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
                        @if(Session::has('applied'))
                        <div class="flex p-4 mb-4 text-lg  bg-[#E5FEE5] rounded-lg w-fit " role="alert">
                            <div class="text-[#27AE60]">
                              <span class="font-medium">Applied for appoinment</span>
                            </div>
                          </div>
                          @endif
                        <section>
                            <h3 class="header-1 mb-4">Accepted Appointment</h3>
                            <div class="grid grid-cols-12 gap-5">
                                <!-- Item -->
                                @foreach ($acceptedApnt as $data )
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
                                @endforeach
                            </div>
                        </section>
                        <section>
                            <h3 class="header-1 mb-4">Pending Appointment</h3>
                            <div class="grid grid-cols-12 gap-5">
                                <!-- Item -->
                                @foreach ($pendingApnt as $data )
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
                                @endforeach

                            </div>
                        </section>
                    </div>
                </section>
            </div>
            <!-- Modal -->
            <div
                id="modal"
                class="fixed min-h-screen w-screen top-0 left-0 z-50 | backdrop-blur-sm bg-white/10 | justify-center items-center | hidden | transition-all duration-300 ease-in-out"
            >
                <div
                    class="w-fit bg-white rounded-xl p-5 transition-shadow shadow"
                >
                    <h6 class="text-center font-bold text-2xl py-7">
                        Apply for Appointment
                    </h6>
                    <form
                        class="grid grid-cols-2 gap-5 text-sm text-light_gray"
                        action="{{url('setAppointment')}}" method="post"
                    >
                    @csrf

                        <div class="w-full flex flex-col">
                            <label for="">Date</label>
                            <input class="input_base" type="date" name="date" required/>
                        </div>
                        <div class="w-full flex flex-col">
                            <label for="">Duration</label>
                            <input class="input_base" type="text" name="duration" required/>
                        </div>
                        <div class="w-full flex flex-col">
                            <label for="">Subject</label>
                            <input class="input_base" type="text" name="subject" required/>
                        </div>
                        <div class="w-full flex flex-col">
                            <label for="">Chapter</label>
                            <input class="input_base" type="text" name="chapter" required/>
                        </div>
                        <div class="col-span-2">
                            <div
                                class="flex space-x-5 justify-center items-center"
                            >
                                <button
                                    id="modal_cancle_btn"
                                    class="cta_btn_base !text-light_gray border-[1px] border-light_gray !w-min"
                                >
                                    Cancle
                                </button>
                                <button type="submit" class="cta_btn_base bg-purple !w-min">
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
</html>
