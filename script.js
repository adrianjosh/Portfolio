history.scrollRestoration = "manual";

  const removeAnchorFormURL = () => {
    setTimeout(() => {
      window.history.replaceState({}, "", window.location.href.split("#")[0]);
    }, 100);
  };

//Hide and Show Desktop Header
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("hide-header").style.top = "0";
  } else {
    document.getElementById("hide-header").style.top = "-90px"; /* adjust this value to the height of your header */
  }
  prevScrollpos = currentScrollPos;
  
}