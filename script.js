/*=====NAV BAR HAMBURGER=====*/
let i=1;
  function afisare(){
    let humburger = document.getElementById("navhamburger");
    if(i==1){
      humburger.classList.add("activare_navHamburger");
      document.body.style.overflow = "hidden";
      i=2;
    }else if(i==2){
      humburger.classList.remove("activare_navHamburger");
      document.body.style.overflow = "auto";
      i=1;
    }
}

window.addEventListener('scroll', function change(){
  let navbar = document.getElementById("nav");
  if(window.scrollY >= 115){
    navbar.classList.add("navOn");
  }else if(window.scrollY < 115){
    navbar.classList.remove("navOn");
  }
});