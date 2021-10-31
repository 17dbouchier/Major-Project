window.onscroll = function() {scrollFunction()};

document.getElementById("navbar").style.top = "-100px";

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
}

document.querySelectorAll('.bill-button').forEach(button => {
  button.addEventListener('click', () => {
    const billContent = button.nextElementSibling;

    button.classList.toggle('bill-button--active');

    if (button.classList.contains('bill-button--active')) {
      billContent.style.maxHeight = billContent.scrollHeight + 'px';
    } else {
      billContent.style.maxHeight = 0;
    }
  });
});
