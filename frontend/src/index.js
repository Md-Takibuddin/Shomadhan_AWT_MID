import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Student Component Import
import Login from "./student-component/Login";
import Dashboard from "./student-component/Dashboard";
import Question from "./student-component/Question";

// Teacher Component Import

// Admin Component Import

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                {/* Student Route */}

                <Route exact path="/student-login" element={<Login />} />
                <Route
                    exact
                    path="/student-dashboard"
                    element={<Dashboard />}
                />
                <Route exact path="/student-question" element={<Question />} />

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
