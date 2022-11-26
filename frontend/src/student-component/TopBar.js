/* eslint-disable jsx-a11y/img-redundant-alt */
import "../Student.css";

const TopBar = () => {
    return (
        <div>
            <nav class="flex">
                <h1 class="flex-1 | text-purple text-[38px] font-bold">
                    Dashboard
                </h1>
                <div class="flex space-x-3">
                    <div class="flex flex-col">
                        <span class="text-xl font-semibold">Md Takib</span>
                        <span class="text-right text-light_gray font-medium text-sm">
                            Student
                        </span>
                    </div>
                    <img class="h-[65px] w-[65px] rounded-full" src="" alt="" />
                </div>
            </nav>
        </div>
    );
};

export default TopBar;
