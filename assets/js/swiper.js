const swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: false,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

const cart = document.querySelectorAll("#Add")
let result = 0
for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener("click", () => {
        result++
        document.querySelector("#shop").innerHTML = result
        alert("mehsul sebete elave olundu :)")
    })
}