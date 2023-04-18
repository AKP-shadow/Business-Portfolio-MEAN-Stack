
service_data = {
  "On-line Leak": {
    alias: "online leak", des: "", img: "https://leaksealing.com/wp-content/uploads/2016/06/DSC00049.jpg"
  },
  "On-line Leak": {
    alias: "online leak", des: "", img: "https://leaksealing.com/wp-content/uploads/2016/06/DSC00049.jpg"
  },
  "On-line Leak": {
    alias: "online leak", des: "", img: "https://leaksealing.com/wp-content/uploads/2016/06/DSC00049.jpg"
  },
  "Grinding and Machining": {
    alias: "grinding", des: "", img: "https://ravimachines.com/wp-content/uploads/2016/07/Bench-Grinder-0.5-HP-scaled.jpg"
  },
  "Cold Welding": {
    alias: "welding", des: "", img: "https://www.reliance-foundry.com/wp-content/uploads/Bearings-1.jpg"
  },
  "Gear and shaft desiging": {
    alias: "", des: "", img: "https://www.reliance-foundry.com/wp-content/uploads/Bearings-1.jpg"
  },
  "Gear and shaft desiging": {
    alias: "", des: "", img: "https://www.reliance-foundry.com/wp-content/uploads/Bearings-1.jpg"
  },
  "Gear and shaft desiging": {
    alias: "", des: "", img: "https://www.reliance-foundry.com/wp-content/uploads/Bearings-1.jpg"
  },  "Gear and shaft desiging": {
    alias: "", des: "", img: "https://www.reliance-foundry.com/wp-content/uploads/Bearings-1.jpg"
  }


}
function startState(){
  serviceinfo = ["On-line Leak","On-line Leak","On-line Leak", "Grinding and Machining", "Gear and shaft desiging", "Cold Welding","Gear and shaft desiging","Gear and shaft desiging"]

  for (i = 0; i < serviceinfo.length; i++) {
    txtValue = serviceinfo[i];
    // console.log(document.getElementsByClassName("grid-container")[0].size/)
    document.getElementsByClassName("grid-container")[0].innerHTML += `<div class="service-box">
    <p style="color:black;transform: translateX(-20px);">${txtValue}</p>
    
    <div class="card" style="width: 16vw;border-radius: 40px;">
        <img   src="${service_data[txtValue].img}" draggable="false"
            class="card-img-top" alt="...">
        <a class="btn" ui-sref="hello({id: 2})" ui-sref-active="active" role="button" >Learn More</a>
    </div>
</div>`
  }
}
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
                <a class="btn " ui-sref="hello({id: 2})" ui-sref-active="active" role="button" onClick ="navToService('onlineleak')>Learn More</a>
            </div>
        </div>`
        console.log(txtValue+"yes")
      }
  }
  if(f==0){
    document.getElementsByClassName("grid-container")[0].innerHTML = `<h2 style="color:black;">No search found</h2>`
  }
}}

