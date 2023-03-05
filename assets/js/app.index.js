function scrollToTop(){
  window.scrollTo({top: 0, behavior: 'smooth'});
}
const mobileWrapper = document.getElementById("mobile-wrapper");
const mobileWrapperOne = document.getElementById("mobile-wrapper-one");
const mobileWrapperTwo = document.getElementById("mobile-wrapper-two");

window.onscroll = function (e) {
// called when the window is scrolled.
  if(mobileWrapper != null){
    updateStormMobileBackground();
  }
}

function updateStormMobileBackground(){
  if(mobileWrapper != null){
    var top  = window.scrollY + window.innerHeight;
    var position = mobileWrapper.getBoundingClientRect();
    var wrapperTop = position.top + window.scrollY;
    if(top >= wrapperTop){
      var index = top - wrapperTop;
      mobileWrapperOne.style.transform = "translate(-" + (95+index) + "px)";
      mobileWrapperTwo.style.transform = "translate(-" + (120+index) + "px)";
    }
  }
}
