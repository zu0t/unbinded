class e extends HTMLElement {
    headerEl;
    mobileButtonEl;
    menuOpen;
    constructor() {
        super(),
        this.headerEl = document.getElementById("main-header"),
        this.mobileButtonEl = this.querySelector("button"),
        this.menuOpen = !1,
        this.mobileButtonEl.addEventListener("click", this.toggleMobileMenu)
    }
    toggleMobileMenu = ()=>{
        this.headerEl.classList.toggle("menu-open"),
        this.menuOpen = !this.menuOpen,
        this.mobileButtonEl.setAttribute("aria-expanded", this.menuOpen.toString())
    }
}
customElements.define("nav-button", e);
