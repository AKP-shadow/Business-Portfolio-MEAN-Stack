const { render } = require("ejs");

const loadingLine = document.querySelector('.loading-line');
const contentContainer = document.querySelector('.success-widget');

loadingLine.addEventListener('animationend', () => {
  contentContainer.style.display = 'block';
  loadingLine.parentElement.style.display = 'none';
});
 

$(document).ready(function() {
    $('#formSignIn').submit(function(event) {
      event.preventDefault(); // Prevent the default form submission
 
      const form =  document.getElementsByName('formSignIn');
      console.log(form)
      const data = new FormData(form);
      console.log(data)
      fetch('/login', {
        method: 'POST',
        body: data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
     
      })
      .then(response => response.json())
      .then(json => {
         console.log(JSON.stringify(json))
         console.log(json.error)
         if(json.error){
          const responseDiv = document.getElementById('loginerror');
          responseDiv.innerHTML = `<i class="bx bx-error-circle error-icon"></i>
          <p class="error-text">`+ json.error +`</p>` 
         }
         else{
          
         }

      })
      .catch(error => console.error(error));
    });
  });