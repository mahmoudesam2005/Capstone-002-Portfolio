let bar = document.querySelector(".bar");
let x = document.querySelector(".close");
let ul = document.querySelector("nav ul");
let li = document.querySelector("nav ul li");
let topBtn = document.querySelector(".top");


// Control The Menu


bar.addEventListener("click", () => {
    ul.classList.add("show-left");
    bar.classList.add("hide");
    x.classList.add("show");
})

x.addEventListener("click", () => {
    ul.classList.remove("show-left");
    bar.classList.remove("hide");
    x.classList.remove("show");
})

// Control The Top Button

topBtn.classList.add("n-hide");

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 500) {
        topBtn.classList.remove("n-hide");
    }
    else {
        topBtn.classList.add("n-hide");
    }
})

function goTop() {
    window.scrollTo(
        {
            top: 0,
            left: 0,
            behavior: "smooth"
        }
    )
}

topBtn.addEventListener("click", goTop);

