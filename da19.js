// 🔹 Pattern 1: Basic String Handling (1–10)

// // Reverse a string
// let str="hello";
// console.log(str.split("").reverse.join("")) ;
// let revrseStr="" ;
// for(let i=str.length-1 ; i>=0 ; i--){
//     revrseStr+=str[i]
// }

// console.log(revrseStr)


// Check if a string is palindrome
// let striSp="madam" ;
// let revrseStr=striSp.split("").reverse().join("") ;
// console.log(striSp===revrseStr)


// let s =0 ;
// let e=striSp.length ;
// while(s<e){
//     if (striSp[s]!==striSp[e])
//     { return false}
//     else{ s++ ;
//     e-- ;}
   
// }
// return true


// Find length of string without using length

// let str="hello world"
// console.log(str.length)
// let l=0 ;
// for(let i=0 ; i<str.length ; i++){
//     l++
// }
// console.log(l)

// Count vowels and consonants
// let str="hello" ;
// let v=0 ;
// let c=0 ;
// for(let i=0 ; i<str.length ; i++){
//     if(str[i]==="a"||str[i]==="e"||str[i]==="i"||str[i]==="o"||str[i]==="u"){
//         v++
//     }else{
//         c++
//     }
// }
// console.log(v,c)


// Convert lowercase to uppercase (without built-in)

// console.log(str.toUpperCase())
// let str="helloWorld123" ;
// let upperStr=""
// for(let i=0 ; i<str.length ; i++){
//     let code=str.charCodeAt(i) ;
//     if(code>=97 && code<=122){
//         upperStr+=String.fromCharCode(code-32)
//     }else{
//         upperStr+=str[i]
//     }
// }
// console.log(upperStr)


// Remove spaces from a string
// Remove spaces from a string
// let str="hello world" ;
// let str2="" ;
// for(let i=0 ; i<str.length ;i++){
    
//     if(str[i]&& str[i]!==" "){
//         str2+=str[i]
//     }
// }
// console.log(str2)

// Check if two strings are equal
// let a="hello" ;
// let b="hello" ;
// console.log(a===b)

// Count words in a sentence
// let a="hello world" ;
// console.log(a.split(" ").length)

// Find first and last character of a string
// let a="hello" ;
// console.log(a[0],a[a.length-1])

// Replace all spaces with -
// let str = "hello word";
// let str2 = str.split(" ").join("-");
// console.log(str2); 


// Pattern 2: Two Pointer Technique (11–18)

// Check palindrome using two pointers

// Reverse words in a string
// let str="money" ;
// let a=str.split("")
// let s=0 ;
// let e=str.length-1 ;
// while(s<e){
//     [a[s],a[e]]=[a[e],a[s]]
//     s++ ;
//     e--
    
// }
// console.log(a.join(""))

// Remove duplicates from a string

// Check if string is valid after removing at most one character

// Check if string is rotation of another
// let str1="hello" ;
// let str2="llohe" ;
// if((str1+str1).includes(str2)){
//     console.log("yes")
// }

// Reverse only alphabets in a string

// Find longest palindromic substring (basic)
//brute force
// let str="babad" ;
// let max=0 ;
// let p=""
// function palindrone(sub){
//     let re=sub.split("").reverse().join("")
//     if(sub===re &&max<sub.length){
//         max=sub.length ;
//         p=sub
//     }
    
    
// }
// for(let i=0 ; i<str.length ; i++){
//     for(let j=i+1 ; j<str.length ; j++){
//         let sub = "";
//         for(let k=i ;k<j ; k++){
//             sub+= str[k]
//         }
//         palindrone(sub)
//     }
// }
// console.log(p)


// Compare two strings ignoring case
// let str1="hello"
// let str2="hello" ;
// console.log(str1==str2)



// Pattern 3: Hashing / Frequency Map (19–28)

// Check if two strings are anagrams
// let str1="hello" ;
// let str2="lloeh" ;
// if(str1.split("").sort().join("")===str2.split("").sort().join("")){
//     console.log("yes")
// }

// Find first non-repeating character
// function firstNonRepeatingChar(str) {
//     let freq = {};

//     for (let char of str) {
//         freq[char] = (freq[char] || 0) + 1;
//     }

//     for (let char of str) {
//         if (freq[char] === 1) return char;
//     }

//     return null; // if none found
// }

// console.log(firstNonRepeatingChar("swiss")); // "w"
// console.log(firstNonRepeatingChar("hello")); // "h"


// Find first repeating character

// Count frequency of each character

// Find all duplicate characters

// Check if string contains all unique characters

// Find most frequent character

// Check if ransom note can be formed from magazine

// Find longest palindrome that can be built

// Group anagrams

// Pattern 4: Sliding Window (29–36)

// Longest substring without repeating characters

// Longest substring with at most K distinct characters

// Count substrings with exactly K distinct characters

// Find minimum window substring

// Longest repeating character replacement

// Maximum vowels in a substring of size K

// Find all anagrams of a string

// Smallest substring containing all characters of another string
// Pattern 5: String Building / Modification (37–42)

// String compression (aaabb → a3b2)

// Remove all occurrences of a character

// Remove consecutive duplicates

// Capitalize first letter of each word

// Check if string follows pattern (abba, dog cat cat dog)

// Decode encoded string (3[a2[c]])

// Pattern 6: Substrings & Subsequences (43–47)

// Generate all substrings of a string

// Count palindromic substrings

// Longest common prefix

// Check if one string is subsequence of another

// Print all subsequences (recursion)
// Pattern 7: Real Interview Favorites (48–50)

// Validate email string

// Check password strength

// URL slug generator ("Hello World" → hello-world)