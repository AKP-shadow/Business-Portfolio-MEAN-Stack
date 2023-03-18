
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
    alias: "", des: "", img:"https://www.reliance-foundry.com/wp-content/uploads/Bearings-1.jpg"
  }


}

function loadDoc() {
  input = document.getElementById("form1").value.toUpperCase();
  document.getElementsByClassName("grid-container")[0].innerHTML = ``;
  serviceinfo = ["On-line Leak", "Grinding and Machining", "Fabricating", "Cold Welding", "Bearings", "Grinding", "Cutting and Conditioning"]
  
  for (i = 0; i < serviceinfo.length; i++) {
    txtValue = serviceinfo[i];
    if (input.length==0){
      document.getElementsByClassName("grid-container")[0].innerHTML += `<div class="service-box">
      <p>${txtValue}</p>
      <div class="card" style="width: 18rem;">
          <img src="${service_data[txtValue].img}" draggable="false"
              class="card-img-top" alt="...">
          <a class="btn " href="#" role="button">Learn More</a>
      </div>
  </div>`   
    }
    else if (txtValue.toUpperCase().indexOf(input) > -1) {
      console.log(txtValue)
      document.getElementsByClassName("grid-container")[0].innerHTML += `<div class="service-box">
        <p>${txtValue}</p>
        <div class="card" style="width: 18rem;">
            <img src="${service_data[txtValue].img}" draggable="false"
                class="card-img-top" alt="...">
            <a class="btn " href="#" role="button">Learn More</a>
        </div>
    </div>`
    } else {
    }
  };
}
