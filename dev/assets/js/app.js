$(document).ready(function () {
    $('#table').DataTable({
        lengthChange: false,
        pageLength: 8
    });
});

let dropdown = document.querySelectorAll(".dropdown");
let toggler = document.querySelector(".toggler");
let sidemenu = document.querySelector(".sidemenu");
let dropdownLink = document.querySelectorAll(".dropdown-menu .dropdown-link");

dropdown.forEach(element => {
    element.addEventListener("click", (event) => {
        document.querySelectorAll(".dropdown.active").forEach((element) => {
            if(element != event.target.closest(".dropdown.active")){
                element.classList.remove("active");
            }
        });
        element.classList.toggle("active");
    });
});

dropdownLink.forEach(element => {
    element.addEventListener("click", (event) => {
        event.stopPropagation();
    });
});

toggler.addEventListener("click", (event) => {
    sidemenu.classList.toggle("show");
    toggler.querySelector(".toggler-icon").classList.toggle("show");
})