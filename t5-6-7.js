function binaryInverse(num){
    let i=num.length-1
     let result=[]
     for(i; i>=0; i-- ){
 if(num.charAt(i)==0){
 result.push(1)
 }else if(num.charAt(i)==1){
     result.push(0)
 }
     }
     result.reverse()
     let final=result.join("")
     return final
 }
 console.log(binaryInverse('10110'))
 
 function twosCompliment(num){
   let inverse = binaryInverse(num)
   let result= binarySum(inverse,'1')
   console.log(result)
 }
 