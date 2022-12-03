<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link href="{{asset('css/app.css')}}" rel="stylesheet">

        <title>Settings</title>
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
                                Settings
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

                    @if(Session::has('passChanged'))
                    <div class="flex p-4 mb-4 text-lg  bg-[#E5FEE5] rounded-lg w-fit " role="alert">
                        <div class="text-[#27AE60]">
                        <span class="font-medium">Password Changed successfully.</span>
                        </div>
                    </div>
                @endif
                @if(Session::has('notChanged'))
                <div class="flex p-4 mb-4 text-lg  bg-[#fee5e5] rounded-lg w-fit " role="alert">
                    <div class="text-[#e13030]">
                    <span class="font-medium">Password no changed.</span>
                    @error('oldPass')
                    <span class="text-error" style="color: red">{{$message}}</span>
                  @enderror
                    </div>
                </div>
            @endif

                    <div
                        class="grid grid-cols-12 | mt-5 rounded-xl | bg-white p-5"
                    >
                        <div class="col-span-8 border-r-2 border-dashed">
                            <div class="flex space-x-5">
                                <figure>
                                    <img
                                        class="h-[130px] w-[130px] rounded-full"
                                        src="{{asset("$photo")}}"
                                        alt=""
                                    />
                                </figure>
                                <div class="flex flex-col space-y-1">
                                    <h1 class="font-semibold text-4xl">
                                        {{$data->name}}
                                    </h1>
                                    <span class="text-light_gray text-xl"
                                        >Student</span
                                    >
                                    <div class="flex space-x-3">
                                        <button
                                            id="edit_profile_btn"
                                            class="rounded-3xl px-6 py-2 font-semibold bg-[#F5F5F5] !w-fit hover:shadow transition-shadow duration-300"
                                        >
                                            Edit Profile
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-10">
                                <form
                                    id="profile"
                                    class="grid grid-cols-3 gap-10 user_form"
                                    action="{{url('updateData')}}"
                                    method="post"
                                    files="true"
                                    enctype="multipart/form-data"

                                >
                                @csrf
                                @method('PUT')
                                    <div class="flex space-x-3">
                                        <figure>
                                            <img
                                                class="h-8 w-8 rounded-full"
                                                src="storage/ui-photos/dashboard/Mail.png"
                                                alt=""
                                            />
                                        </figure>
                                        <div class="flex flex-col space-y-2">
                                            <label
                                                class="text-sm text-light_gray"
                                                for="email"
                                                >Email</label
                                            >
                                            <input
                                                disabled
                                                class="settings_input_disabled"
                                                type="text"
                                                value="{{$data->email}}"
                                                name="email"
                                                id="email"
                                                readonly
                                            />
                                        </div>
                                    </div>
                                    <div class="flex space-x-3">
                                        <figure>
                                            <img
                                                class="h-8 w-8 rounded-full"
                                                src="storage/ui-photos/dashboard/dob.png"
                                                alt=""
                                            />
                                        </figure>
                                        <div class="flex flex-col space-y-2">
                                            <label
                                                class="text-sm text-light_gray"
                                                for="dob"
                                                >Date of birth</label
                                            >
                                            <input
                                                disabled
                                                class="settings_input_disabled"
                                                type="text"
                                                value="{{$data->dob}}"
                                                name="dob"
                                                id="email"
                                            />
                                        </div>
                                    </div>
                                    <div class="flex space-x-3">
                                        <figure>
                                            <img
                                                class="h-8 w-8 rounded-full"
                                                src="storage/ui-photos/dashboard/Phone.png"
                                                alt=""
                                            />
                                        </figure>
                                        <div class="flex flex-col space-y-2">
                                            <label
                                                class="text-sm text-light_gray"
                                                for="phone_no"
                                                >Phone No</label
                                            >
                                            <input
                                                disabled
                                                class="settings_input_disabled"
                                                type="text"
                                                value="{{$data->phone_number}}"
                                                name="phone_no"
                                                id="phone_no"
                                            />
                                        </div>
                                    </div>
                                    <div class="flex space-x-3">
                                        <figure>
                                            <img
                                                class="h-8 w-8 rounded-full"
                                                src="storage/ui-photos/dashboard/school.png"
                                                alt=""
                                            />
                                        </figure>
                                        <div class="flex flex-col space-y-2">
                                            <label
                                                class="text-sm text-light_gray"
                                                for="school_collage"
                                                >School / Collage</label
                                            >
                                            <input
                                                disabled
                                                class="settings_input_disabled"
                                                type="text"
                                                value="{{$data->school}}"
                                                name="school_collage"
                                                id="school_collage"
                                            />
                                        </div>
                                    </div>
                                    <div class="flex space-x-3">
                                        <figure>
                                            <img
                                                class="h-8 w-8 rounded-full"
                                                src="storage/ui-photos/dashboard/class.png"
                                                alt=""
                                            />
                                        </figure>
                                        <div class="flex flex-col space-y-2">
                                            <label
                                                class="text-sm text-light_gray"
                                                for="class"
                                                >Class</label
                                            >
                                            <input
                                                disabled
                                                class="settings_input_disabled"
                                                type="text"
                                                value="{{$data->class}}"
                                                name="class"
                                                id="class"
                                            />
                                        </div>
                                    </div>
                                    <div class="space-x-3 hidden">
                                        <figure>
                                            <img
                                                class="h-8 w-8 rounded-full"
                                                src="storage/ui-photos/dashboard/class.png"
                                                alt=""
                                            />
                                        </figure>
                                        <div class="flex flex-col space-y-2">
                                            <label
                                                class="text-sm text-light_gray"
                                                for="photo"
                                                >Photo</label
                                            >
                                            <input
                                                class="settings_input_disabled"
                                                type="file"
                                                name="photo"
                                                id="photo"
                                                accept="image/*"
                                            />
                                        </div>
                                    </div>
                                <div class="flex space-x-4">

                                    <button
                                    id="back"
                                    class="rounded-3xl px-6 py-2 font-semibold border border-purple !w-fit hover:shadow transition-shadow duration-300 text-purple hidden "
                                    >
                                    Cencel
                                    </button>
                                    <button
                                        type="submit"
                                        id="save_profile_btn"
                                        name="submit"
                                        class="rounded-3xl px-6 py-2 font-semibold bg-purple  border-purple !w-fit hover:shadow transition-shadow duration-300 text-white hidden "
                                        form="profile"
                                    >
                                        Save
                                    </button>

                             </div>
                                </form>
                            </div>
                        </div>

                        <div class="col-span-4 px-10 | flex flex-col space-y-5">
                            <div
                                class="bg-gradient-to-r from-purple to-blue__ rounded-2xl p-5 text-white flex flex-col space-y-5"
                            >
                                <span class="text-xl">Your Plan</span>
                                <h6 class="font-semibold text-3xl">FREE</h6>
                                <p>
                                    Upgrade to Premium Plan to get more Features
                                    & Storage memory
                                </p>
                                <button
                                    class="rounded-2xl bg-white text-black py-3 hover:shadow-xl transition-shadow duration-300 font-medium"
                                >
                                    Upgrade Plan
                                </button>
                            </div>
                            <div>
                                <button
                                    id="change_password_btn"
                                    class=" bg-purple text-xl rounded-2xl| hover:shadow-xl transition-shadow duration-300 cta_btn_base "
                                >
                                    Change Password
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            @if(Session::has('passChanged'))
                    <div class="flex p-4 mb-4 text-lg  bg-[#E5FEE5] rounded-lg w-fit " role="alert">
                        <div class="text-[#27AE60]">
                          <span class="font-medium">Password Changed successfully.</span>
                        </div>
                      </div>
            @endif
            <!-- Modal -->
            <div
            id="modal"
            class="fixed min-h-screen w-screen top-0 left-0 z-50 | backdrop-blur-sm bg-black/75
            | justify-center items-center | hidden | transition-all duration-300 ease-in-out"
        >
            <div
                class="w-min bg-white rounded-xl p-5 transition-shadow shadow-xl px-16"
            >
                <h6 class="text-center font-bold text-2xl py-7">
                    Change Password
                </h6>
                <form
                    class="flex flex-col space-y-3 text-sm text-light_gray"
                    action="{{url('updatePass')}}"
                    method="post"
                >
                @csrf
                @method('PUT')
                    <div class="w-full flex flex-col">
                        <label for="">Old password</label>
                        <input class="input_base" name = "oldPass" type="text" />
                    </div>
                    <div class="w-full flex flex-col">
                        <label for="">New password</label>
                        <input class="input_base" name="newPass" type="password" />
                    </div>
                    <div class="col-span-2">
                        <div
                            class="flex space-x-5 justify-center items-center"
                        >
                            <button
                                id="modal_cancle_btn"
                                class="cta_btn_base !text-light_gray border-[1px] border-purple !w-min"
                            >
                                Cancle
                            </button>
                            <button type="submit" class="cta_btn_base bg-purple !w-min">
                                Save
                            </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
        <script src="js/settingsScript.js"></script>
    </body>
</html>

