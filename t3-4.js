function reverseNumber(number){
    let stringNumber=number.toString()
    let i=stringNumber.length-1
    let newNumber=""
    for(i; i>=0; i--){
        newNumber+=stringNumber.charAt(i)
    } 
    let j=newNumber
    let result=parseInt(j,10)
   //console.log(result)
     return result
}
console.log(reverseNumber(7341))

function palindrome(number){
    let i=reverseNumber(number)
    let result=""
    if(i==number){
        result = "it is palindrome"
        //console.log("It is palindrome")
    }else{
        result = "it is not palindrome"
        //console.log("it is not palindrome")
    }
    return result
}

console.log(palindrome(565))
