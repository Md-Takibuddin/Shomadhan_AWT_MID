import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
   BrowserRouter,
   BrowserRouter as Router,
   Route,
   Routes,
} from "react-router-dom";

// Student Component Import
import Login from "./student-component/Login";
import Dashboard from "./student-component/Dashboard";
import Question from "./student-component/Question";
import Appointment from "./student-component/Appointment";
import Settings from "./student-component/Settings";
import Signup from "./student-component/Signup";
import QusView from "./student-component/QusView";

// Teacher Component Import
import Tsidebar from "./teacher-component/Tsidebar";
import Tdash from "./teacher-component/Tdash";
import Tprofile from "./teacher-component/Tprofile";
import Tques from "./teacher-component/Tques";
import Tapp from "./teacher-component/Tapp";
import Tans from "./teacher-component/Tans";
import Tgiveans from "./teacher-component/Tgiveans";
import Treg from "./teacher-component/Treg";

// Admin Component Import

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <BrowserRouter>
      <Routes>
         {/* Student Route */}
         <Route exact path="/" element={<Login />} />
         <Route exact path="/student-login" element={<Login />} />
         <Route exact path="/student-dashboard" element={<Dashboard />} />
         <Route exact path="/student-question" element={<Question />} />
         <Route exact path="/questionView/:id" element={<QusView />} />
         <Route exact path="/student-appointment" element={<Appointment />} />

         <Route exact path="/student-settings" element={<Settings />} />
         <Route exact path="/student-signup" element={<Signup />} />

         {/* Teacher Route */}
         <Route exact path="/teacher-sidebar" element={<Tsidebar />} />
         <Route exact path="/teacher-dash" element={<Tdash />} />
         <Route exact path="/teacher-profile" element={<Tprofile />} />
         <Route exact path="/teacher-ques" element={<Tques />} />
         <Route exact path="/teacher-appointment" element={<Tapp />} />
         <Route exact path="/teacher-showans" element={<Tans />} />
         <Route exact path="/teacher-answer" element={<Tgiveans />} />
         <Route exact path="/teacher-register" element={<Treg />} />

         {/* Admin Route */}
      </Routes>
   </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
