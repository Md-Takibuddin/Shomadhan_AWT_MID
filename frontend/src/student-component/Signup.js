/* eslint-disable jsx-a11y/img-redundant-alt */
import "../Student.css";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Signup = () => {
   let [name, setName] = useState("");
   let [phone_number, setPhone_number] = useState("");
   let [email, setEmail] = useState("");
   let [password, setPassword] = useState("");
   let [school, setSchool] = useState("");
   let [sClass, setClass] = useState("");
   let [dob, setDob] = useState("");
   let [photo, setPhoto] = useState("");

   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      var obj = {
         name: name,
         phone_number: phone_number,
         email: email,
         password: password,
         school: school,
         class: sClass,
         dob: dob,
         photo: photo,
      };
      const data = new FormData();
      data.append("name", name);
      data.append("phone_number", phone_number);
      data.append("email", email);
      data.append("password", password);
      data.append("school", school);
      data.append("class", sClass);
      data.append("dob", dob);
      data.append("photo", photo);
      try {
         const resp = await axios.post(
            "http://127.0.0.1:8000/api/reactSignIn",
            data
         );
         if (resp.statusText === "OK") {
            console.log("ok hoise");
            redirect("/student-login");
         }
      } catch (error) {
         console.log(error);
      }
   };
   return (
      <body>
         <main class="custom_container | h-screen | flex flex-col justify-center items-center | overflow-hidden">
            <section class="grid grid-cols-12 | gap-10 | h-min">
               <figure class="col-span-5">
                  <img
                     class="h-full w-full object-contain"
                     src="storage/ui-photos/signup.png"
                     alt="figure image"
                  />
               </figure>
               <section class="col-span-7 | flex flex-col justify-center items-center | space-y-10">
                  <header class="flex flex-col | w-full">
                     <figure class="h-[90px]">
                        <img
                           class="h-full object-contain"
                           src="storage/ui-photos/logo.png"
                           alt="logo"
                        />
                     </figure>
                     <div class="flex flex-col">
                        <h1 class="header-1">Create account</h1>
                        <span class="text-base">
                           Be a member of your family
                        </span>
                     </div>
                  </header>
                  {/* @if(Session::has('regSuccess'))
                    <div class="flex p-4 mb-4 text-lg  bg-[#E5FEE5] rounded-lg w-fit " role="alert">
                        <div class="text-[#27AE60]">
                          <span class="font-medium">{{Session::get('regSuccess')}}</span>
                        </div>
                      </div>
                    @endif */}
                  <form class="w-full">
                     <div class="grid grid-cols-12 | gap-5">
                        <span class="col-span-6 input_wrapper">
                           <label for="name">Name</label>
                           <input
                              class="form-input input_base"
                              name="name"
                              type="text"
                              onChange={(e) => setName(e.target.value)}
                           />
                           {/* @error('name')
                                <span class="text-error" style="color: red">{{$message}}</span>
                              @enderror */}
                        </span>
                        <span class="col-span-6 input_wrapper">
                           <label for="dob">Date of birth (MM/DD/YY)</label>
                           <input
                              class="form-input input_base"
                              name="dob"
                              type="date"
                              onChange={(e) => setDob(e.target.value)}
                           />
                           {/* @error('dob')
                                <span class="text-error" style="color: red">{{$message}}</span>
                              @enderror */}
                        </span>

                        <span class="col-span-6 input_wrapper">
                           <label for="school_collage_name">
                              School or Collage name
                           </label>
                           <input
                              class="form-input input_base"
                              name="school"
                              type="text"
                              onChange={(e) => setSchool(e.target.value)}
                           />
                           {/* @error('school')
                                <span class="text-error" style="color: red">{{$message}}</span>
                              @enderror */}
                        </span>

                        <span class="col-span-6 input_wrapper">
                           <label for="school_collage_name">Class</label>
                           <select
                              name="class"
                              id="class"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              onChange={(e) => setClass(e.target.value)}
                           >
                              <option value="">select class</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                              <option value="11">11</option>
                              <option value="12">12</option>
                           </select>
                           {/* @error('class')
                                <span class="text-error" style="color: red">{{$message}}</span>
                              @enderror */}
                        </span>

                        <span class="col-span-6 input_wrapper">
                           <label for="email">Email Phone number</label>
                           <input
                              class="form-input input_base"
                              name="email"
                              type="text"
                              onChange={(e) => setEmail(e.target.value)}
                           />
                           {/* @error('email')
                                <span class="text-error" style="color: red">{{$message}}</span>
                              @enderror */}
                        </span>

                        <span class="col-span-6 input_wrapper">
                           <label for="phone_number">Phone number</label>
                           <input
                              class="form-input input_base"
                              name="phone_number"
                              type="text"
                              onChange={(e) => setPhone_number(e.target.value)}
                           />
                           {/* @error('phone_number')
                                <span class="text-error" style="color: red">{{$message}}</span>
                              @enderror */}
                        </span>

                        <span class="col-span-6 input_wrapper">
                           <label for="password">Password</label>
                           <input
                              class="form-input input_base"
                              name="password"
                              type="password"
                              onChange={(e) => setPassword(e.target.value)}
                           />
                           {/* @error('password')
                                <span class="text-error" style="color: red">{{$message}}</span>
                              @enderror */}
                        </span>

                        <span class="col-span-6 input_wrapper">
                           <label for="upload_photo">Upload photo</label>
                           <input
                              // class="form-input input_base"
                              class="file-input file-input-bordered w-full max-w-xs"
                              name="photo"
                              type="file"
                              accept="image/*"
                              onChange={(e) => setPhoto(e.target.files[0])}
                           />
                        </span>
                        {/* 
                            {{-- <span
                                class="col-span-6 flex space-x-2 justify-center items-center"
                            >
                                <input
                                    class="form-input input_base"
                                    name="checkbox"
                                    type="checkbox"
                                />
                                <label for="email"
                                    >I agree to all the
                                    <a href="" class="link">Terms </a>and
                                    <a href="" class="link"> Privacy policy</a>
                                </label>
                            </span> --}} */}
                     </div>

                     <div class="grid grid-cols-12 | gap-5 | my-10">
                        <button
                           class="col-span-6 | cta_btn_base bg-blue__"
                           type="submit"
                           onClick={handleSubmit}
                        >
                           Create account
                        </button>

                        <button
                           class="col-span-6 | cta_btn_base | flex justify-center items-center | space-x-2 bg-gray__"
                           type="submit"
                        >
                           <img
                              class="h-5 w-5"
                              src="storage/ui-photos/google_logo.png"
                              alt=""
                           />
                           <span> Sign-in with google</span>
                        </button>
                     </div>
                     <span class="text-center w-full">
                        Already have an account?
                        <Link to={"/student-login"} class="text-blue-700">
                           Sign in
                        </Link>
                     </span>
                  </form>
               </section>
            </section>
         </main>
      </body>
   );
};

export default Signup;
