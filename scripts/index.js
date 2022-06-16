function displayMenu() {
    const menu = document.getElementById("primary-navigation");
    const state = document.querySelector(".mobile-nav-toggle");

    menu.classList.toggle("primary-navigation-toggle");

    if(state.getAttribute("data-visible") === "false") {

        state.style = "background-image: url(../assets/icon-close.svg);";
        state.setAttribute("data-visible", true);
        state.setAttribute("aria-expanded", true);
    } else {

        state.style = "background-image: url(../assets/icon-hamburger.svg);";
        state.setAttribute("data-visible", false);
        state.setAttribute("aria-expanded", false);
    }
}
