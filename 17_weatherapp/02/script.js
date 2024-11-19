let city=document.querySelector("#city")
let type=document.querySelector("#type")
let temp=document.querySelector("#temp")
let image=document.querySelector("#img")
let input=document.querySelector("#inp");

let search;
let apikey=`6af403a414350fc29d9677aff9d95257`
// let url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apikey}&units=metric`


const data= async function(search){
 let getdata=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apikey}&units=metric`)
 let response=await getdata.json()
console.log(response);
console.log(response.cod);

if(response.cod==400){
  alert("please enter city name")
  image.src="img/404 (1).jpg"
  city.innerHTML="";
  temp.innerHTML=""
  type.innerHTML="";
  }
  else if(response.cod==404){
  alert("please enter valid city name")
  image.src="img/404 (2).jpg"
  city.innerHTML=search;
  }
  input.value=""
 city.innerHTML=search;
 temp.innerHTML=Math.floor(response.main.temp)+" °C";
 type.innerHTML=response.weather[0].main;

 
  if(type.innerHTML=="Clouds"){
 image.src="img/clouds.png"
 }
 else if(type.innerHTML=="Clear"){
 image.src="img/clear.jpg"
 }
 else if(type.innerHTML=="Haze"){
 image.src="img/haze.png"
 }
 else if(type.innerHTML=="Rain"){
 image.src="img/rain.png"
 }
 else if(type.innerHTML=="Snow"){
 image.src="img/snow.jpg"
 }
 else if(type.innerHTML=="Smoke"){
 image.src="img/smoke-cloud.png"
 }
input.value=""

}

function myfun(){
   search=input.value
  data(search)
}


