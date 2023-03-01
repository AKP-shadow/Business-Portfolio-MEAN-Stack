function navToService(name){
    console.log(name);

    localStorage.setItem("servicename",name);
    // console.log(serviceinfo.get(name))
    path =location.href.split('/')
    // console.log(path.slice(0,path.length-1).join("/"))
    location.href = path.slice(0,path.length-1).join("/")+"/serviceinfo.html"
}


path =location.href.split('/')
if(path[path.length-1]=="serviceinfo.html"){
    servicename=localStorage.getItem("servicename")
    serviceinfo = new Map(
        [ ["onlineleak",["description","Online leak sealing has become a critical part of many industries, from energy production to manufacturing. The process of online leak sealing can be utilised in any situation that has pressurised pipework containing fluid or gas. During a leakage in a high-pressure pipe, repairs can be seen as almost impossible due to the high velocity of the leak and potentially extreme temperatures of the contents of the pipe.  Online leak sealing is the process of resealing and reinforcing the leaking pipe in situ without depressurising or draining the pipe itself. If you would like to discuss online leak sealing further, contact our professional team today and we will be happy to help with any of your needs. "]]
     ]) 
    desc= serviceinfo.get(servicename);
    document.getElementById("servicedesc").innerHTML = desc
    console.log(desc)
}

