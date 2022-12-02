/* eslint-disable jsx-a11y/img-redundant-alt */
import "../Student.css";
import MiniProfile from "./MiniProfile";

const TopBar = () => {
    return (
        <div>
            <nav class="flex">
                <h1 class="flex-1 | text-purple text-[38px] font-bold">
                    Dashboard
                </h1>
                <MiniProfile />
            </nav>
        </div>
    );
};

export default TopBar;
