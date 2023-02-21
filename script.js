

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





