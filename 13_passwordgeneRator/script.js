let passwordlength=document.querySelector("#passwordlength");
let uppercase=document.querySelector('#uppercase')
let passwordinput=document.querySelector("#passwordinput")
let lowerCase=document.querySelector("#lowercase")
let number=document.querySelector("#num")
let symbol=document.querySelector("#sym")

let lower="qwertyuioplkjhgsazxmzmnc";
let upper="QWEIUWRPLIUYHXGTSAB";
let num="0987654321";
let sym="~?[-+}\-=<>"

function GeneratorRandomNumber(data){
return data[Math.floor(Math.random()*data.length)];
   
}


function GeneraterRandomPassword(password=""){
 if(uppercase.checked){
  password+=GeneratorRandomNumber(upper)
 }
 if(lowerCase.checked){
  password+=GeneratorRandomNumber(lower)
 }
 if(number.checked){
  password+=GeneratorRandomNumber(num)
 }
 if(symbol.checked){
  password+=GeneratorRandomNumber(sym)
 }
 if(password.length<passwordlength.value){
  return GeneraterRandomPassword(password)
 }

 passwordinput.value=password
 
}


function generatepassword(){
  GeneraterRandomPassword()
}
generatepassword()

function copied(){
  alert("password copied")
}