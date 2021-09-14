window.onscroll = function() {scrollFunction()};

document.getElementById("navbar").style.top = "-70px";

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
}
