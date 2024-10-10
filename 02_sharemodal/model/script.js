
const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');

function openmodal(){
 console.log("modal is open");
 modal.classList.add('active')
 overlay.classList.add('overlayactive')
}

const closeModal=()=>{
  console.log("modal closed");
  modal.classList.remove('active')
  overlay.classList.remove('overlayactive')
  
}