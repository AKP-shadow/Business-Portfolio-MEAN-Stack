
service_data = {
  "On-line Leak": {
    alias: "online leak", des: "", img: "https://leaksealing.com/wp-content/uploads/2016/06/DSC00049.jpg"
  },
  "Grinding and Machining": {
    alias: "grinding", des: "", img: "https://ravimachines.com/wp-content/uploads/2016/07/Bench-Grinder-0.5-HP-scaled.jpg"
  },
  "Cold Welding": {
    alias: "welding", des: "", img: "https://d3eeke16mv0lt7.cloudfront.net/sites/default/files/styles/article_hero_image/public/field/image/chaos-testing-tools.jpg?itok=PtIklEX1"
  },
  "Gear and shaft desiging": {
    alias: "", des: "", img: "https://www.reliance-foundry.com/wp-content/uploads/Bearings-1.jpg"
  }


}
function startState(){
  serviceinfo = ["On-line Leak", "Grinding and Machining", "Gear and shaft desiging", "Cold Welding"]
  for (i = 0; i < serviceinfo.length; i++) {
    txtValue = serviceinfo[i];
    console.log(Object.keys(service_data).length)
    document.getElementsByClassName("grid-container")[0].innerHTML += `<div class="service-box">
    <p>${txtValue}</p>
    
    <div class="card" style="width: 18rem;border-radius: 60px;">
        <img src="${service_data[txtValue].img}" draggable="false"
            class="card-img-top" alt="...">
        <a class="btn " href="#" role="button" onClick ="navToService('onlineleak')">Learn More</a>
    </div>
</div>`
  }
}

startState();
function loadDoc() {
  f=0
  input = document.getElementById("form1").value.trim().toUpperCase();
  document.getElementsByClassName("grid-container")[0].innerHTML = ``;
  serviceinfo = ["On-line Leak", "Grinding and Machining", "Gear and shaft desiging", "Cold Welding"]
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
        console.log(txtValue)
        document.getElementsByClassName("grid-container")[0].innerHTML += `<div class="service-box">
            <p>${txtValue}</p>
            <div class="card" style="width: 18rem;">
                <img src="${service_data[txtValue].img}" draggable="false"  
                    class="card-img-top" alt="...">
                <a class="btn " href="#" role="button" onClick ="navToService('onlineleak')>Learn More</a>
            </div>
        </div>`
      }
  }
  if(f==0){
    document.getElementsByClassName("grid-container")[0].innerHTML = "<h2>No search found</h2>"
  }
}}

