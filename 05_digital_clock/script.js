
let clocktime=document.querySelector(".clocktime")

  
setInterval(() => {
  let date=new Date()
 let outputDate=date.toLocaleTimeString()
 console.log(outputDate);
clocktime.innerHTML=outputDate

}, 1000);

