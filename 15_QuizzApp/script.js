let data=[
  {
    Q:"q: Js is used for?",
    a:"Frontend",
    b:"backend",
    c:"Animation",
    d:"Dynamically update Content",
    ans:"ans4",
  },
  {
    Q:"q: Fullform of Js ?",
    a:"Javascript",
    b:"Javascriptes",
    c:"Javas",
    d:"Javascriptss",
    ans:"ans1",
  },
  {
    Q:"q: Who developed Js?",
    a:"santa",
    b:"elon",
    c:"brenden Eich",
    d:"mark",
    ans:"ans3",
  },
  {
    Q:"q:When Js developed ?",
    a:"1995",
    b:"1990",
    c:"1992",
    d:"1876",
    ans:"ans1",
  },
]

let qustion=document.querySelector(".qus")
let option1=document.querySelector("#opt1")
let option2=document.querySelector("#opt2")
let option3=document.querySelector("#opt3")
let option4=document.querySelector("#opt4")

let answer=document.querySelectorAll(".options")
let myscore=document.querySelector(".myscore")
let nextbtn=document.querySelector("#nextbtn")

let btnbackground=document.querySelector(".btn")


let num=0;
let score=0;
 qustion.innerHTML=data[num].Q
 option1.innerHTML=data[num].a;
 option2.innerHTML=data[num].b;
 option3.innerHTML=data[num].c;
 option4.innerHTML=data[num].d;


function CheckAns(){
  let ans;
  answer.forEach((curElement)=>{
     if(curElement.checked){
      ans=curElement.id
      console.log(ans);
     }
  })
  return ans
}

 function next(){
  let checkedAnswer=CheckAns();
  if(checkedAnswer==data[num].ans){
    score++
  }
  num++;
  if(num< data.length){
    qustion.innerHTML=data[num].Q
    option1.innerHTML=data[num].a;
    option2.innerHTML=data[num].b;
    option3.innerHTML=data[num].c;
    option4.innerHTML=data[num].d;
  }
  else{
    myscore.innerHTML=` You Scored ${score}/${data.length} <br>
    <button onclick="location.reload()">Play Again</button>`

    nextbtn.style.display="none"
    btnbackground.style.backgroundColor="lightblue"
  }
 
 }