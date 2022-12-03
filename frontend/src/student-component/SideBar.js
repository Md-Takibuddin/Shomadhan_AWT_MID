/* eslint-disable jsx-a11y/img-redundant-alt */
import "../Student.css";
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <aside className="col-span-2 | bg-white">
            <div className="sticky top-0 left-0 h-screen flex flex-col overflow-x-auto | p-4">
                <figure className="h-[70px] w-full">
                    <img
                        className="h-full w-full object-contain"
                        src="storage/ui-photos/logo.png"
                        alt="logo"
                    />
                </figure>

                <nav className="flex flex-col space-y-4 mt-10">
                    <Link to={"/student-dashboard"} className="nav_item">
                        <img
                            src="storage/ui-photos/nav-icons/home.png"
                            alt="nav-icon"
                        />
                        <span>Dashboard</span>
                    </Link>

                    <Link to={"/student-question"} className="nav_item">
                        <img
                            src="storage/ui-photos/nav-icons/qus.png"
                            alt="nav-icon"
                        />
                        <span>Questions</span>
                    </Link>

                    <Link to={"/student-appointment"} className="nav_item">
                        <img
                            src="storage/ui-photos/nav-icons/appointment.png"
                            alt="nav-icon"
                        />
                        <span>Appointment</span>
                    </Link>

                    <Link to={"/student-settings"} className="nav_item">
                        <img
                            src="storage/ui-photos/nav-icons/settings.png"
                            alt="nav-icon"
                        />
                        <span>Settings</span>
                    </Link>

                    <Link to={"/student-login"} className="nav_item">
                        <img
                            src="storage/ui-photos/nav-icons/log-out.png"
                            alt="nav-icon"
                        />
                        <span>Log out</span>
                    </Link>
                </nav>
                <section className="relative | flex flex-col space-y-7 | mt-auto px-5 pb-5">
                    <div className="relative | z-10 flex flex-col space-y-4">
                        <figure>
                            <img
                                src="storage/ui-photos/subscription.png"
                                alt=""
                            />
                        </figure>
                        <h6 className="text-center font-bold text-xl">
                            Premium Subscription
                        </h6>
                        <p className="text-center text-sm">
                            Be a Premium user and get access to new features
                        </p>
                        <button className="bg-purple py-3 px-5 rounded-xl text-white font-semibold hover:shadow-xl transition-all ease-in-out duration-300">
                            Upgrade Now
                        </button>
                    </div>
                    <div className="absolute h-[60%] w-full left-0 bottom-0 z-0 | bg-purple bg-opacity-60 rounded-xl"></div>
                </section>
            </div>
        </aside>
    );
};

export default SideBar;
