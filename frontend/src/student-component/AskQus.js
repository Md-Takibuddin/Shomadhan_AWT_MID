import "../Student.css";

const AskQus = () => {
    return (
        <section class="w-full">
            <h3 class="header-1 mb-4">Ask Question</h3>

            <div class="bg-white p-5 rounded-xl">
                <form
                    action="{{url('postQuestion')}}"
                    method="post"
                    enctype="multipart/form-data"
                >
                    <textarea
                        placeholder="Type your qustion here"
                        class="w-full h-[250px] border-none"
                        name="question"
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
                                    class="form-select form-select-sm appearance-none block px-2 py-1 text-sm font-normal text-light_gray
                                                    bg-white bg-clip-padding bg-no-repeat rounded transition ease-in-out m-0
                                                    focus:bg-white border-none focus:outline-none w-[100px]"
                                    name="subject"
                                >
                                    <option value="">Subject</option>
                                    <option value="Math">Math</option>
                                    <option value="Physics">Physics</option>
                                    <option value="Chemistry">Chemistry</option>
                                    <option value="Biology">Biology</option>
                                    <option value="ICT">ICT</option>
                                    <option value="English">Englash</option>
                                    <option value="Bangla">Bangla</option>
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
                                type="file"
                                class="hidden"
                                name="qusPhoto"
                                id="file-upload"
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
        </section>
    );
};

export default AskQus;
