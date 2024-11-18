let card=document.querySelector(".trend")
let blog=document.querySelector(".trends")
let mainpage=document.querySelector(".main")
let seccard=document.getElementById("seccard")


let blogid=document.getElementById("blog")
let shopid=document.getElementById("shop")
let aboutid=document.getElementById("about")
let contactid=document.getElementById("contact")
let homeid=document.getElementById("home")


 function home(){
  card.style.display="block"
   blog.style.display="block"
   seccard.style.display="block"
   mainpage.style.display="flex"
  //  document.querySelector(".cart").style.display="none"

   blogid.style.color="black";
 homeid.style.color="rgb(12, 184, 184)";
 shopid.style.color="black";
 aboutid.style.color="black";
 contactid.style.color="black";
 }

function shpos(){
 mainpage.style.display="none"
 blog.style.display="none"

 blogid.style.color="black";
 homeid.style.color="black";
 shopid.style.color="rgb(12, 184, 184)";
 aboutid.style.color="black";
 contactid.style.color="black";
}


function blogs(){
  // console.log("clk");
  card.style.display="none"
   blog.style.display="block"
   seccard.style.display="none"
   mainpage.style.display="none"
  
   blogid.style.color="rgb(12, 184, 184)";
   homeid.style.color="black";
   shopid.style.color="black";
   aboutid.style.color="black";
   contactid.style.color="black";

  
}

function about(){
  let aboutpage=document.querySelector(".aboutpage")
  aboutpage.style.display="block"

  card.style.display="none"
   blog.style.display="none"
   seccard.style.display="none"
   mainpage.style.display="none"
  
   blogid.style.color="black";
   homeid.style.color="black";
   shopid.style.color="black";
   aboutid.style.color="rgb(12, 184, 184)";
   contactid.style.color="black";

}
function contact(){
 let Contactpage=document.querySelector(".Contactpage");
 Contactpage.style.display="block"
 card.style.display="none"
 blog.style.display="none"
 seccard.style.display="none"
 mainpage.style.display="none"

  blogid.style.color="black";
   homeid.style.color="black";
   shopid.style.color="black";
   aboutid.style.color="black";
   contactid.style.color="rgb(12, 184, 184)";
}

//show 

function show(img){
let newimg=document.getElementById("newimg");
newimg.src=img.src;


card.style.display="none"
blog.style.display="none"
seccard.style.display="none"
mainpage.style.display="none"

document.querySelector(".cart").style.display="flex"

}

// function back(){
// //   card.style.display="block"
// //    blog.style.display="block"
// //    seccard.style.display="block"
// //    mainpage.style.display="flex"

// //    blogid.style.color="black";
// //  homeid.style.color="rgb(12, 184, 184)";
// //  shopid.style.color="black";
// //  aboutid.style.color="black";
// //  contactid.style.color="black";
// home()
// }

function addcart(){
  alert("item added in cart");
  location.reload()
}
function back(){
  location.reload()
}