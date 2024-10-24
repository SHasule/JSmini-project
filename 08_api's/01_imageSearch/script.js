const accessKey=`kjWR0zIAmwRSOISG6XkPvYv2idCe0zOyFW19mpYz8Lw`;

const showmore=document.querySelector(".show-more-btn")
const inputElement=document.querySelector('#Search-input')
const form=document.querySelector("form")
let Searchbutton=document.querySelector("#Search-button")
 let searchresult=document.querySelector(".search-result")
 let searchresults=document.querySelector(".search-result")
// api= `https://api.unsplash.com/search/photos?query=searchValue &per_Page=28&p=pageNo age&client_id=${accessKey}`


let page=1
let searchvalue=""

async function getdata(){
  searchvalue=inputElement.value
  console.log("data loading...");
  let fetchingdata= await fetch(`https://api.unsplash.com/search/photos?query=${searchvalue}&page=${page}&client_id=${accessKey}`)
   let response=await fetchingdata.json();
   
   let result=response.results
   if(page===1){
    searchresults.innerHTML="";
   }

    result.forEach((data)=>{
      let imgwrapper=document.createElement("div")
      imgwrapper.classList.add("searchresult")
    
      let img=document.createElement('img')
      img.src=data.urls.small;
      img.alt=data.alt_description
      console.log(img);
      
      let imagelink=document.createElement("a")
      imagelink.href=data.links.html
      imagelink.target="_blank"
      imagelink.textContent=data.alt_description
      console.log(imagelink);

       imgwrapper.appendChild(img)
       imgwrapper.appendChild(imagelink)
       searchresults.appendChild(imgwrapper)
    });
   
    page++;
    if(page>1){
      showmore.style.display="block"
    }
   
}


// Searchbutton.addEventListener('click',(e)=>{
//   e.preventDefault()
//    searchvalue=inputElement.value
//    page=1;
//   getdata(searchvalue)
// })

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  page=1;
  getdata()
})
showmore.addEventListener('click',()=>{
  getdata()
})
