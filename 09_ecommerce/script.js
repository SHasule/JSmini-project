let rectang=document.querySelector("#center");
rectang.addEventListener("mousemove",(e)=>{
  let reactLocation= rectang.getBoundingClientRect()
  let insiderect= (e.clientX-reactLocation.left)

 if(insiderect<reactLocation.width/2){
   
 let redcolor=gsap.utlis.mapRange(0,reactLocation.width/2,255,0,insiderect);
  gsap.to(rectang,{
    backgroundColor:`rgb(${redcolor},0,0)`,
    ease:Power4
  })
 }else{
  
 }
  
})