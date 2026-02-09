// Reverse an array
// let array=[1,2,3] 
// array.reverse()
//Sum of all elements

// let arr=[1,2,3]
// let ans=arr.reduce((a,el)=>a+el)
// console.log(ans)
//Sum of all elements
//let length=0 ;
// let arr=[1,2,3]
// for(let i=0 ; i<arr.length ; i++){
//     length++
// }
// console.log(length)
// Copy array elements
// let array=[1,2,3]
// let b=[...array]
// console.log(b)
// Copy array elements
// let array=[1,2,3]
// let b=[...array]
// console.log(b)
//hello
// console.log(console)
// Rotate array by 1 or k

// let array=[1,2,3] 
// let k=4%array.lengths
// for(let i=0 ;i<k ; i++ ){
//     let d=array.shift()
//     array.push(d)
// }
// console.log(array)
// for(let i=arr.length-1 ; i>=0 ; i++){
//     console.log(arr[i])
// }
// let a = [
//   { cid: 1, pid: 10, amount: 100 },
//   { cid: 2, pid: 20, amount: 200 },
//   { cid: 1, pid: 10, amount: 100 },
//   { cid: 2, pid: 20, amount: 200 },
//   { cid: 3, pid: 30, amount: 100 },
//   { cid: 3, pid: 30, amount: 600 },
//   { cid: 4, pid: 40, amount: 6000 },
//   { cid: 6, pid: 300, amount: 6000 }
// ];

// let sum = {};

// for (let i = 0; i < a.length; i++) {
//   let c = a[i].cid;
//   let amt = a[i].amount;

//   if (sum[c]) {
//     sum[c] += amt;
//   } else {
//     sum[c] = amt;
//   }
// }
// console.log(sum)
// let na=[];
// for(let key in sum){
//     na.push({key:sum[key]})
// }
// console.log(na)
// na.sort((a,b)=>a.amount-b.amout)
// console.log(na.length-1)
// console.log(na.length-2)
// console.log(na.length-3)

// let array=[1,2,3 ,4,5]
// let s=0;
// let e=array.length-1
// while(s<e){
//     [array[s], array[e]]=[array[e],array[s]];
//     s++ ;
//     e--
// }
// console.log(array)