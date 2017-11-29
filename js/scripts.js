(function () {
    console.log("hello");
    let menuButton = document.getElementById("menu");
    let navMenu = document.getElementById("nav-menu");

    menuButton.addEventListener("click", toggleMenu);

    let toggle = false; // hidden at first
    function toggleMenu() {
        console.log(toggle);
        if (toggle) { // true: it's visible
            navMenu.classList.remove("show-menu"), // hide it
            toggle = false
            console.log(`if true: ${toggle}`);
        }
        else { // false: it's hidden
            navMenu.classList.add("show-menu"), // show it
            toggle = true
            console.log(`if false: ${toggle}`);
        }
    }

})();