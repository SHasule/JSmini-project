let Addnote=document.querySelector("#Addnote");
let addForm=document.querySelector(".addForm");
let Deleteicon=document.querySelector('.icon')
let Addbtn=document.querySelector('.Addbtn')

Addnote.addEventListener('click',function(){
addForm.style.display="block"
document.getElementById("title").value=""
  document.getElementById("Description").value=""
})

Deleteicon.addEventListener('click',function(){
  addForm.style.display="none"
})

Addbtn.addEventListener('click',function(){
  
    addForm.style.display="none"
   let div=document.createElement("div")
   div.classList.add("mynotes")
   div.innerHTML=`
   <h2>${document.getElementById("title").value}</h2>
        <p>${document.getElementById("Description").value}</p>
        <button>Delete</button>
   `
   let newnote=document.querySelector(".newnote");
   newnote.appendChild(div)
   
 div.querySelector("button").addEventListener('click',function(){
  div.remove()
 })
   
})

// let Addnote= document.querySelector("#Addnote")
// let removeicon=document.querySelector(".icon")
// let addForm=document.querySelector(".addForm")
// let Addbtn=document.querySelector(".Addbtn")

// Addnote.addEventListener("click",function(){
//   addForm.style.display='block';
//   document.querySelector("#title").value=""
//   document.querySelector("#Description").value=""
// })

// removeicon.addEventListener('click',function(){
//   addForm.style.display='none';
// })

// Addbtn.addEventListener('click',function(){
//   addForm.style.display='none';
//   let div=document.createElement("div")
//   div.classList.add('mynotes');

//   div.innerHTML=`
//      <h2>${document.querySelector("#title").value}</h2>
//    <p>${document.querySelector("#Description").value}</p>
//    <button>delete</button>
//   `
//   let newnote=document.querySelector(".newnote")
//   newnote.appendChild(div)

//  div.querySelector("button").addEventListener("click",function(){
//   div.remove()
//  })
  
// })

