// const keyname=document.querySelector(".keyname")

// window.addEventListener("keydown",(e)=>{
//   console.log(e.key);

// let h2=document.querySelector("h2")
// h2.innerHTML=e.key
  
// })

const insert=document.querySelector("#insert")

window.addEventListener('keydown',(e)=>{
  insert.innerHTML=`
  <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>Code</th>
  </tr>
  <tr>
   <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
  `
  // console.log(e);
  ;
})
