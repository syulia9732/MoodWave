function myFunction() {
    if (mobileMenu.style.display === "block") {        //나와있으면
        mobileMenu.style.display = "none";             //없애고
    } else {                                           //꺼내고
      mobileMenu.style.transform = 'translate(0, 0)';  //위치조정
    }
}

const hamMenu = document.querySelector('.hamburger-menu');
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
});

const mobileMenu = document.querySelector("#mobileLinks");
const mobileMenuBtn = document.querySelector(".hamburger-menu");
const mobileMenuBg = document.querySelector(".bg-overlay");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("slide-out");
    mobileMenu.classList.toggle("slide-in");
    if (mobileMenu.classList.contains("slide-out")) { //있으면
      
        mobileMenuBg.classList.add("display-none");
      setTimeout(() => {
        mobileMenu.classList.add("display-none");     //없애고
      }, 500);
    } else {                                          //없으면
      mobileMenu.classList.remove("display-none");   //생기게
      mobileMenuBg.classList.remove("display-none");

    }
});
  
window.addEventListener("resize", () => {
    if (window.innerWidth = 834) {
      mobileMenu.classList.add("slide-out");
      mobileMenu.classList.remove("slide-in");
      mobileMenuBg.classList.add("display-none");

      setTimeout(() => {
        mobileMenu.classList.add("display-none");
        hamMenu.classList.remove('active');
      }, 300);
    }
    else{
      mobileMenu.classList.remove("display-none");
    }
});

// box
function updateScreens() {
  $('.screen').removeClass('active').eq(currentIndex).addClass('active');
  $('.dot').removeClass('active').eq(currentIndex).addClass('active');
  if (currentIndex === totalScreens - 1) {
    $('.finish').removeAttr('disabled');
  } else {
    $('.finish').attr('disabled', 'disabled');
  }
}

//color background
// const box = document.querySelector(".box");
function colorSelected (element) {
  box.style.background = element.value
}