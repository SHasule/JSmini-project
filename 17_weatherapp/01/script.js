// https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apikey}&units=metric
// 6af403a414350fc29d9677aff9d95257


const userTab=document.querySelector("[data-user-weather]")
const searchTab=document.querySelector("[data-searchWeather]")
const userContainer=document.querySelector(".Weather-container");
const grantAccessContainer=document.querySelector(".grant-location-container");
const searchForm=document.querySelector("[data-searchForm]");
const loadingScreen=document.querySelector(".loading-container");
const userInfoContainer=document.querySelector(".user-info-container");

 let currentTab=userTab;
 currentTab.classList.add("current-tab")
 
 let API_KEY=`6af403a414350fc29d9677aff9d95257`

 function switchTab(clickedTab){

  if(clickedTab!=currentTab){
    currentTab.classList.remove("current-tab")
    currentTab=clickedTab;
    currentTab.classList.add("current-tab")
    
  }
  
 }

 userTab.addEventListener('click',()=>{
  switchTab(userTab)
 })

 searchTab.addEventListener('click',()=>{
  switchTab(searchTab)
 })