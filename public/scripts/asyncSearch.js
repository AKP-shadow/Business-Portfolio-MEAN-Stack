

  service_data  =   {}
  serviceinfo = []
  fetch('/services')
  .then(response => response.json())
  .then(data => {
    data.forEach(product => {
      const { name, desc, image } = product;
      serviceinfo.push(name)
      if (!service_data[name]) {
        service_data[name] = {};
      }
      service_data[name]['img'] = image;
    });
    return service_data
  })
  .catch(error => console.error(error));



function startState(){
  console.log(serviceinfo)

  for (i = 0; i < serviceinfo.length; i++) {
    txtValue = serviceinfo[i];
    // console.log(document.getElementsByClassName("grid-container")[0].size/)
    document.getElementsByClassName("grid-container")[0].innerHTML += `<div class="service-box">
    <p style="color:black;transform: translateX(-20px);">${txtValue}</p>
    
    <div class="card" style="width: 16vw;border-radius: 40px;">
        <img   src="${service_data[txtValue].img}" draggable="false"
            class="card-img-top" alt="...">
            <a class="btn " ui-sref="hello({id: 2})" ui-sref-active="active" role="button" onClick ="navToService('onlineleak')">Learn More</a>

    </div>
</div>`
  }
}
$(document).ready(function() {
startState();
  
})
function startStateList(){

  for (i = 0; i < serviceinfo.length; i++) {
    txtValue = serviceinfo[i];
    // console.log(document.getElementsByClassName("grid-container")[0].size/)
    document.getElementsByClassName("grid-container")[0].innerHTML += `<div class="service-box">
    <p style="color:black;transform: translateX(-20px);">${txtValue}</p>
    
    <div class="card" style="width: 16vw;border-radius: 40px;">
        <img   src="${service_data[txtValue].img}" draggable="false"
            class="card-img-top" alt="...">
            <a class="btn " ui-sref="hello({id: 2})" ui-sref-active="active" role="button" onClick ="navToService('onlineleak')">Learn More</a>
        
    </div>
</div>`
  }
}
// document.getElementById("grid-container")[0].onload = function() {startState()};
function loadDoc() {
  f=0
  input = document.getElementById("form1").value.trim().toUpperCase();
  console.log("change")
  document.getElementsByClassName("grid-container")[0].innerHTML = ``;
  serviceinfo = ["On-line Leak","On-line Leak","On-line Leak", "Grinding and Machining", "Gear and shaft desiging", "Cold Welding","Gear and shaft desiging","Gear and shaft desiging"]

  console.log(input)
  if (input.length == 0) {
    startState();
  }
  else{
    pattern = RegExp(input.toUpperCase(), "i");
    for (i = 0; i < serviceinfo.length; i++) {
      txtValue = serviceinfo[i];
      if (txtValue.toUpperCase().match(pattern) ) {
        f=1
        console.log(document.getElementsByClassName("grid-container")[0].innerHTML)
        document.getElementsByClassName("grid-container")[0].innerHTML += `<div class="service-box">
   
    <p style="color:black; transform: translateX(-40px);">${txtValue}</p>
            <div class="card" style="width: 16vw;border-radius: 40px;">
                <img src="${service_data[txtValue].img}" draggable="false"  
                    class="card-img-top" alt="...">
                    <a class="btn " ui-sref="hello({id: 2})" ui-sref-active="active" role="button" onClick ="navToService('onlineleak')">Learn More</a>
                    
            </div>
        </div>`
        console.log(txtValue+"yes")
      }
  }
  if(f==0){
    document.getElementsByClassName("grid-container")[0].innerHTML = `<h2 style="color:black;">No search found</h2>`
  }
}}

