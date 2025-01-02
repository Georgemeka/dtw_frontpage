// Toggle the mobile navigation menu
document.querySelector(".mobile-nav__toggle").addEventListener("click", () => {
    const navList = document.querySelector(".mobile-nav__list");
    navList.classList.toggle("active");
});
