import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Student Component Import
import Login from "./student-component/Login";
import Dashboard from "./student-component/Dashboard";
import Question from "./student-component/Question";
import Appointment from "./student-component/Appointment";
import Settings from "./student-component/Settings";
import Signup from "./student-component/Signup";

// Teacher Component Import

// Admin Component Import

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <Router>
         <Routes>
            {/* Student Route */}
            <Route exact path="/" element={<Login />} />
            <Route exact path="/student-login" element={<Login />} />
            <Route exact path="/student-dashboard" element={<Dashboard />} />
            <Route exact path="/student-question" element={<Question />} />
            <Route
               exact
               path="/student-appointment"
               element={<Appointment />}
            />
            <Route exact path="/student-settings" element={<Settings />} />
            <Route exact path="/student-signup" element={<Signup />} />

            {/* Teacher Route */}

            {/* Admin Route */}
         </Routes>
      </Router>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
