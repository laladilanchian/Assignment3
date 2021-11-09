function primeNumber(number){
   let arr=[]
   let finalResult= true
  let powNumber= (Math.pow(number , 2))
  for(let i=2; i<powNumber; i++){
     value=(number%i ===0)
  if(value === false){
     arr.push(true)
  }else if(number===i){
     arr.push(true)
  }else{
     arr.push(false)
  }
}
for(let o=0; o<arr.length; o++){
   if(arr[o] !=finalResult){
      let finalResult=false
     return finalResult
   }
   }
return finalResult
}


function primeFrom(first , last){
   let i=first;
   let j=last;
   let arr=[]
   for(i; i<=j; i++){
      if(primeNumber(i) == true){
       arr.push(i) 
      }else{
          continue
      }
   }
   //console.log(arr)
   return arr
}
console.log(primeNumber(3))
console.log(primeFrom(2,25))