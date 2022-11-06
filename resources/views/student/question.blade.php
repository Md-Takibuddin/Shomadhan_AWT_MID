<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link href="{{ asset('css/app.css') }}" rel="stylesheet">

        <title>Question</title>
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
                    {{-- <haeder-component>--}}
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

                    {{--</haeder-component> --}}
                    <div class="flex flex-col space-y-10">
                        <div class="flex mt-5">
                            <div class="ml-auto">
                                <button
                                    id="ask_qus_btn"
                                    class="ml-auto cta_btn_base bg-purple w-fit"
                                >
                                    Ask a question
                                </button>
                            </div>
                        </div>

                        <!-- Ask Qus Start -->
                        <section>
                            <h3 class="header-1 mb-4">Answered questions</h3>
                            <div class="grid grid-cols-12 gap-5">
                                <!-- Item -->
                                @foreach ($qus as $data)
                                <div
                                    class="w-full space-y-3 | col-span-4 | bg-white p-5 rounded-xl | cursor-pointer hover:shadow-md transition-shadow duration-300"
                                >
                                    <div class="flex space-x-5">
                                        <span
                                        class="text-white bg-purple h-min px-2 py-1 rounded font-medium text-lg"
                                            >Q</span
                                        >
                                        <p>
                                            {{ $data ->qus}}
                                        </p>
                                    </div>
                                    <div class="flex space-x-5">
                                        <span
                                            class="text-white bg-green bg-opacity-10 h-min px-2 py-1 rounded font-medium text-lg"
                                            >A</span
                                        >
                                        <p class="truncate">
                                            {{ $data ->ans}}
                                        </p>
                                    </div>
                                    <span class="flex pt-2 space-x-2">
                                        <span class="text-light_gray text-sm">
                                            Solver by Shipon Hossain
                                        </span>
                                        <img
                                            class="h-5 w-5"
                                            src="storage/ui-photos/dashboard/solved.png"
                                            alt=""
                                        />
                                    </span>
                                </div>
                                @endforeach
                            </div>
                            <!-- Pagination -->
                            <div
                                class="flex justify-end space-x-5 mt-5 items-center"
                            >
                                <img
                                    class="h-4 w-4 cursor-pointer"
                                    src="storage/ui-photos/nav-icons/dashboard/left-arrow.png"
                                    alt=""
                                />
                                <div class="flex space-x-4">
                                    <span
                                        class="px-2 py-1 border border-light_gray rounded-full text-sm cursor-pointer text-light_gray font-semibold hover:bg-purple hover:text-white hover:shadow transition-all duration-300"
                                        >1</span
                                    >
                                    <span
                                        class="px-2 py-1 border border-light_gray rounded-full text-sm cursor-pointer text-light_gray font-semibold hover:bg-purple hover:text-white hover:shadow transition-all duration-300"
                                        >2</span
                                    >
                                    <span
                                        class="px-2 py-1 border border-light_gray rounded-full text-sm cursor-pointer text-light_gray font-semibold hover:bg-purple hover:text-white hover:shadow transition-all duration-300"
                                        >3</span
                                    >
                                </div>
                                <img
                                    class="h-4 w-4 cursor-pointer"
                                    src="storage/ui-photos/nav-icons/dashboard/right-arrow.png"
                                    alt=""
                                />
                            </div>
                            <!-- Pagination End -->
                        </section>
                        <!-- Ask Qus End -->

                        <!-- Pending Qus Start -->
                        <section>
                            <h3 class="header-1 mb-4">Pending questions</h3>
                            <div class="grid grid-cols-12 gap-5">
                                <!-- Item -->
                                <div
                                    class="w-full space-y-3 | col-span-4 | bg-white p-5 rounded-xl | cursor-pointer hover:shadow-md transition-shadow duration-300"
                                >
                                    <div class="flex space-x-5">
                                        <span
                                            class="text-purple bg-purple bg-opacity-10 h-min p-2 rounded font-medium text-xl"
                                            >Q</span
                                        >
                                        <p>
                                            What is momentum and its SI units?
                                            What is the momentum of a racing car
                                            of mass 500 kg driven at 270 km/h?
                                        </p>
                                    </div>

                                    <span
                                        class="flex pt-5 text-light_gray text-sm"
                                    >
                                        Solver by Shipon Hossain
                                    </span>
                                </div>
                            </div>
                        </section>

                        <!-- Pending Qus End -->
                    </div>
                </section>
            </div>
            <!-- Modal -->
            <div
                id="modal"
                class="fixed min-h-screen w-screen top-0 left-0 z-50 | backdrop-blur-sm bg-white/10 | justify-center items-center | hidden | transition-all duration-300 ease-in-out"
            >
                <div
                    class="w-fit bg-white rounded-xl p-5 transition-shadow shadow | relative"
                >
                    <div class="absolute top-5 right-5  !bg-red-600">
                        <button
                            id="close_qus_modal"
                            class="hover:scale-125 transition-transform z-20"
                        >
                            <img
                                class="h-16 w-16"
                                src="storage/ui-photos/nav-icons/close.svg"
                                alt=""
                            />
                        </button>
                    </div>
                    <h6 class="text-center font-bold text-2xl py-7">
                        Ask Qustion
                    </h6>
                    <div class="bg-white p-5 rounded-xl w-[700px]">
                        <form action="">
                            <textarea
                                placeholder="Type your qustion here"
                                class="w-full h-[250px] border-none"
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
                                            class="form-select form-select-sm appearance-none block px-2 py-1 text-sm font-normal text-light_gray bg-white bg-clip-padding bg-no-repeat rounded transition ease-in-out m-0 focus:bg-white border-none focus:outline-none w-[100px]"
                                        >
                                            <option value="">Subject</option>
                                            <option value="">Subject 2</option>
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
                                        class="hidden"
                                        id="file-upload"
                                        type="file"
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
                </div>
            </div>
        </main>
        <script src="js/qusScript.js"></script>
    </body>
</html>











{{--
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Question</title>
</head>
<body>


<br><br>

@if(Session::has('posted'))
        <p class="alert alert-success">{{Session::get('posted')}}</p>
        @endif
        <p >{{Session::get('id')}}</p>
<form action="{{url('postQuestion')}}" method="get">
<br>
<table>
    @foreach ($qus as $data)
    <tr>
        <td>Qus : {{ $data ->qus}}</td>
        <td>Ans : {{ $data ->ans}}</td>
    </tr>
    @endforeach
</table>


<br>
    <input type="text" name="question" placeholder="type your qus here">
    @error('question')
    <span class="text-error" style="color: red">{{$message}}</span>
  @enderror

    <input type="submit" class="btn btn-primary my-3">

</form>





</body>
</html> --}}
