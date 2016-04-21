//http://www.codewars.com/kata/5274d9d3ebc3030802000165/train/javascript
//问题的实质：求最小公倍数
var nbrOfLaps = function (x, y) {
  "use strict";
  if(x <= 0 || y <= 0){
    throw new Error("parameter should all be larger then 0");
  }
  let i = Math.min(x,y);
  while(i > 0){
    if(x % i == 0 && y % i == 0){
        break;
    }
    i--;
  }
  return [y/i, x/i];
}

/**
 * 求最大公约数
 */
function gcd(x,y){
  console.log(x);
  if(y == 0){
    return x;
  }
  return gcd(y ,x % y);
}

// console.log(gcd(4,6));
console.log(gcd(388,126));
