let links = document.querySelectorAll('a[href^="#"]');;
for (let i = 0; i < links.length; i++) {
    const link = links[i];
    link.onclick = function (e) {
        e.preventDefault();
        let src = link.getAttribute('href');
        document.querySelector(src).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}
const goTopBtn = document.querySelector(".btnTop");

window.addEventListener("scroll", function () {
    if (window.pageYOffset > document.documentElement.clientHeight) {
        goTopBtn.classList.add("btnTop-active");
    } else {
        goTopBtn.classList.remove("btnTop-active");
    }
});
