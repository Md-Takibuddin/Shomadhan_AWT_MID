/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";
import { useLocalStorage } from "../hook";
import "../Student.css";
import AnsQus from "./AnsQus";
import MiniProfile from "./MiniProfile";
import SideBar from "./SideBar";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Question = () => {
   const [name, setName] = useLocalStorage("name", "");
   console.log(name);

   const [showModal, setShowModal] = useState(false);
   const askBtnAction = () => {
      setShowModal(true);
      setName({ name: "takib", age: "15" });
   };
   const cencleBtnAction = () => {
      setShowModal(false);
   };

   let [qus, setQus] = useState("");
   let [subject, setSubject] = useState("");

   const postQus = (e) => {
      e.preventDefault();
      var postQus = { qus: qus, subject: subject };
      console.log(postQus);
      axios
         .post("http://127.0.0.1:8000/api/postQus", postQus)
         .then((resp) => {
            const qus = resp.data;
            alert(qus);
            window.location.reload();
            setShowModal(false);
            Navigate("/student-question");
         })
         .catch((err) => {
            console.log(err);
         });
   };

   const [name1, setName1] = useState(() => {
      // getting stored value
      const saved = localStorage.getItem("name");
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
                        Question
                        {/* {name1.age} */}
                     </h1>
                     <MiniProfile />
                  </nav>

                  {/* {{--</haeder-component> --}} */}
                  <div className="flex flex-col space-y-10">
                     <div className="flex mt-5">
                        <div className="ml-auto">
                           <button
                              id="ask_qus_btn"
                              className="ml-auto cta_btn_base bg-purple w-fit"
                              onClick={askBtnAction}
                           >
                              Ask a question
                           </button>
                        </div>
                     </div>
                     {/* {{-- alart --}} */}
                     {/* @if(Session::has('posted'))
                    <div className="flex p-4 mb-4 text-lg  bg-[#E5FEE5] rounded-lg w-fit " role="alert">
                        <div className="text-[#27AE60]">
                          <span className="font-medium">Question posted successfully.</span>
                        </div>
                      </div>
                      @endif */}
                     {/* <!-- Ask Qus Start --> */}
                     <section>
                        <h3 className="header-1 mb-4">Answered questions</h3>
                        <AnsQus />
                        {/* <!-- Item -->
                                @foreach ($answeredQus as $data)
                                <a href="{{url('questionView/'.$data ->id)}}" className="w-full space-y-3 | col-span-4 |
                                     bg-white p-5 rounded-xl | cursor-pointer hover:shadow-md transition-shadow duration-300">
                                    <div className="flex space-x-5">
                                        <span
                                        className="text-purple bg-purple bg-opacity-10 h-min px-2 py-1 rounded font-medium text-lg"
                                            >Q</span
                                        >
                                        <p>
                                            {{ $data ->qus}}
                                        </p>
                                    </div>
                                    <div className="flex space-x-5">
                                        <span
                                            className="text-green bg-green bg-opacity-10 h-min px-2 py-1 rounded font-medium text-lg"
                                            >A</span
                                        >
                                        <p className="truncate">
                                            {{ $data ->ans}}
                                        </p>
                                    </div>
                                    <span className="flex pt-2 space-x-2">
                                        <span className="text-light_gray text-sm">
                                            Solver by {{$data->t_id}}
                                        </span>
                                        <img
                                            className="h-5 w-5"
                                            src="storage/ui-photos/dashboard/solved.png"
                                            alt=""
                                        />
                                    </span>

                            </a>
                                @endforeach */}
                        {/* <!-- Pagination --> */}
                        <div className="flex justify-end space-x-5 mt-5 items-center">
                           <img
                              className="h-4 w-4 cursor-pointer"
                              src="storage/ui-photos/nav-icons/dashboard/left-arrow.png"
                              alt=""
                           />
                           <div className="flex space-x-4">
                              <span className="px-2 py-1 border border-light_gray rounded-full text-sm cursor-pointer text-light_gray font-semibold hover:bg-purple hover:text-white hover:shadow transition-all duration-300">
                                 1
                              </span>
                              <span className="px-2 py-1 border border-light_gray rounded-full text-sm cursor-pointer text-light_gray font-semibold hover:bg-purple hover:text-white hover:shadow transition-all duration-300">
                                 2
                              </span>
                              <span className="px-2 py-1 border border-light_gray rounded-full text-sm cursor-pointer text-light_gray font-semibold hover:bg-purple hover:text-white hover:shadow transition-all duration-300">
                                 3
                              </span>
                           </div>
                           <img
                              className="h-4 w-4 cursor-pointer"
                              src="storage/ui-photos/nav-icons/dashboard/right-arrow.png"
                              alt=""
                           />
                        </div>
                        {/* <!-- Pagination End --> */}
                     </section>
                     {/* <!-- Ask Qus End --> */}

                     {/* <!-- Pending Qus Start --> */}
                     <section>
                        <h3 className="header-1 mb-4">Pending questions</h3>
                        <div className="grid grid-cols-12 gap-5">
                           {/* <!-- Item -->
                                @foreach ($pendingQus as $data )
                                <div
                                    className="w-full space-y-3 | col-span-4 | bg-white p-5 rounded-xl | cursor-pointer hover:shadow-md transition-shadow duration-300"
                                >
                                    <div className="flex space-x-5">
                                        <span
                                        className="text-purple bg-purple bg-opacity-10 h-min px-2 py-1 rounded font-medium text-lg"
                                            >Q</span
                                        >
                                        <p>
                                            {{ $data ->qus}}
                                        </p>
                                    </div>
                                </div>
                                @endforeach */}
                        </div>
                     </section>

                     {/* <!-- Pending Qus End --> */}
                  </div>
               </section>
            </div>
            {/* <!-- Modal --> */}
            {showModal && (
               <div
                  className={`fixed min-h-screen w-screen top-0 left-0 z-50 | backdrop-blur-sm bg-black/20  |
            justify-center items-center | transition-all duration-300 ease-in-out flex`}
               >
                  <div className="w-fit bg-white rounded-xl p-5 transition-shadow shadow | relative">
                     <div className="absolute top-5 right-5 ">
                        <button
                           className="hover:scale-125 transition-transform z-20"
                           onClick={cencleBtnAction}
                        >
                           <img
                              className="h-8 w-8"
                              src="storage/ui-photos/nav-icons/close.svg"
                              alt=""
                           />
                        </button>
                     </div>
                     <h6 className="text-center font-bold text-2xl py-7">
                        Ask Qustion
                     </h6>
                     <div className="bg-white p-5 rounded-xl w-[700px]">
                        <form
                           action="{{url('postQuestion')}}"
                           method="post"
                           enctype="multipart/form-data"
                        >
                           <textarea
                              placeholder="Type your question here"
                              className="w-full h-[250px] border-none"
                              name="question"
                              required
                              onChange={(e) => setQus(e.target.value)}
                           ></textarea>
                           <div className="w-fit ml-auto flex space-x-2">
                              <div>
                                 <div
                                    for="dropdown"
                                    className="text-light_gray rounded-2xl flex space-x-2 py-3 cursor-pointer items-center"
                                 >
                                    <img
                                       className="w-[20px] h-[20px]"
                                       src="storage/ui-photos/dropdown.png"
                                       alt=""
                                    />
                                    <select
                                       className="form-select form-select-sm appearance-none block px-2 py-1 text-sm font-normal
                                         text-light_gray bg-white bg-clip-padding bg-no-repeat rounded transition ease-in-out m-0
                                         focus:bg-white border-none focus:outline-none w-[100px]"
                                       name="subject"
                                       required
                                       onChange={(e) =>
                                          setSubject(e.target.value)
                                       }
                                    >
                                       <option value="">Subject </option>
                                       <option value="Math">Math </option>
                                       <option value="Physics">Physics </option>
                                       <option value="Chemistry">
                                          Chemistry{" "}
                                       </option>
                                       <option value="Biology">Biology </option>
                                       <option value="ICT">ICT </option>
                                       <option value="English">Englash </option>
                                       <option value="Bangla">Bangla </option>
                                    </select>
                                 </div>
                              </div>
                              <div>
                                 <label
                                    for="file-upload"
                                    className="text-light_gray rounded-2xl flex space-x-2 px-6 py-3 cursor-pointer items-center"
                                 >
                                    <img
                                       className="w-[20px] h-[20px]"
                                       src="storage/ui-photos/image.png"
                                       alt=""
                                    />
                                    <span> Add Image</span>
                                 </label>
                                 <input
                                    className="hidden"
                                    id="file-upload"
                                    type="file"
                                    name="qusPhoto"
                                 />
                              </div>

                              <button
                                 className="bg-purple text-white rounded-2xl flex space-x-2 px-6 py-3 items-center"
                                 type="submit"
                                 onClick={postQus}
                              >
                                 <img
                                    className="w-[20px] h-[20px]"
                                    src="storage/ui-photos/submit.png"
                                    alt=""
                                 />
                                 <span>Submit</span>
                              </button>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            )}
         </main>
         <script src="js/qusScript.js"></script>
      </body>
   );
};

export default Question;
