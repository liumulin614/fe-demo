"use strict";

//Proxy的简单使用
var obj = new Proxy({},{
  get:function(target, key , recevier){
    return Reflect.get(target, key,recevier);
  },
  set:function(target, key, value, receiver){
    return Reflect.set(target, key, value, receiver);
  }
});
obj.count = 1;

++obj.count;

// console.log(obj.count);


//Proxy作为其他对象的原型对象
var proxy = Object.create(obj);

proxy.count = 6;

console.log(proxy.count);
