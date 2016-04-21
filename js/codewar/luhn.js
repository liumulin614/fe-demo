"use strict";

/**
 * http://www.codewars.com/kata/5418a1dd6d8216e18a0012b2/train/javascript
 * @param  {[type]} n [description]
 * @return {[type]}   [description]
 */
function validate(n){
  let array = String(n).trim().split("");
  let num = array.length & 1;
  let resultArray = [];
  let sum = 0;
  array.forEach(function(item, index){
  	item = parseInt(item);
  	//console.log(index & 1);
    let value = (index & 1) === num ? (item *2 > 9 ? (item * 2 -9) : item *2) : item;
    console.log(value);
    sum += value;
  })
  console.log(sum);
  return !(sum%10);
}



