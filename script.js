function myFunction() {
    var links = document.getElementById("mobileLinks");
    if (links.style.display === "block") {
        links.style.display = "none";
        
    } else {
      links.style.display = "block";
      links.style.transform = 'translate(0, 0)';
    }
}

const hamMenu = document.querySelector('.hamburger-menu');
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
});

const mobileMenu = document.querySelector("#mobileLinks");
const mobileMenuBtn = document.querySelector(".hamburger-menu");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenuBtn.classList.toggle("active-menu-btn");
    mobileMenu.classList.toggle("slide-out");
    mobileMenu.classList.toggle("slide-in");
    if (mobileMenu.classList.contains("slide-out")) {
      setTimeout(() => {
        mobileMenu.classList.add("display-none");
      }, 1000);
    } else {
      mobileMenu.classList.remove("display-none");
    }
});
  
window.addEventListener("resize", () => {
    if (window.innerWidth > 750) {
      mobileMenu.classList.add("slide-out");
      mobileMenu.classList.remove("slide-in");
      setTimeout(() => {
        mobileMenu.classList.add("display-none");
      }, 1000);
    }
});