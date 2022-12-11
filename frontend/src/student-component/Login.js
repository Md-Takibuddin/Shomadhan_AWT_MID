/* eslint-disable jsx-a11y/img-redundant-alt */
import "../Student.css";
import { Link } from "react-router-dom";
import React, { useState, userEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hook";
import { Alert, Input } from "@material-tailwind/react";

const Login = () => {
   window.localStorage.clear();
   const [userInfo, setInfo] = useLocalStorage("userInfo", "");
   const [showModal, setShowModal] = useState(false);

   let [token, setToken] = useState("");
   let [email, setEmail] = useState("");
   let [password, setPassword] = useState("");
   const navigate = useNavigate();

   const loginSubmit = async (e) => {
      e.preventDefault();
      var obj = { email: email, password: password };
      //alert(obj.username);
      try {
         const resp = await axios.post(
            "http://127.0.0.1:8000/api/reactLogin",
            obj
         );
         const { login, userInfo } = resp.data;
         // console.log({ login, userInfo });
         // var user = { userId: token.userid, access_token: token.token };
         setInfo(userInfo);
         console.log(localStorage.getItem("user"));
         if (login === "ok") {
            navigate("/student-dashboard");
         } else if (login === "t_ok") {
            navigate("/teacher-dash");
         } else {
            navigate("/student-login");
            setShowModal(true);
         }
      } catch (error) {
         console.log(error);
      }
   };
   return (
      <body>
         <main className="custom_container | h-screen | flex flex-col justify-center items-center | overflow-hidden">
            <header className="flex flex-col justify-center items-center">
               <figure className="h-[90px]">
                  {/* <img
                     className="h-full w-full object-contain"
                     src="storage/ui-photos/logo.png"
                     alt="logo"
                  /> */}
               </figure>
               <div className="flex flex-col">
                  <h1 className="text-center header-1">Welcome Back</h1>
                  <span className="text-center text-base">
                     Pleasure to see you again
                  </span>
               </div>
            </header>
            <section className="grid grid-cols-12 | gap-10 | h-min">
               <figure className="col-span-6">
                  <img
                     className="h-full w-full object-contain"
                     src="storage/ui-photos/signin.png"
                     alt="figure image"
                  />
               </figure>
               <section className="col-span-6 | flex flex-col justify-center items-center">
                  <form
                     className="flex flex-col | max-w-lg w-full | ml-auto space-y-5"
                     action="{{url('loginData')}}"
                     method="post"
                  >
                     <figure className="h-[70px]">
                        <img
                           className="h-full w-full object-contain"
                           src="storage/ui-photos/logo.png"
                           alt="logo"
                        />
                     </figure>

                     <span className="text-center text-base ">
                        Login with your email and password
                     </span>
                     <span className="input_wrapper">
                        <Input
                           label="Email or phone number"
                           onChange={(e) => setEmail(e.target.value)}
                        />
                     </span>
                     <span className="input_wrapper">
                        <Input
                           type="password"
                           label="Password"
                           onChange={(e) => setPassword(e.target.value)}
                        />
                     </span>
                     {showModal && (
                        <Alert color="red">
                           Email or Password is incorrect
                        </Alert>
                     )}
                     <span>
                        <input
                           className="form-input input_base"
                           type="checkbox"
                           name="remember"
                        />
                        <label htmlFor="email">Remember me</label>
                     </span>

                     <button
                        className="cta_btn_base bg-green"
                        onClick={loginSubmit}
                     >
                        Log in
                     </button>

                     <button
                        className="cta_btn_base | flex justify-center items-center | space-x-2 bg-gray__"
                        type="submit"
                     >
                        <img
                           className="h-5 w-5"
                           src="storage/ui-photos/google_logo.png"
                           alt=""
                        />
                        <span> Sign-in with google</span>
                     </button>

                     <span className="text-center">
                        Don't have an account?
                        <br />
                        <Link to={"/student-signup"} className="link">
                           Sign up as Student
                        </Link>
                        <br />
                        <Link to={"/teacher-signup"} className="link">
                           Sign up as Teacher
                        </Link>
                     </span>
                  </form>
               </section>
            </section>
         </main>
      </body>
   );
};

export default Login;
