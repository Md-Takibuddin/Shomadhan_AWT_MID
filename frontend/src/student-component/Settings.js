import "../Student.css";
import MiniProfile from "./MiniProfile";
import SideBar from "./SideBar";

const Settings = () => {
    return (
        <body>
            <main class="relative">
                <div class="grid grid-cols-12 | relative">
                    <aside class="col-span-2 | bg-white">
                        {/* {{-- <sidebar-component> --}} */}
                        <SideBar />
                        {/* {{-- </sidebar-component> --}} */}
                    </aside>
                    <section class="col-span-10 bg-[#F6F6FF] p-10">
                        {/* {{-- <haeder-component>--}} */}
                        <nav class="flex">
                            <h1 class="flex-1 | text-purple text-[38px] font-bold">
                                Settings
                            </h1>

                            <MiniProfile />
                        </nav>
                        {/* {{--</haeder-component> --}} */}

                        {/* @if(Session::has('passChanged'))
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
            @endif */}

                        <div class="grid grid-cols-12 | mt-5 rounded-xl | bg-white p-5">
                            <div class="col-span-8 border-r-2 border-dashed">
                                <div class="flex space-x-5">
                                    <figure>
                                        <img
                                            class="h-[130px] w-[130px] rounded-full"
                                            src=""
                                            alt=""
                                        />
                                    </figure>
                                    <div class="flex flex-col space-y-1">
                                        <h1 class="font-semibold text-4xl">
                                            {/* {{$data->name}} */}
                                        </h1>
                                        <span class="text-light_gray text-xl">
                                            Student
                                        </span>
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
                                                >
                                                    Email
                                                </label>
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
                                                >
                                                    Date of birth
                                                </label>
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
                                                >
                                                    Phone No
                                                </label>
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
                                                >
                                                    School / Collage
                                                </label>
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
                                                >
                                                    Class
                                                </label>
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
                                                >
                                                    Photo
                                                </label>
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
                                <div class="bg-gradient-to-r from-purple to-blue__ rounded-2xl p-5 text-white flex flex-col space-y-5">
                                    <span class="text-xl">Your Plan</span>
                                    <h6 class="font-semibold text-3xl">FREE</h6>
                                    <p>
                                        Upgrade to Premium Plan to get more
                                        Features & Storage memory
                                    </p>
                                    <button class="rounded-2xl bg-white text-black py-3 hover:shadow-xl transition-shadow duration-300 font-medium">
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
                {/* @if(Session::has('passChanged'))
                    <div class="flex p-4 mb-4 text-lg  bg-[#E5FEE5] rounded-lg w-fit " role="alert">
                        <div class="text-[#27AE60]">
                          <span class="font-medium">Password Changed successfully.</span>
                        </div>
                      </div>
            @endif */}
                {/* <!-- Modal --> */}
                <div
                    id="modal"
                    class="fixed min-h-screen w-screen top-0 left-0 z-50 | backdrop-blur-sm bg-black/75
            | justify-center items-center | hidden | transition-all duration-300 ease-in-out"
                >
                    <div class="w-min bg-white rounded-xl p-5 transition-shadow shadow-xl px-16">
                        <h6 class="text-center font-bold text-2xl py-7">
                            Change Password
                        </h6>
                        <form
                            class="flex flex-col space-y-3 text-sm text-light_gray"
                            action="{{url('updatePass')}}"
                            method="post"
                        >
                            <div class="w-full flex flex-col">
                                <label for="">Old password</label>
                                <input
                                    class="input_base"
                                    name="oldPass"
                                    type="text"
                                />
                            </div>
                            <div class="w-full flex flex-col">
                                <label for="">New password</label>
                                <input
                                    class="input_base"
                                    name="newPass"
                                    type="password"
                                />
                            </div>
                            <div class="col-span-2">
                                <div class="flex space-x-5 justify-center items-center">
                                    <button
                                        id="modal_cancle_btn"
                                        class="cta_btn_base !text-light_gray border-[1px] border-purple !w-min"
                                    >
                                        Cancle
                                    </button>
                                    <button
                                        type="submit"
                                        class="cta_btn_base bg-purple !w-min"
                                    >
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
    );
};

export default Settings;
