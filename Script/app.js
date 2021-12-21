let navbar = document.getElementById("nav");
let toTop = document.querySelector(".toTop");

let navControl = new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction) {
        console.log(direction)

        if (direction == "down"){
            navbar.classList.add("shadow");
            navbar.classList.add("animate__slideInDown")
            toTop.classList.remove("animate__fadeOutDown")
            toTop.classList.add("animate__fadeInUp")
            toTop.style.display = "block"
        }
        else {
            navbar.classList.remove("shadow");
            navbar.classList.remove("animate__slideInDown");
            /*toTop.style.display = "none"*/
            toTop.classList.remove("animate__slideInUp")
            toTop.classList.add("animate__fadeOutDown")
        }
    },
    offset: '75%'
})

ScrollReveal({
    origin : "top",
    distance: "30px",
    duration:1500,
    reset:true
}).reveal(".content",{
    interval:200
})

ScrollReveal({
    origin : "left",
    distance: "30px",
    duration:1500,
    reset:true
}).reveal(".left",{
    interval:200
})

ScrollReveal({
    origin : "right",
    distance: "30px",
    duration:1500,
    reset:true
}).reveal(".right",{
    interval:200
})