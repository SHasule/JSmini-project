let inputslider=document.querySelector('[data-length-slider]')
const lengthDisplay=document.querySelector('[data-length-container]');
const passwordDisplay=document.querySelector('[data-passworddisplay]')
const copyMsg=document.querySelector('[data-copymsg]');
const copyBtn=document.querySelector('[data-copy]');
const uppercaseCheck=document.querySelector("#uppercase")
const lowercaseCheck=document.querySelector("#lowercase")
const numberCheck=document.querySelector("#number")
const symbolsCheck=document.querySelector("#symbol")
const setindicator=document.querySelector('[data-indicator]')
const generateButton=document.querySelector('.generateButton')
const allcheckBox=document.querySelectorAll("input[type=checkbox]")
const symbols="#@!$%^&*()_<>.,?/\|~`:;"

let password="";
let passwordlenght=10;
let checkboxcount=1;


function handleslider(){
  inputslider.value=passwordlenght;
  lengthDisplay.innerHTML=passwordlenght
}
handleslider()


function getRandomInt(min,max){
 return Math.floor( Math.random()*(max-min))+min
}
function getRandomNum(){
  return getRandomInt(0,9)
}
function getRandomLowercase(){
  return  String.fromCharCode(getRandomInt(97,1))
}
function getRandoUppercase(){
  return  String.fromCharCode(getRandomInt(65,91))
}

function getRandomSym(){
  let randomnum=getRandomInt(0,symbols.length)
   return symbols.charAt(randomnum)
}


function calStrength(){
  let hasUpper=false;
  let haslower=false;
  let hasNumber=false;
  let hasSymbol=false;

  if(uppercaseCheck.checked) hasUpper=true;
  if(lowercaseCheck.checked) haslower=true;
  if(numberCheck.checked) hasNumber=true;
  if(symbolsCheck.checked) hasSymbol=true;

  if(hasUpper&&haslower&&hasNumber&&(hasSymbol)>=8){
    setindicator("0#0")
  }
  else if((haslower||hasUpper)&&
  (hasNumber||hasSymbol)&&
    passwordlength>=6)
    {
      setindicator("#ff0");
    }

    else{
      setindicator("#f00")
    }
}


async function copyContent(){

   try{
    await navigator.clipboard.writeText(passwordDisplay.value)
    copyMsg.innText="copied"
  }
   catch(e){
  copyMsg.innText="failed"
   }
   
   copyMsg.classList.add("active")

   setTimeout(()=>{
      copyMsg.classList.remove("active")
   },2000)
}

function handlecheckboxchange(){
  checkboxcount=0;

   allcheckBox.forEach((checkbox)=>{
    if(checkbox.checked){
      checkboxcount++;
    }
   })

  if(passwordlenght<checkboxcount){
    passwordlenght=checkboxcount;
    handleslider()
  } 
}

allcheckBox.forEach((checkbox)=>{
 checkbox.addEventListener("change",handlecheckboxchange)
})


inputslider.addEventListener('input',(e)=>{
  passwordlenght=e.target.value;
  handleslider()
})

copyBtn.addEventListener('click',()=>{
  if(passwordDisplay.value){
    copyContent()
  }
})


generateButton.addEventListener("click",()=>{

  // name of checkbox are selected

  if(checkboxcount==0)
    return;

  if(passwordlenght<checkboxcount){
    passwordlenght=checkboxcount;
    handleslider();
  }
  // let's start new journy to find new password

  // remove old password
  password=""


  let funarr=[];

  if(uppercaseCheck.checked) 
     funarr.push(getRandoUppercase)

  if(lowercaseCheck.checked) 
     funarr.push(getRandomLowercase)

  if(numberCheck.checked) 
     funarr.push(getRandomNum)

  if(symbolsCheck.checked) 
     funarr.push(getRandomSym)

// compulsory addition
  
for(let i=0;i<=funarr.length;i++){
  password+=funarr[i]();
}

//remaining addition
for(let i=0;i<passwordlenght-funarr.length;i++){

  let randIndex=getRandomInt(0,funarr.length);
  console.log("randtext ", + randIndex);
  password+=funarr[randIndex]();
}
//  shuffle the password
password=shufflePassword(Array.from(password));

// show in ui
passwordDisplay.value=password;

// calculate strength
calStrength();
})







// handleslider()
// // set strength cricle color to gray

// function handleslider(){
//  inputslider.value=passwordlength;
//  lengthDisplay.innerText=passwordlength;
// }


// function setindicator(color){
//   return indicator.style.backgroundColor=color
// }

// function getRdomInt(min,max){
//   return Math.floor(Math.random()*(max-min))+min
// }

// function generaterandomnumber(){
//   return getRdomInt(0,9)
// }
// function generateLowecase(){
//   return  String.fromCharCode(getRdomInt(97,127))
// }
// function generateUppercase(){
//   return  String.fromCharCode(getRdomInt(65,91))
// }
// function generateRandomsymbol(){
//    const randomsymbol=getRdomInt(0,symbols.length)
//    return symbols.charAt(randomsymbol)
// }


// // function calStrength(){
// //   let hasUpper=false;
// //   let haslower=false;
// //   let hasNumber=false;
// //   let hasSymbol=false;

// //   if(uppercaseCheck.checked) hasUpper=true;
// //   if(lowercaseCheck.checked) haslower=true;
// //   if(numberCheck.checked) hasNumber=true;
// //   if(symbolsCheck.checked) hasSymbol=true;

// //   if(hasUpper&&haslower&&hasNumber&&(hasSymbol)>=8){
// //     setindicator("0#0")
// //   }
// //   else if((haslower||hasUpper)&&
// //   (hasNumber||hasSymbol)&&
// //     passwordlength>=6)
// //     {
// //       setindicator("#ff0");
// //     }

// //     else{
// //       setindicator("#f00")
// //     }
// // }

// async function copyContent(){
//  try{
//   navigator.clipboard.writeText(passwordDisplay.value);
//   copyMsg.innerText="copied"
//  }
// catch(e){
//   copyMsg.innerText="failed"
// }
  
// copyMsg.classList.add("active")

// setTimeout(()=>{
//   copyMsg.classList.remove("active")
// },2000)

// }

// inputslider.addEventListener("input",(e)=>{
//   passwordlength=e.target.value;
//   handleslider()
// })

// function handlecheckboxchange(){
//   checkbox=0;
//   allcheckBox.forEach((checkbox)=>{
//     if(checkbox.checked){
//       checkCounter++
//     }
//   });
//   if(passwordlength<checkCounter){
//     passwordlength=checkCounter;
//     handleslider();
//   }
// }
// allcheckBox.forEach((checkbox)=>{
//   checkbox.addEventListener('change',handlecheckboxchange)
// })

// copyBtn.addEventListener("click",()=>{
//   if(passwordDisplay.value){
//     copyContent()
//   }
// })

// generateButton.addEventListener("click",()=>{
 
//   // none of the checkbox selected
//   if(checkCounter<=0) return;

//   if(passwordlength<checkCounter){
//     passwordlength=checkCounter
//     handleslider()
//   }
//   // lets start new joureny to find new password

//   // remove old password
//   password=""

// // let's put thing's mentioned in checkboxes
//   if(uppercaseCheck.checked){
//      password+=generateUppercase();
//   }
//   if(lowercaseCheck.checked){
//      password+=generateLowecase();
//   }
//   if(numberCheck.checked){
//      password+=generaterandomnumber();
//   }
//   if(symbolsCheck.checked){
//      password+=generateRandomsymbol();
//   }

  

// })
