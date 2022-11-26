import "../Student.css";

const Notes = () => {
    return (
        <section class="w-full">
            <h3 class="header-1 mb-4">Notes</h3>

            {/* <!-- Container --> */}
            <div class="w-full | p-5 rounded-xl bg-white | flex flex-col space-y-5">
                {/* <!-- Item --> */}
                <div class="grid grid-cols-12 w-full">
                    <img
                        class="col-span-1 h-[60px] w-[60px] rounded-xl"
                        src="storage/ui-photos/dashboard/notes/Group 54.png"
                        alt=""
                    />
                    <div class="col-span-11 | flex flex-col justify-center">
                        <span class="font-medium text-xl">
                            Math 2 - Chapter 5
                        </span>
                        <span class="text-light_gray text-sm">
                            Uploaded 10 Sep, 2022
                        </span>
                    </div>
                </div>

                {/* <!-- Item --> */}
                <div class="grid grid-cols-12 w-full">
                    <img
                        class="col-span-1 h-[60px] w-[60px] rounded-xl"
                        src="storage/ui-photos/dashboard/notes/Group 55.png"
                        alt=""
                    />
                    <div class="col-span-11 | flex flex-col justify-center">
                        <span class="font-medium text-xl">
                            Physics 1 - Chapter 2
                        </span>
                        <span class="text-light_gray text-sm">
                            Uploaded 10 Sep, 2022
                        </span>
                    </div>
                </div>
                {/* <!-- Item --> */}
                <div class="grid grid-cols-12 w-full">
                    <img
                        class="col-span-1 h-[60px] w-[60px] rounded-xl"
                        src="storage/ui-photos/dashboard/notes/Group 56.png"
                        alt=""
                    />
                    <div class="col-span-11 | flex flex-col justify-center">
                        <span class="font-medium text-xl">
                            Chemistry 2 - Chapter 6
                        </span>
                        <span class="text-light_gray text-sm">
                            Uploaded 10 Sep, 2022
                        </span>
                    </div>
                </div>
                {/* <!-- Item --> */}
                <div class="grid grid-cols-12 w-full">
                    <img
                        class="col-span-1 h-[60px] w-[60px] rounded-xl"
                        src="storage/ui-photos/dashboard/notes/Group 54.png"
                        alt=""
                    />
                    <div class="col-span-11 | flex flex-col justify-center">
                        <span class="font-medium text-xl">
                            Math 2 - Chapter 5
                        </span>
                        <span class="text-light_gray text-sm">
                            Uploaded 10 Sep, 2022
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Notes;
