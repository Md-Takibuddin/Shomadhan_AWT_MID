/* eslint-disable jsx-a11y/img-redundant-alt */
import "../Student.css";
import MiniProfile from "./MiniProfile";
import SideBar from "./SideBar";

// const modalContainer = document.querySelector("#modal");
// const askQusBtn = document.querySelector("#ask_qus_btn");
// const cancleBtn = document.querySelector("#close_qus_modal");

// askQusBtn.addEventListener("click", () => {
//     modalContainer.style.display = "flex";
// });

// cancleBtn.addEventListener("click", () => {
//     modalContainer.style.display = "";
//     modalContainer.style.display = "hidden";
// });

const Question = () => {
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
                                Question
                            </h1>
                            <MiniProfile />
                        </nav>

                        {/* {{--</haeder-component> --}} */}
                        <div class="flex flex-col space-y-10">
                            <div class="flex mt-5">
                                <div class="ml-auto">
                                    <button
                                        id="ask_qus_btn"
                                        class="ml-auto cta_btn_base bg-purple w-fit"
                                    >
                                        Ask a question
                                    </button>
                                </div>
                            </div>
                            {/* {{-- alart --}} */}
                            {/* @if(Session::has('posted'))
                    <div class="flex p-4 mb-4 text-lg  bg-[#E5FEE5] rounded-lg w-fit " role="alert">
                        <div class="text-[#27AE60]">
                          <span class="font-medium">Question posted successfully.</span>
                        </div>
                      </div>
                      @endif */}
                            {/* <!-- Ask Qus Start --> */}
                            <section>
                                <h3 class="header-1 mb-4">
                                    Answered questions
                                </h3>
                                <div class="grid grid-cols-12 gap-5">
                                    {/* <!-- Item -->
                                @foreach ($answeredQus as $data)
                                <a href="{{url('questionView/'.$data ->id)}}" class="w-full space-y-3 | col-span-4 |
                                     bg-white p-5 rounded-xl | cursor-pointer hover:shadow-md transition-shadow duration-300">
                                    <div class="flex space-x-5">
                                        <span
                                        class="text-purple bg-purple bg-opacity-10 h-min px-2 py-1 rounded font-medium text-lg"
                                            >Q</span
                                        >
                                        <p>
                                            {{ $data ->qus}}
                                        </p>
                                    </div>
                                    <div class="flex space-x-5">
                                        <span
                                            class="text-green bg-green bg-opacity-10 h-min px-2 py-1 rounded font-medium text-lg"
                                            >A</span
                                        >
                                        <p class="truncate">
                                            {{ $data ->ans}}
                                        </p>
                                    </div>
                                    <span class="flex pt-2 space-x-2">
                                        <span class="text-light_gray text-sm">
                                            Solver by {{$data->t_id}}
                                        </span>
                                        <img
                                            class="h-5 w-5"
                                            src="storage/ui-photos/dashboard/solved.png"
                                            alt=""
                                        />
                                    </span>

                            </a>
                                @endforeach */}
                                </div>
                                {/* <!-- Pagination --> */}
                                <div class="flex justify-end space-x-5 mt-5 items-center">
                                    <img
                                        class="h-4 w-4 cursor-pointer"
                                        src="storage/ui-photos/nav-icons/dashboard/left-arrow.png"
                                        alt=""
                                    />
                                    <div class="flex space-x-4">
                                        <span class="px-2 py-1 border border-light_gray rounded-full text-sm cursor-pointer text-light_gray font-semibold hover:bg-purple hover:text-white hover:shadow transition-all duration-300">
                                            1
                                        </span>
                                        <span class="px-2 py-1 border border-light_gray rounded-full text-sm cursor-pointer text-light_gray font-semibold hover:bg-purple hover:text-white hover:shadow transition-all duration-300">
                                            2
                                        </span>
                                        <span class="px-2 py-1 border border-light_gray rounded-full text-sm cursor-pointer text-light_gray font-semibold hover:bg-purple hover:text-white hover:shadow transition-all duration-300">
                                            3
                                        </span>
                                    </div>
                                    <img
                                        class="h-4 w-4 cursor-pointer"
                                        src="storage/ui-photos/nav-icons/dashboard/right-arrow.png"
                                        alt=""
                                    />
                                </div>
                                {/* <!-- Pagination End --> */}
                            </section>
                            {/* <!-- Ask Qus End --> */}

                            {/* <!-- Pending Qus Start --> */}
                            <section>
                                <h3 class="header-1 mb-4">Pending questions</h3>
                                <div class="grid grid-cols-12 gap-5">
                                    {/* <!-- Item -->
                                @foreach ($pendingQus as $data )
                                <div
                                    class="w-full space-y-3 | col-span-4 | bg-white p-5 rounded-xl | cursor-pointer hover:shadow-md transition-shadow duration-300"
                                >
                                    <div class="flex space-x-5">
                                        <span
                                        class="text-purple bg-purple bg-opacity-10 h-min px-2 py-1 rounded font-medium text-lg"
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
                <div
                    id="modal"
                    class="fixed min-h-screen w-screen top-0 left-0 z-50 | backdrop-blur-sm bg-black/20  |
                justify-center items-center | hidden | transition-all duration-300 ease-in-out"
                >
                    <div class="w-fit bg-white rounded-xl p-5 transition-shadow shadow | relative">
                        <div class="absolute top-5 right-5 ">
                            <button
                                id="close_qus_modal"
                                class="hover:scale-125 transition-transform z-20"
                            >
                                <img
                                    class="h-8 w-8"
                                    src="storage/ui-photos/nav-icons/close.svg"
                                    alt=""
                                />
                            </button>
                        </div>
                        <h6 class="text-center font-bold text-2xl py-7">
                            Ask Qustion
                        </h6>
                        <div class="bg-white p-5 rounded-xl w-[700px]">
                            <form
                                action="{{url('postQuestion')}}"
                                method="post"
                                enctype="multipart/form-data"
                            >
                                @csrf
                                <textarea
                                    placeholder="Type your qustion here"
                                    class="w-full h-[250px] border-none"
                                    name="question"
                                    required
                                ></textarea>
                                <div class="w-fit ml-auto flex space-x-2">
                                    <div>
                                        <div
                                            for="dropdown"
                                            class="text-light_gray rounded-2xl flex space-x-2 py-3 cursor-pointer items-center"
                                        >
                                            <img
                                                class="w-[20px] h-[20px]"
                                                src="storage/ui-photos/dropdown.png"
                                                alt=""
                                            />
                                            <select
                                                class="form-select form-select-sm appearance-none block px-2 py-1 text-sm font-normal
                                             text-light_gray bg-white bg-clip-padding bg-no-repeat rounded transition ease-in-out m-0
                                             focus:bg-white border-none focus:outline-none w-[100px]"
                                                name="subject"
                                                required
                                            >
                                                <option value="">
                                                    Subject{" "}
                                                </option>
                                                <option value="Math">
                                                    Math{" "}
                                                </option>
                                                <option value="Physics">
                                                    Physics{" "}
                                                </option>
                                                <option value="Chemistry">
                                                    Chemistry{" "}
                                                </option>
                                                <option value="Biology">
                                                    Biology{" "}
                                                </option>
                                                <option value="ICT">
                                                    ICT{" "}
                                                </option>
                                                <option value="English">
                                                    Englash{" "}
                                                </option>
                                                <option value="Bangla">
                                                    Bangla{" "}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            for="file-upload"
                                            class="text-light_gray rounded-2xl flex space-x-2 px-6 py-3 cursor-pointer items-center"
                                        >
                                            <img
                                                class="w-[20px] h-[20px]"
                                                src="storage/ui-photos/image.png"
                                                alt=""
                                            />
                                            <span> Add Image</span>
                                        </label>
                                        <input
                                            class="hidden"
                                            id="file-upload"
                                            type="file"
                                            name="qusPhoto"
                                        />
                                    </div>

                                    <button
                                        class="bg-purple text-white rounded-2xl flex space-x-2 px-6 py-3 items-center"
                                        type="submit"
                                    >
                                        <img
                                            class="w-[20px] h-[20px]"
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
            </main>
            <script src="js/qusScript.js"></script>
        </body>
    );
};

export default Question;
