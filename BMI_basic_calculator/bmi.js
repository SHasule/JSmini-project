

  const form=document.querySelector('form')
  console.log(form);

  form.addEventListener('submit',function(e){
    e.preventDefault()
   const height=parseInt(document.querySelector('#height').value)
   const Weight=parseInt(document.querySelector('#Weight').value);
   const  result=document.querySelector('#result')

   if(height===''||height<=0||isNaN(height)){
    result.innerHTML=`please give valid height${height}`
   }
   else if(Weight===""||Weight<=0||isNaN(Weight)){
    result.innerHTML=`please give valid weight${Weight}`
   }
   else{
    const BMI=  (Weight/((height*height)/10000)).toFixed(2)

    //show the result
    result.innerHTML=`<span>${BMI}</span>`
   }



  })
