//http://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript
/**
 *
 */
var arr = [1,2,3];
arr.splice(0,2);

function dirReduc(arr){
  "use strict";
  var preArr = arr, preStr,processedArr,i, len,item,itemNext;
  while(true){
     processedArr = [];
     preStr = preArr.join("");
     i = 0 , len = preArr.length;
     for(; i < len;){
       item = preArr[i];
       itemNext = i == len-1 ? "" : preArr[i + 1];
       if((item =="NORTH" && itemNext == "SOUTH")||(item =="SOUTH" && itemNext == "NORTH")||(item =="WEST" && itemNext == "EAST")||(item =="EAST" && itemNext == "WEST")){
          i+=2;
       }else{
         processedArr.push(item);
         i++;
       }
     }
     if(preStr == processedArr.join("")){
       break;
     }else{
       preArr = processedArr;
     }
  }
  return processedArr;
}

var plan = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];
var plan1 = ["NORTH", "SOUTH", "EAST", "WEST"];
var plan2 = ["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"];
var plan3 = ["NORTH", "WEST", "SOUTH", "EAST"];
console.log(dirReduc(plan));
console.log(dirReduc(plan1));
console.log(dirReduc(plan2));
console.log(dirReduc(plan3));
