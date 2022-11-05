class Sidebar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
                <div class="sticky top-0 left-0 h-screen flex flex-col overflow-x-auto | p-4">
                    <figure class="h-[70px] w-full">
                        <img
                            class="h-full w-full object-contain"
                            src="../../../public/logo.png"
                            alt="logo"
                        />
                    </figure>

                    <nav class="flex flex-col space-y-4 mt-10">
                        <a class="nav_item" href="">
                            <img
                                src="../../../public/nav-icons/home.png"
                                alt="nav-icon"
                            />
                            <span>Dashboard</span>
                        </a>
                        <a class="nav_item" href="">
                            <img
                                src="../../../public/nav-icons/qus.png"
                                alt="nav-icon"
                            />
                            <span>Questions</span>
                        </a>
                        <a class="nav_item" href="">
                            <img
                                src="../../../public/nav-icons/appointment.png"
                                alt="nav-icon"
                            />
                            <span>Appointment</span>
                        </a>
                        <a class="nav_item" href="">
                            <img
                                src="../../../public/nav-icons/settings.png"
                                alt="nav-icon"
                            />
                            <span>Settings</span>
                        </a>
                        <a class="nav_item" href="">
                            <img
                                src="../../../public/nav-icons/log-out.png"
                                alt="nav-icon"
                            />
                            <span>Log out</span>
                        </a>
                    </nav>
                    <section
                        class="relative | flex flex-col space-y-7 | mt-auto px-5 pb-5"
                    >
                        <div class="relative | z-10 flex flex-col space-y-4">
                            <figure>
                                <img
                                    src="../../../public/subscription.png"
                                    alt=""
                                />
                            </figure>
                            <h6 class="text-center font-bold text-xl">
                                Premium Subscription
                            </h6>
                            <p class="text-center text-sm">
                                Be a Premium user and get access to new features
                            </p>
                            <button
                                class="bg-purple py-3 px-5 rounded-xl text-white font-semibold hover:shadow-xl transition-all ease-in-out duration-300"
                            >
                                Upgrade Now
                            </button>
                        </div>
                        <div
                            class="absolute h-[60%] w-full left-0 bottom-0 z-0 | bg-purple bg-opacity-60 rounded-xl"
                        ></div>
                    </section>
                </div>
            `;
    }
}

customElements.define("sidebar-component", Sidebar);
