//Task 1 
// function reverse() {
//   let str = prompt();

//   let reverse = str.split("").reverse();

//   console.log(reverse);
// }
// reverse();
// Task 2 
// function pow(number) {
//   if (number <= 0) {
//     return false;
//   }

//   while(number%3===0){
//   number =number/3
// }
// return number===1}

// console.log(pow(27));
// task 3 
// function atleast2(nums) {
//   for (let i = 0; i < nums.length; i += 1) {
//     let sorted = nums.sort();

//     if (sorted[i] === sorted[i + 1]) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(atleast2([1, 2, 5, 3, 8, 6,7]));

// task 4 
// let digits = [9]

// let sum = digits.join('')

// sum=parseFloat(sum)+1
// console.log(sum.toString().split(''));

// task 5 
// function findIntersection(nums1,nums2){
//   const output = nums1.filter((digit)=>nums2.includes(digit))
//   return output;
//  }
//  console.log(findIntersection([2,2,2,4,5],[1,2,2,3,4,4]))

// task 6 
// function findcommons(str) {
//   if (str.length === 0) {
//     return "";
//   }
//   const first = str[0];
//   let pref = "";
//   let result = "";
//   for (let i = 0; i < first.length; i += 1) {
//     pref = pref + first[i];
//     let find = str.filter((a) => a.includes(pref));
//     if (find.length === str.length) {
//       result = pref;
//     }
//   }
//   return result;
// }

// console.log(
//   findcommons(["findallaower", "findally", "findalllurs", "findallllblaa"])
// );

// task 7 
// function exceltoNums (columName){
//     let columNum = "";
//     columName=columName.toUpperCase();
//     for(let i =0;i<columName.length;i++){
//         let chartonum = columName.charCodeAt(i)-64;
//         // console.log(chartonum)
//         columNum = columNum*26+chartonum
        
//     }
//     return columNum;
// }

// console.log(exceltoNums("a"))
// task 8 
// function romantoInt(roman) {
//     const defaults = {
//       I: 1,
//       V: 5,
//       X: 10,
//       L: 50,
//       C: 100,
//       D: 500,
//       M: 1000,
//     };
//     let result = 0;
  
//     for (let i = 0; i < roman.length; i++) {
//       let currentIndex = roman[i];
//       let currentNum = defaults[currentIndex];
//       let nextIndex = roman[i + 1];
//       let nextNum = defaults[nextIndex]; 
//       if (nextNum > currentNum) {
//         result = result + nextNum - currentNum;
//         i++;
//       } else {
//         result = result + currentNum;
//       }
//     }
//     return result;
//   }
  
//   console.log(romantoInt("VIIC"));