import { useState } from "react";
import "../Student.css";
import MiniProfile from "./MiniProfile";
import SideBar from "./SideBar";

const Settings = () => {
   const [userInfo, setInfo] = useState(() => {
      // getting stored value
      const saved = localStorage.getItem("userInfo");
      const initialValue = JSON.parse(saved);
      return initialValue;
   });

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
                  {/* {{-- <haeder-component>--}} */}
                  <nav className="flex">
                     <h1 className="flex-1 | text-purple text-[38px] font-bold">
                        Settings
                     </h1>

                     <MiniProfile />
                  </nav>
                  {/* {{--</haeder-component> --}} */}

                  {/* @if(Session::has('passChanged'))
                    <div className="flex p-4 mb-4 text-lg  bg-[#E5FEE5] rounded-lg w-fit " role="alert">
                        <div className="text-[#27AE60]">
                        <span className="font-medium">Password Changed successfully.</span>
                        </div>
                    </div>
                @endif
                @if(Session::has('notChanged'))
                <div className="flex p-4 mb-4 text-lg  bg-[#fee5e5] rounded-lg w-fit " role="alert">
                    <div className="text-[#e13030]">
                    <span className="font-medium">Password no changed.</span>
                    @error('oldPass')
                    <span className="text-error" style="color: red">{{$message}}</span>
                  @enderror
                    </div>
                </div>
            @endif */}

                  <div className="grid grid-cols-12 | mt-5 rounded-xl | bg-white p-5">
                     <div className="col-span-8 border-r-2 border-dashed">
                        <div className="flex space-x-5">
                           <figure>
                              <img
                                 className="h-[130px] w-[130px] rounded-full"
                                 src={userInfo.photo}
                                 alt=""
                              />
                           </figure>
                           <div className="flex flex-col space-y-1">
                              <h1 className="font-semibold text-4xl">
                                 {/* {{$data->name}} */}
                              </h1>
                              <span className="text-light_gray text-xl">
                                 Student
                              </span>
                              <div className="flex space-x-3">
                                 <button
                                    id="edit_profile_btn"
                                    className="rounded-3xl px-6 py-2 font-semibold bg-[#F5F5F5] !w-fit hover:shadow transition-shadow duration-300"
                                 >
                                    Edit Profile
                                 </button>
                              </div>
                           </div>
                        </div>
                        <div className="mt-10">
                           <form
                              id="profile"
                              className="grid grid-cols-3 gap-10 user_form"
                              action="{{url('updateData')}}"
                              method="post"
                              files="true"
                              enctype="multipart/form-data"
                           >
                              <div className="flex space-x-3">
                                 <figure>
                                    <img
                                       className="h-8 w-8 rounded-full"
                                       src="storage/ui-photos/dashboard/Mail.png"
                                       alt=""
                                    />
                                 </figure>
                                 <div className="flex flex-col space-y-2">
                                    <label
                                       className="text-sm text-light_gray"
                                       for="email"
                                    >
                                       Email
                                    </label>
                                    <input
                                       disabled
                                       className="settings_input_disabled"
                                       type="text"
                                       value={userInfo.email}
                                       name="email"
                                       id="email"
                                       readonly
                                    />
                                 </div>
                              </div>
                              <div className="flex space-x-3">
                                 <figure>
                                    <img
                                       className="h-8 w-8 rounded-full"
                                       src="storage/ui-photos/dashboard/dob.png"
                                       alt=""
                                    />
                                 </figure>
                                 <div className="flex flex-col space-y-2">
                                    <label
                                       className="text-sm text-light_gray"
                                       for="dob"
                                    >
                                       Date of birth
                                    </label>
                                    <input
                                       disabled
                                       className="settings_input_disabled"
                                       type="text"
                                       value={userInfo.dob}
                                       name="dob"
                                       id="email"
                                    />
                                 </div>
                              </div>
                              <div className="flex space-x-3">
                                 <figure>
                                    <img
                                       className="h-8 w-8 rounded-full"
                                       src="storage/ui-photos/dashboard/Phone.png"
                                       alt=""
                                    />
                                 </figure>
                                 <div className="flex flex-col space-y-2">
                                    <label
                                       className="text-sm text-light_gray"
                                       for="phone_no"
                                    >
                                       Phone No
                                    </label>
                                    <input
                                       disabled
                                       className="settings_input_disabled"
                                       type="text"
                                       value={userInfo.phone_number}
                                       name="phone_no"
                                       id="phone_no"
                                    />
                                 </div>
                              </div>
                              <div className="flex space-x-3">
                                 <figure>
                                    <img
                                       className="h-8 w-8 rounded-full"
                                       src="storage/ui-photos/dashboard/school.png"
                                       alt=""
                                    />
                                 </figure>
                                 <div className="flex flex-col space-y-2">
                                    <label
                                       className="text-sm text-light_gray"
                                       for="school_collage"
                                    >
                                       School / Collage
                                    </label>
                                    <input
                                       disabled
                                       className="settings_input_disabled"
                                       type="text"
                                       value={userInfo.school}
                                       name="school_collage"
                                       id="school_collage"
                                    />
                                 </div>
                              </div>
                              <div className="flex space-x-3">
                                 <figure>
                                    <img
                                       className="h-8 w-8 rounded-full"
                                       src="storage/ui-photos/dashboard/class.png"
                                       alt=""
                                    />
                                 </figure>
                                 <div className="flex flex-col space-y-2">
                                    <label
                                       className="text-sm text-light_gray"
                                       for="className"
                                    >
                                       Class
                                    </label>
                                    <input
                                       disabled
                                       className="settings_input_disabled"
                                       type="text"
                                       value={userInfo.class}
                                       name="className"
                                       id="className"
                                    />
                                 </div>
                              </div>
                              <div className="space-x-3 hidden">
                                 <figure>
                                    <img
                                       className="h-8 w-8 rounded-full"
                                       src="storage/ui-photos/dashboard/className.png"
                                       alt=""
                                    />
                                 </figure>
                                 <div className="flex flex-col space-y-2">
                                    <label
                                       className="text-sm text-light_gray"
                                       for="photo"
                                    >
                                       Photo
                                    </label>
                                    <input
                                       className="settings_input_disabled"
                                       type="file"
                                       name="photo"
                                       id="photo"
                                       accept="image/*"
                                    />
                                 </div>
                              </div>
                              <div className="flex space-x-4">
                                 <button
                                    id="back"
                                    className="rounded-3xl px-6 py-2 font-semibold border border-purple !w-fit hover:shadow transition-shadow duration-300 text-purple hidden "
                                 >
                                    Cencel
                                 </button>
                                 <button
                                    type="submit"
                                    id="save_profile_btn"
                                    name="submit"
                                    className="rounded-3xl px-6 py-2 font-semibold bg-purple  border-purple !w-fit hover:shadow transition-shadow duration-300 text-white hidden "
                                    form="profile"
                                 >
                                    Save
                                 </button>
                              </div>
                           </form>
                        </div>
                     </div>

                     <div className="col-span-4 px-10 | flex flex-col space-y-5">
                        <div className="bg-gradient-to-r from-purple to-blue__ rounded-2xl p-5 text-white flex flex-col space-y-5">
                           <span className="text-xl">Your Plan</span>
                           <h6 className="font-semibold text-3xl">FREE</h6>
                           <p>
                              Upgrade to Premium Plan to get more Features &
                              Storage memory
                           </p>
                           <button className="rounded-2xl bg-white text-black py-3 hover:shadow-xl transition-shadow duration-300 font-medium">
                              Upgrade Plan
                           </button>
                        </div>
                        <div>
                           <button
                              id="change_password_btn"
                              className=" bg-purple text-xl rounded-2xl| hover:shadow-xl transition-shadow duration-300 cta_btn_base "
                           >
                              Change Password
                           </button>
                        </div>
                     </div>
                  </div>
               </section>
            </div>
            {/* @if(Session::has('passChanged'))
                    <div className="flex p-4 mb-4 text-lg  bg-[#E5FEE5] rounded-lg w-fit " role="alert">
                        <div className="text-[#27AE60]">
                          <span className="font-medium">Password Changed successfully.</span>
                        </div>
                      </div>
            @endif */}
            {/* <!-- Modal --> */}
            <div
               id="modal"
               className="fixed min-h-screen w-screen top-0 left-0 z-50 | backdrop-blur-sm bg-black/75
            | justify-center items-center | hidden | transition-all duration-300 ease-in-out"
            >
               <div className="w-min bg-white rounded-xl p-5 transition-shadow shadow-xl px-16">
                  <h6 className="text-center font-bold text-2xl py-7">
                     Change Password
                  </h6>
                  <form
                     className="flex flex-col space-y-3 text-sm text-light_gray"
                     action="{{url('updatePass')}}"
                     method="post"
                  >
                     <div className="w-full flex flex-col">
                        <label for="">Old password</label>
                        <input
                           className="input_base"
                           name="oldPass"
                           type="text"
                        />
                     </div>
                     <div className="w-full flex flex-col">
                        <label for="">New password</label>
                        <input
                           className="input_base"
                           name="newPass"
                           type="password"
                        />
                     </div>
                     <div className="col-span-2">
                        <div className="flex space-x-5 justify-center items-center">
                           <button
                              id="modal_cancle_btn"
                              className="cta_btn_base !text-light_gray border-[1px] border-purple !w-min"
                           >
                              Cancle
                           </button>
                           <button
                              type="submit"
                              className="cta_btn_base bg-purple !w-min"
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
