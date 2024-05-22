console.log("Website Pemilu")
var swiper = new Swiper(".slide-content",{
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup:3 ,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

document.getElementById("myButton").addEventListener("click", function() {
    window.location.href = "statistik.html"; // Ganti dengan URL halaman yang ingin dibuka
});