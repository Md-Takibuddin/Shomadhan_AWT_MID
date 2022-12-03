class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
             <nav class="flex">
                    <h1 class="flex-1 | text-purple text-[38px] font-bold">
                        Dashboard
                    </h1>
                    <div class="flex space-x-3">
                        <div class="flex flex-col">
                            <span class="text-xl font-semibold"
                                >Md Takib Uddin</span
                            >
                            <span
                                class="text-right text-light_gray font-medium text-sm"
                                >Student</span
                            >
                        </div>
                        <img
                            class="h-[65px] w-[65px] rounded-full"
                            src="{{asset("$photo")}}"
                            alt=""
                        />
                    </div>
                </nav>
            `;
    }
}

customElements.define("haeder-component", Header);
