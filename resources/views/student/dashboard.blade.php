<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link href="{{ asset('css/output.css') }}" rel="stylesheet">

        <title>Dashboard</title>
    </head>

    <body>
        <main class="grid grid-cols-12">
            <aside class="col-span-2 | bg-white">
                <div class="sticky top-0 left-0 h-screen flex flex-col overflow-x-auto | p-4">
                    <figure class="h-[70px] w-full">
                        <img
                            class="h-full w-full object-contain"
                            src="storage/ui-photos/logo.png"
                            alt="logo"
                        />
                    </figure>

                    <nav class="flex flex-col space-y-4 mt-10">
                        <a class="nav_item" href="">
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
            </aside>
            <section class="col-span-10 bg-[#F6F6FF] p-10">
                {{-- header --}}
                <nav class="flex">
                    <h1 class="flex-1 | text-purple text-[38px] font-bold">
                        Dashboard
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
                            src="{{asset("$photo")}}"
                            alt=""
                        />
                    </div>
                </nav>
                    {{-- header end --}}
                <div class="grid grid-cols-12">
                    <div class="col-span-8 flex flex-col space-y-10">
                        <div class="grid grid-cols-3 | gap-10">
                            <!--  -->
                            <div class="p-5 rounded-xl bg-blue__ bg-opacity-25">
                                <div class="flex">
                                    <span class="flex-1 font-bold text-[32px]"
                                        > {{$totalQus}}</span
                                    >
                                    <figure
                                        class="h-[40px] w-[40px] bg-blue__ rounded-full p-2"
                                    >
                                        <img
                                            src="storage/ui-photos/dashboard/Double Check.png"
                                            alt=""
                                        />
                                    </figure>
                                </div>
                                <span class="text-light_gray text-2xl"
                                    >Posted question</span
                                >
                            </div>
                            <div class="p-5 rounded-xl bg-green bg-opacity-25">
                                <div class="flex">
                                    <span class="flex-1 font-bold text-[32px]"
                                        >{{$answeredQus}}</span
                                    >
                                    <figure
                                        class="h-[40px] w-[40px] bg-green rounded-full p-2"
                                    >
                                        <img
                                            src="storage/ui-photos/dashboard/design.png"
                                            alt=""
                                        />
                                    </figure>
                                </div>
                                <span class="text-light_gray text-2xl"
                                    >Answered question</span
                                >
                            </div>
                            <div
                                class="p-5 rounded-xl bg-[#FCAB5E] bg-opacity-25"
                            >
                                <div class="flex">
                                    <span class="flex-1 font-bold text-[32px]"
                                        >{{$pendingQus}}</span
                                    >
                                    <figure
                                        class="h-[40px] w-[40px] bg-[#FCAB5E] rounded-full p-2"
                                    >
                                        <img
                                            src="storage/ui-photos/dashboard/Help.png"
                                            alt=""
                                        />
                                    </figure>
                                </div>
                                <span class="text-light_gray text-2xl"
                                    >Pending question</span
                                >
                            </div>
                            <!--  -->
                        </div>

                        @if(Session::has('posted'))
                        <p class="alert alert-success">{{Session::get('posted')}}</p>
                        @endif

                        <!-- Ask Ques Start -->
                        <section class="w-full">
                            <h3 class="header-1 mb-4">Ask Question</h3>

                            <div class="bg-white p-5 rounded-xl">
                                <form action="{{url('postQuestion')}}" method="get" enctype="multipart/form-data">
                                    @csrf
                                    <textarea
                                        placeholder="Type your qustion here"
                                        class="w-full h-[250px] border-none"
                                        name="question"
                                    ></textarea>

                                    <div class="w-fit ml-auto flex space-x-2">
                                        <div>
                                            <div
                                                for="dropdown"
                                                class="text-light_gray rounded-2xl flex space-x-2 py-3 cursor-pointer items-center"
                                            >
                                                <img
                                                    class="w-[20px] h-[20px]"
                                                    src="storage/ui-photos/dropdown.png"
                                                    alt=""
                                                />
                                                <select
                                                    class="form-select form-select-sm appearance-none block px-2 py-1 text-sm font-normal text-light_gray
                                                    bg-white bg-clip-padding bg-no-repeat rounded transition ease-in-out m-0
                                                    focus:bg-white border-none focus:outline-none w-[100px]"
                                                    name="subject"

                                                >
                                                    <option value="">
                                                        Subject
                                                    </option>
                                                    <option value="Math">
                                                        Math
                                                    </option>
                                                    <option value="Physics">
                                                        Physics
                                                    </option>
                                                    <option value="Chamistry">
                                                        Chamistry
                                                    </option>
                                                    <option value="ICT">
                                                        ICT
                                                    </option>
                                                    <option value="English">
                                                        Englash
                                                    </option>
                                                    <option value="Bangla">
                                                        Bangla
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <label
                                                for="file-upload"
                                                class="text-light_gray rounded-2xl flex space-x-2 px-6 py-3 cursor-pointer items-center"
                                            >
                                                <img
                                                    class="w-[20px] h-[20px]"
                                                    src="storage/ui-photos/image.png"
                                                    alt=""
                                                />
                                                <span> Add Image</span>
                                            </label>
                                            <input
                                                type="file"
                                                class="hidden"
                                                name="qusPhoto"
                                                id="file-upload"
                                            />
                                        </div>

                                        <button
                                            class="bg-purple text-white rounded-2xl flex space-x-2 px-6 py-3 items-center"
                                            type="submit"
                                        >
                                            <img
                                                class="w-[20px] h-[20px]"
                                                src="storage/ui-photos/submit.png"
                                                alt=""
                                            />
                                            <span>Submit</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </section>
                        <!-- Ask Ques End -->

                        <!-- Note  Start -->
                        <section class="w-full">
                            <h3 class="header-1 mb-4">Notes</h3>

                            <!-- Container -->
                            <div
                                class="w-full | p-5 rounded-xl bg-white | flex flex-col space-y-5"
                            >
                                <!-- Item -->
                                <div class="grid grid-cols-12 w-full">
                                    <img
                                        class="col-span-1 h-[60px] w-[60px] rounded-xl"
                                        src="storage/ui-photos/dashboard/notes/Group 54.png"
                                        alt=""
                                    />
                                    <div
                                        class="col-span-11 | flex flex-col justify-center"
                                    >
                                        <span class="font-medium text-xl"
                                            >Math 2 - Chapter 5</span
                                        >
                                        <span class="text-light_gray text-sm"
                                            >Uploaded 10 Sep, 2022</span
                                        >
                                    </div>
                                </div>

                                <!-- Item -->
                                <div class="grid grid-cols-12 w-full">
                                    <img
                                        class="col-span-1 h-[60px] w-[60px] rounded-xl"
                                        src="storage/ui-photos/dashboard/notes/Group 55.png"
                                        alt=""
                                    />
                                    <div
                                        class="col-span-11 | flex flex-col justify-center"
                                    >
                                        <span class="font-medium text-xl"
                                            >Physics 1 - Chapter 2</span
                                        >
                                        <span class="text-light_gray text-sm"
                                            >Uploaded 10 Sep, 2022</span
                                        >
                                    </div>
                                </div>
                                <!-- Item -->
                                <div class="grid grid-cols-12 w-full">
                                    <img
                                        class="col-span-1 h-[60px] w-[60px] rounded-xl"
                                        src="storage/ui-photos/dashboard/notes/Group 56.png"
                                        alt=""
                                    />
                                    <div
                                        class="col-span-11 | flex flex-col justify-center"
                                    >
                                        <span class="font-medium text-xl"
                                            >Chemistry 2 - Chapter 6</span
                                        >
                                        <span class="text-light_gray text-sm"
                                            >Uploaded 10 Sep, 2022</span
                                        >
                                    </div>
                                </div>
                                <!-- Item -->
                                <div class="grid grid-cols-12 w-full">
                                    <img
                                        class="col-span-1 h-[60px] w-[60px] rounded-xl"
                                        src="storage/ui-photos/dashboard/notes/Group 54.png"
                                        alt=""
                                    />
                                    <div
                                        class="col-span-11 | flex flex-col justify-center"
                                    >
                                        <span class="font-medium text-xl"
                                            >Math 2 - Chapter 5</span
                                        >
                                        <span class="text-light_gray text-sm"
                                            >Uploaded 10 Sep, 2022</span
                                        >
                                    </div>
                                </div>
                            </div>
                        </section>
                        <!-- Note  End -->
                    </div>
                    <aside class="col-span-4 | flex flex-col space-y-10 px-10">
                        <!-- Start of Active Expertes -->
                        <section>
                            <h4 class="header-1 mb-4">Active Expertes</h4>
                            <div
                                class="w-full | p-5 rounded-xl bg-white | flex flex-col space-y-5"
                            >
                                <div class="flex flex-col">
                                    <div
                                        class="text-3xl text-green font-semibold mb-2"
                                    >
                                        24
                                    </div>
                                    <div class="text-light_gray text-base">
                                        Instructors are active now to solve your
                                        problem
                                    </div>
                                </div>
                            </div>
                        </section>
                        <!-- End of Active Expertes -->

                        <!-- Start of appointment -->

                        <section>
                            <h4 class="header-1 mb-4">Appointment</h4>
                            <div
                                class="w-full | p-5 rounded-xl bg-white | flex flex-col space-y-5"
                            >
                                <!-- Item -->
                                <div class="w-full space-y-3">
                                    <div class="flex space-x-4">
                                        <img
                                            class="h-[22px] w-[22px]"
                                            src="storage/ui-photos/dashboard/clndr.png"
                                            alt=""
                                        />
                                        <span
                                            class="text-purple font-medium text-xl"
                                            >20 Sep, 2022 - 8:00 PM</span
                                        >
                                    </div>
                                    <p class="text-sm text-light_gray">
                                        You have an appointment with Mr Rafio
                                    </p>
                                </div>
                            </div>
                        </section>
                        <!-- End of appointment -->
                        <!-- Start of Evnets -->
                        <section>
                            <h4 class="header-1 mb-4">Evnets</h4>
                            <div
                                class="w-full | p-5 rounded-xl bg-white | flex flex-col space-y-5"
                            >
                                <!-- Item -->
                                <div class="grid grid-cols-12 w-full">
                                    <img
                                        class="col-span-3 h-[75px] w-[75px] rounded-xl"
                                        src="storage/ui-photos/dashboard/events/Mask group-1.png"
                                        alt=""
                                    />
                                    <div
                                        class="col-span-9 | flex flex-col justify-center"
                                    >
                                        <span class="font-medium text-xl"
                                            >Bdapps National Hackathon 2022
                                        </span>
                                        <span class="text-sm text-green"
                                            >Ongoing</span
                                        >
                                    </div>
                                </div>
                                <!-- Item -->
                                <div class="grid grid-cols-12 w-full">
                                    <img
                                        class="col-span-3 h-[75px] w-[75px] rounded-xl"
                                        src="storage/ui-photos/dashboard/events/Mask group-2.png"
                                        alt=""
                                    />
                                    <div
                                        class="col-span-9 | flex flex-col justify-center"
                                    >
                                        <span class="font-medium text-xl"
                                            >CTO Forum launches Innovation
                                            Hackathon 2022
                                        </span>
                                        <span class="text-sm text-green"
                                            >Ongoing</span
                                        >
                                    </div>
                                </div>
                                <div class="grid grid-cols-12 w-full">
                                    <img
                                        class="col-span-3 h-[75px] w-[75px] rounded-xl"
                                        src="storage/ui-photos/dashboard/events/Mask group.png"
                                        alt=""
                                    />
                                    <div
                                        class="col-span-9 | flex flex-col justify-center"
                                    >
                                        <span class="font-medium text-xl"
                                            >AIUB Hackathon
                                        </span>
                                        <span class="text-sm text-orange_"
                                            >Coming soon</span
                                        >
                                    </div>
                                </div>
                            </div>
                        </section>
                        <!-- End of Evnets -->
                    </aside>
                </div>
            </section>
        </main>
    </body>
</html>








  {{-- <body>
    <div class="container">
        <a href="{{url('logout')}}" class="btn btn-primary my-3 float-right" >Log Out</a>
        <h4>Welcome to Dashboard</h4>
<br><br>


@if(Session::has('name'))
<p >{{Session::get('name')}}</p>
<p >{{Session::get('id')}}</p>
@endif

<p>posted qus: {{$totalQus}} </p>

<p>ansed qus: {{$answeredQus}} </p>

<p>pending qus: {{$pendingQus}}</p
    ><br>


<img src="{{asset("$photo")}}" >

<a href="{{url('question')}}" class="btn btn-primary my-3">ask question  </a>
<a href="{{url('settings')}}" class="btn btn-primary my-3">settings</a>
<a href="{{url('appointment')}}" class="btn btn-primary my-3">Appointment</a>

    </div>
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  </body>
</html> --}}


