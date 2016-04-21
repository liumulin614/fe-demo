//http://www.codewars.com/kata/51675d17e0c1bed195000001/train/javascript
"use strict";

function solution(digits){
  let i = 0, len = digits.length, item, max = 0;
  for(; i < len - 4; i++){
    item = parseInt(digits.substr(i, 5));
    max = max > item ? max : item;
  }
  return max;
}

console.log(solution("78272873898765"));
console.log(typeof solution("78272873811"));
