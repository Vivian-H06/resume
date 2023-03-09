function scrollToTop(){
  window.scrollTo({top: 0, behavior: 'smooth'});
}
const mobileWrapper = document.getElementById("mobile-wrapper");
const mobileWrapperOne = document.getElementById("mobile-wrapper-one");
const mobileWrapperTwo = document.getElementById("mobile-wrapper-two");

const rLevel = document.getElementById("r-level");
const rLevelOne = document.getElementById("r-level-one");
const rLevelTwo = document.getElementById("r-level-two");

const bounceObj = document.getElementById("bounceObj");

window.onscroll = function (e) {
// called when the window is scrolled.
  if(mobileWrapper != null){
    updateStormMobileBackground();
  }
  if(rLevel != null){
    updateRLevelBackground();
  }
  if(bounceObj != null){
    updateBounceObj();
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

function updateRLevelBackground(){
  if(rLevel != null){
    var top  = window.scrollY + window.innerHeight;
    var position = rLevel.getBoundingClientRect();
    var wrapperTop = position.top + window.scrollY + 200;
    var wrapperBottom = wrapperTop + 530;
    if(top >= wrapperTop && wrapperBottom >= top){
      var index = top - wrapperTop;
      rLevelOne.style.setProperty('background-position-x', (-1095 + index * 0.28301886792) + "px");
      rLevelTwo.style.setProperty('background-position-x', (-225 - index) + "px");
    }
  }
}

function updateBounceObj(){
  if(bounceObj != null){
    var top  = window.scrollY + window.innerHeight;
    var position = bounceObj.getBoundingClientRect();
    var wrapperTop = position.top + window.scrollY + (window.innerHeight/2) + (position.height/2);
    //console.log("top:",top,"wrapperTop:",wrapperTop);
    if(top >= wrapperTop){
      bounceObj.classList.add("bounceObj");
    }else{
      bounceObj.classList.remove("bounceObj");
    }
  }
}
