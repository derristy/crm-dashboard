let dropdown = document.querySelectorAll(".dropdown");

dropdown.forEach(element => {
    element.addEventListener("click", (event) => {
        document.querySelectorAll(".dropdown.active").forEach((element) => {
            if(element != event.target.closest(".dropdown.active")){
                element.classList.remove("active");
            }
        });
        element.classList.toggle("active");
    });
    
    element.querySelector(".dropdown-menu").addEventListener("click", (event) => {
        event.stopPropagation();
    });
});