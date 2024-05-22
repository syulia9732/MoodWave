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

const pickr = Pickr.create({
  el: '.color-picker',
  theme: 'classic', // or 'monolith', or 'nano'

  swatches: [
      'rgba(244, 67, 54, 1)',
      'rgba(233, 30, 99, 1)',
      'rgba(156, 39, 176, 1)',
      'rgba(103, 58, 183, 1)',
      'rgba(63, 81, 181, 1)',
      'rgba(33, 150, 243, 1)',
      'rgba(3, 169, 244, 1)',
      'rgba(0, 188, 212, 1)',
      'rgba(0, 150, 136, 1)',
      'rgba(76, 175, 80, 1)',
      'rgba(139, 195, 74, 1)',
      'rgba(205, 220, 57, 1)',
      'rgba(255, 235, 59, 1)',
      'rgba(255, 193, 7, 1)'
  ],

  components: {

      // Main components
      preview: true,
      opacity: true,
      hue: true,

      // Input / output Options
      interaction: {
          hex: true,
          rgba: true,
          hsla: true,
          hsva: true,
          cmyk: false,
          input: true,
          clear: true,
          save: true
      }
  }
});

const panel = document.querySelector(".box-media");
pickr.on('change', (...args) => {
  let color = args[0].toRGBA();
  console.log(color);
  this.panel.style.backgroundColor = `rgba(${color[0]},${color[1]},${color[2]},${color[3]})`
});