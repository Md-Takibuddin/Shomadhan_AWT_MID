/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from "react-router-dom";
import React, { useState, userEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hook";
import { Alert, Input } from "@material-tailwind/react";
import "../index.css";
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
      <div>
         <h1 className="text-cyan-600">test css</h1>
      </div>
   );
};

export default Login;
