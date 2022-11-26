import "../Student.css";

const Summery = () => {
    return (
        <div class="grid grid-cols-3 | gap-10">
            {/* <!--  --> */}
            <div class="p-5 rounded-xl bg-blue__ bg-opacity-25">
                <div class="flex">
                    <span class="flex-1 font-bold text-[32px]">{"10 "}</span>
                    <figure class="h-[40px] w-[40px] bg-blue__ rounded-full p-2">
                        <img
                            src="storage/ui-photos/dashboard/Double Check.png"
                            alt=""
                        />
                    </figure>
                </div>
                <span class="text-light_gray text-2xl">Posted question</span>
            </div>
            <div class="p-5 rounded-xl bg-green bg-opacity-25">
                <div class="flex">
                    <span class="flex-1 font-bold text-[32px]">10</span>
                    <figure class="h-[40px] w-[40px] bg-green rounded-full p-2">
                        <img
                            src="storage/ui-photos/dashboard/design.png"
                            alt=""
                        />
                    </figure>
                </div>
                <span class="text-light_gray text-2xl">Answered question</span>
            </div>
            <div class="p-5 rounded-xl bg-[#FCAB5E] bg-opacity-25">
                <div class="flex">
                    <span class="flex-1 font-bold text-[32px]">50</span>
                    <figure class="h-[40px] w-[40px] bg-[#FCAB5E] rounded-full p-2">
                        <img
                            src="storage/ui-photos/dashboard/Help.png"
                            alt=""
                        />
                    </figure>
                </div>
                <span class="text-light_gray text-2xl">Pending question</span>
            </div>
            {/* <!--  --> */}
        </div>
    );
};

export default Summery;
