document.addEventListener("DOMContentLoaded", () =>{
    const nav = document.querySelector(".nav");
    const pc = document.querySelector(".pc");
    const mobil = document.querySelector(".mobil");
    var mediaQueryList = window.matchMedia('(max-width: 720px)');

    document.querySelector("#btnNav").addEventListener("click", () => {
        nav.classList.add("nav_open");
    });

    document.querySelector(".nav_overlay").addEventListener("click", () => {
        nav.classList.remove("nav_open");
    });

    window.addEventListener('load', (event) => {
        media(mediaQueryList);
    });

    function media(e){
        if(e.matches){
            pc.classList.add("hide");
            mobil.classList.remove("hide");

        }else{
            pc.classList.remove("hide");
            mobil.classList.add("hide");
        }
    }

    mediaQueryList.addListener(media);
});