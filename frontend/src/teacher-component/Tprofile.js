import "./prof.css";
import Tsidebar from "./Tsidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { redirect, renderMatches, useNavigate } from "react-router-dom";

const Tprofile = () => {
   const navigate = useNavigate();

   const [userInfo, setInfo] = useState("");
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [phoneNo, setPhn] = useState("");
   const [password, setPassword] = useState("");
   const [current_job, setCurrentjob] = useState("");
   const [cv, setCv] = useState("");
   const [dob, setDob] = useState("");
   const [photo, setPhoto] = useState("");
   useEffect(() => {
      axios
         .get("http://127.0.0.1:8000/api/tdashdata")
         .then((resp) => {
            console.log(resp.data[0]);
            setName(resp.data[0].name);
            setEmail(resp.data[0].t_email);
            setPhn(resp.data[0].phoneNo);
            setPassword(resp.data[0].password);
            setCurrentjob(resp.data[0].current_job);
            setCv(resp.data[0].cv);
            setDob(resp.data[0].dob);
            setInfo(resp.data[0]);
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);

   async function updateProfile() {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phn", phoneNo);
      formData.append("pass", password);
      formData.append("cj", current_job);
      formData.append("cv", cv);
      formData.append("dob", dob);
      formData.append("photo", photo);
      const resp = await axios.post(
         "http://127.0.0.1:8000/api/updateteacher",
         formData
      );
      // window.location.reload();
      renderMatches("/teacher-profile");
   }

   return (
      <div className="parent">
         <div className="div1"> SomaDhan</div>
         <div className="div2">
            {" "}
            <Tsidebar />
         </div>
         <div className="div3"> </div>
         <div className="div4"> </div>
         <div className="div5">
            <div className="">
               <div className="row">
                  <div className="col-md-3 border-right">
                     <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                        {/* <img className="rounded-circle mt-5" width="150px" src={"http://127.0.0.1:8000/"+userInfo.photo}/> */}
                        <span className="font-weight-bold">{name} </span>{" "}
                        <input type="file" name="photo" accept="image/*" />
                     </div>
                  </div>
                  <div className="col-md-5 border-right">
                     <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                           <h4 className="text-right">Profile Settings</h4>
                        </div>
                        <div className="row mt-3">
                           <div className="col-md-12">
                              <label className="labels">Name</label>
                              <input
                                 type="text"
                                 className="form-control"
                                 onChange={(e) => setName(e.target.value)}
                                 defaultValue={userInfo.name}
                              />
                           </div>
                        </div>
                        <div className="row mt-3">
                           <div className="col-md-12">
                              <label className="labels">E-mail</label>
                              <input
                                 type="text"
                                 className="form-control"
                                 onChange={(e) => setEmail(e.target.value)}
                                 defaultValue={userInfo.t_email}
                              />
                           </div>
                           <div className="col-md-12">
                              <label className="labels">Mobile Number</label>
                              <input
                                 type="text"
                                 className="form-control"
                                 onChange={(e) => setPhn(e.target.value)}
                                 defaultValue={userInfo.phoneNo}
                              />
                           </div>
                           <div className="col-md-12">
                              <label className="labels">Current Job</label>
                              <input
                                 type="text"
                                 className="form-control"
                                 onChange={(e) => setCurrentjob(e.target.value)}
                                 defaultValue={userInfo.current_job}
                              />
                           </div>
                           <div className="col-md-12">
                              <label className="labels">Curriculum Vitae</label>
                              <input
                                 type="file"
                                 accept=".pdf"
                                 className="form-control"
                                 onChange={(e) => setCv(e.target.value)}
                              />
                           </div>
                           <div className="col-md-12">
                              <label className="labels">Date of Birth</label>
                              <input
                                 type="date"
                                 className="form-control"
                                 onChange={(e) => setDob(e.target.value)}
                                 defaultValue={userInfo.dob}
                              />
                           </div>
                           <div className="col-md-12">
                              <label className="labels">Password</label>
                              <input
                                 type="text"
                                 className="form-control"
                                 onChange={(e) => setPassword(e.target.value)}
                                 defaultValue={userInfo.password}
                              />
                           </div>
                        </div>
                        <div className="mt-5 text-center">
                           <button
                              className="btn btn-primary profile-button"
                              onClick={updateProfile}
                           >
                              Save Profile
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <link
               rel="stylesheet"
               href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/css/bootstrap.min.css"
            ></link>
         </div>
         <div className="div6"> </div>
         <div className="div7"> </div>
      </div>
   );
};

export default Tprofile;
