
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navigation").style.top = "0";
  } else {
    document.getElementById("navigation").style.top = "-72px";
  }
  prevScrollpos = currentScrollPos;
}
observer = new IntersectionObserver((entries) => {
  
  entries.forEach(entry => {
    console.log(entry.target);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');

    }
    else {
      entry.target.classList.remove('show');

    }


  });
});

hiddenele = document.querySelectorAll(".hidden")
hiddenele.forEach((element) => observer.observe(element));




jobs = document.querySelectorAll("job")

