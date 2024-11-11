function countdown(){

  setInterval(function(){
   let destination=new Date("nov 5,2024, 11:44:00").getTime() 
   let currentdate=new Date().getTime()
   let differnce=destination-currentdate;
   
   let day=Math.floor(differnce/(1000*60*60*24))
  console.log(day);

  let hr=Math.floor(differnce%(1000*60*60*24)/(1000*60*60))
  console.log(hr);
  
  let min=Math.floor(differnce%(1000*60*60)/(1000*60))
  console.log(min);

  let sec=Math.floor(differnce%(1000*60)/(1000))
  console.log(sec);
  
   document.querySelector("#day").innerHTML=`${day} <br> Day`
   document.querySelector("#hr").innerHTML=`${hr} <br> hr`
   document.querySelector("#min").innerHTML=`${min} <br> min`
   document.querySelector("#sec").innerHTML=`${sec} <br> sec`
   
  

  },1000)

}
countdown()