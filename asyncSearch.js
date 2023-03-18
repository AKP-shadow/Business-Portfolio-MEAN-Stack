function loadDoc() {
    input = document.getElementById("form1").value.toUpperCase();
      serviceinfo = ["On-line Leak","Machining","Fabricating", "Valves","Bearings","Grinding","Cutting and Conditioning"]
      for (i = 0; i < serviceinfo.length; i++) {
    // input = document.getElementById("ParallaxSlider").innerHTML="a";
    // Iterate over each list item to see if the value of the input, ignoring         case, matches the inner text or inner html of the item.
         txtValue = serviceinfo[i];
         if (txtValue.toUpperCase().indexOf(input) > -1) {
         // Displays list items that are a match, and nothing if no match
        //    li[i].style.display = "";
        console.log(txtValue)
         } else {
         }
    };
  }

function checkDB(string){

}