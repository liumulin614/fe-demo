"use strict";

function f() { console.log('I am outside!'); }
(function () {
  if(false) {
    // 重复声明一次函数f
    function f() { console.log('I am inside!'); }
  }

  //f();
}());


const PI = 3.14;

global.a = 4;

console.log(global.a);
