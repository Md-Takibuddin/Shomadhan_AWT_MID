class Sidebar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = ``;
    }
}

customElements.define("sidebar-component", Sidebar);
