function validate() {
    const inpObj = document.getElementById("uname");
    if (!inpObj.checkValidity()) {
      console.log(inpObj.validationMessage);
    } else {
      console.log("ok")
    } 
  } 



  function checkLength(){
    
  }