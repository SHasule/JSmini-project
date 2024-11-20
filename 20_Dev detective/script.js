//https://api.github.com/users/Shasule

let Searchfeild=document.querySelector(".search-feild");
let search=document.querySelector(".search")
let name=document.querySelector("#name")
  let description=document.querySelector("#description");
  let cross=document.querySelector("#cross")



async function getApi(SearchValue){
   try{
      let res=await fetch(`https://api.github.com/users/${SearchValue}`);
      let data=await res.json()
      console.log(data);
      appenddata(data)
   }
   catch(err){
    console.log("error");
    
   }
 }

 function appenddata(data){
  name.innerText=data.name
  description.innerText=data.bio
 }


search.addEventListener('click',(e)=>{
  e.preventDefault()
 let SearchValue= Searchfeild.value

 getApi(SearchValue)

 Searchfeild.value=""
 
})



cross.addEventListener('click',()=>{
Searchfeild.value=""
})