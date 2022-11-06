<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link href="{{ asset('css/app.css') }}" rel="stylesheet">

        <title>test</title>
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
                                    src="../storage/ui-photos/logo.png"
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
                                test
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

                <div class="flex flex-col space-y-10">
                    <div
                        class="flex space-x-3 items-center cursor-pointer w-min"
                    >
                        <img
                            class="h-5 w-5"
                            src="storage/ui-photos/dashboard/left-arrow.png"
                            alt=""
                        />
                        <span class="text-lg text-light_gray">Back</span>
                    </div>
                    <section>
                        <article class="flex flex-col space-y-8">
                            <div
                                class="bg-white rounded-xl px-10 py-5 font-semibold"
                            >
                                <div class="flex space-x-5">
                                    <span
                                        class="text-purple bg-purple bg-opacity-10 h-min p-2 rounded font-medium text-xl"
                                        >Q</span
                                    >
                                    <p>
                                       {{-- {{$qus->qus}} --}}
                                    </p>
                                </div>
                                <!-- Ignore whole figure tag if there is not image -->
                                <figure
                                    class="flex justify-center items-center mt-5"
                                >
                                    <img
                                        class="h-fit w-fit object-contain max-w-[560px]"
                                        src="storage/ui-photos/dashboard/image 3.png"
                                        alt=""
                                    />
                                </figure>
                            </div>
                            <div
                                class="flex space-x-5 bg-white rounded-xl px-10 py-5"
                            >
                                <span
                                    class="text-green bg-green bg-opacity-10 h-min p-2 rounded font-medium text-xl"
                                    >A</span
                                >
                                <div>
                                    <span class="flex space-x-2">
                                        <span class="text-light_gray text-sm">
                                            Solver by Shipon Hossain
                                        </span>
                                        <img
                                            class="h-5 w-5"
                                            src="storage/ui-photos/dashboard/solved.png"
                                            alt=""
                                        />
                                    </span>
                                    <p class="py-5">
                                        {{-- {{$qus->ans}} --}}
                                    </p>

                                    <!-- Ignore whole figure tag if there is not image -->
                                    <figure
                                        class="flex justify-center items-center mt-5"
                                    >
                                        <img
                                            class="h-fit w-fit object-contain max-w-[560px]"
                                            src="storage/ui-photos/dashboard/image 4.png"
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
    </body>
</html>
