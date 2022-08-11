document.addEventListener("scroll" , ()=>{
    let headerNav = document.querySelector(".navbar");
    if (document.documentElement.scrollTop > 350) {
        headerNav.classList.add("active-header");
        headerNav.classList.remove("container");
    }
    else {
        headerNav.classList.remove("active-header");
        headerNav.classList.add("container");
    }
})



const upper = document.querySelector("#upper");
upper.addEventListener("click", () => {
    window.scrollTo({ top: 0 })
})


const klik = document.querySelectorAll("#open");
let x = document.querySelector("#submenu")

// klik.addEventListener("click" , () => {
//     if (x.style.display === "none") {
//         x.style.display = "block"
//     }
//     else {
//         x.style.display = "none";
//     }
// })