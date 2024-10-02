

//generate random color

 const randomcolor=function(){
    const hexvalue="0123456789ABCDEF"
    let color="#"

    for(i=0;i<6;i++){
        color+=hexvalue[Math.floor(Math.random()*16)]
    }
    return color;

 };

console.log(randomcolor());
let intervalid;

const startchangingcolor=function(){
   // setInterval(changebgcolor,1000)
    
  const changebgcolor=function(){
    document.body.style.backgroundColor=randomcolor()
  }  
  if(!intervalid){

    intervalid=  setInterval(changebgcolor,1000)  
  }
//  intervalid=  setInterval(changebgcolor,1000)  

};
const stopchangingcolor=function(){
 clearInterval(intervalid)
 intervalid=null;

}

document.querySelector(".start").addEventListener
("click",startchangingcolor)
 
document.querySelector(".stop").addEventListener
("click",stopchangingcolor)
 
