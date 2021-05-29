document.addEventListener("DOMContentLoaded", () =>{
    const nav = document.querySelector(".nav");

    document.querySelector("#btnNav").addEventListener("click", () => {
        nav.classList.add("nav_open");
    });

    document.querySelector(".nav_overlay").addEventListener("click", () => {
        nav.classList.remove("nav_open");
    });
});
