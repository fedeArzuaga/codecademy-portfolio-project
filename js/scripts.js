const menuIcon = document.querySelector("#menu-icon");
const canvasMenu = document.querySelector("#canvas-menu")

menuIcon.addEventListener("click", e => {
    e.preventDefault();
    if (canvasMenu.classList.contains("tm-menu-mobile-canvas-container-shown")) {
        canvasMenu.classList.remove("tm-menu-mobile-canvas-container-shown")
    } else {
        canvasMenu.classList.add("tm-menu-mobile-canvas-container-shown")
    }
})