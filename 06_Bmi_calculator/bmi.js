let form=document.querySelector("form")

form.addEventListener("submit",function(e){
 e.preventDefault()

  let height=parseInt(document.querySelector("#height").value)
  let Weight=parseInt(document.querySelector("#Weight").value)
   let result=document.querySelector('#result')
  if(height ==="" || isNaN(height) || height<0){
    result.innerHTML=`enter valid number height ${height}`  
  }
 else if( Weight==="" || isNaN(Weight) || Weight<0){
  result.innerHTML=`enter valid number Weight  ${Weight}`  
  }
  else{
    const bmi=(Weight/((height*height)/10000)).toFixed(2)

    // show result
    result.innerHTML=`<span>${bmi}</span>`

    if(bmi<=20.3){
    console.log("under");
    let under=document.querySelector(".under-weight")
    under.innerHTML=`under Weight =less than 20.3`
    under.style.cssText="background-color:orange;font-size:15px;border:2px"
    }
    else if(bmi>=20.3 && bmi<=36){
      let normal=document.querySelector(".normal")
      normal.innerHTML=`noraml range= 20.3 to 36`
      normal.style.cssText="background-color:green;font-size:15px;border:2px"
    }
    else if(bmi>=36){
 
    let over=document.querySelector(".over-weight")
   over.innerHTML=`over weight=more than 36`
    over.style.cssText="background-color:red;font-size:15px;border:2px"
    }
  }
  
})