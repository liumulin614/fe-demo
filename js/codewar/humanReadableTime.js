//http://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
"use strict";
function humanReadable(seconds) {
  let array = ['00','00','00'];
  array.reduce(function(seconds, current, index,arr){
    let tmp = index == arr.length-1 ? seconds : seconds % 60;
    arr[index] = tmp > 9 ? tmp+"" : "0"+tmp;
    return Math.floor(seconds / 60);
  }, seconds);
  return array.reverse().join(":");
}

function anotherHumanReadable(seconds){
  var i = 0, ret="",tmp;
  for(; i < 3; i++){
    tmp = i == 2 ? seconds : seconds % 60;
    ret = (tmp > 9 ? tmp+"" : "0"+tmp) + ":" + ret;
    seconds = Math.floor(seconds / 60);
  }
  return ret.slice(0,-1);
}
// console.log(anotherHumanReadable(5));
// console.log(humanReadable(359999));
// console.log(anotherHumanReadable(359999));
// console.log(anotherHumanReadable(86399));
