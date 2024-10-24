const accessKey=`kjWR0zIAmwRSOISG6XkPvYv2idCe0zOyFW19mpYz8Lw`;
let Searchinput=document.querySelector("#Searchinput")
let SearchBTN=document.querySelector(".SearchBTN")
 let searchresults=document.querySelector(".search-result")
// api= `https://api.unsplash.com/search/photos?query=searchValue &per_Page=28&p=pageNo age&client_id=${accessKey}`
let showdata=document.querySelector(".showdata")
let morebtn=document.querySelector(".show-more-btn")

let page=1
async function getdata(searchvalue,pagenum){

  console.log("data loading...");
  let fetchingdata= await fetch(`https://api.unsplash.com/search/photos?query=${searchvalue}&per_Page=28&p=${pagenum} age&client_id=${accessKey}`)
   let response=await fetchingdata.json(); 
   let result=response.results

  if(pagenum===1){
    showdata.innerHTML=""
  }
  if(Searchinput.value==""){
    showdata.innerHTML`<h1>plz search</h1>`
  }
  else{
    morebtn.style.display="block"
  }
  
  
    result.forEach((data)=>{
     console.log(data);

     let div=document.createElement("div")
      div.classList.add("card")
     showdata.appendChild(div) 
    
     div.innerHTML=`
     <img src="${data.urls.small}" alt="">
     <a href=${data.links.html} target="_blank">${data.alt_description}</a>`
  
    })
   
}

SearchBTN.addEventListener('click',()=>{
  let searchvalue=Searchinput.value
  getdata(searchvalue,page)
})


morebtn.addEventListener('click',()=>{
  let searchvalue=Searchinput.value
  getdata(searchvalue, page++)

})
