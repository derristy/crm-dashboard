let dropdown = document.querySelectorAll(".dropdown");

dropdown.forEach(element => {
    element.addEventListener("click", (event) => {
        if(document.querySelectorAll(".dropdown.active").length >= 1){
            dropdown.forEach(element => {
                element.classList.remove("active");
            });
        }
        element.classList.toggle("active");
    });
    
    element.querySelector(".dropdown-menu").addEventListener("click", (event) => {
        event.stopPropagation();
    });
});