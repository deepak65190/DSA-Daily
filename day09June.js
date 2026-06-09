// Reverse a string
// Check if a string is palindrome
// Find length of string without using length
// Count vowels and consonants
// Convert lowercase to uppercase (without built-in)
// Remove spaces from a string
// Check if two strings are equal
// Count words in a sentence
// Find first and last character of a string
// Replace all spaces with 1



//let str="hello"
//console.log(str.split("").reverse().join(""))
// let reverseStr="" ;
// for(let i =str.length-1 ; i>=0 ; i--){
//     reverseStr+=str[i]
// } ; 
// console.log(reverseStr)
// let start=0 ;
// let end=str.length-1 ;
// while(start<end){
//     [str[start],str[end]]=[str[end],str[start]]
//     start++ ;
//     end-- ;
// }
// console.log(str)

/*let str="madam"
let left=0 ;
let right=str.length-1
while(left<right){
    if(str[left]!==str[right]){
        console.log("no")
        return 
        
    }
    left++ ;
    right--
}*/

/*
let str="Hello123!"
let vowels="aeiou"
let constant ="bcdfghjklmnpqrstvwxyz"
let v=0 ;
let c=0 ;
for(let char of str.toLowerCase()){
    if(/[a-z]/.test(char)){
        vowels.includes(char)?v++:c++
    }
}
console.log(v ,c)*/

// Convert lowercase to uppercase
/*let str="HEllo"
let result=""
for(let char of str){
    let code =char.charCodeAt()
    if(code>=97 && code<=122){
        result+=String.fromCharCode(code-32)
    }else{
        result+=char
    }
}
console.log(result)*/