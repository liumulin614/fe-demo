/**
 * Created by Administrator on 2016/3/25 0025.
 */
//importScripts("worker2.js","worker3.js");
console.log("start of worker1");

self.onmessage = function(event){
    //对数组来个升序冒泡排序
    var array = event.data;s
    if(Object.prototype.toString.call(array).toLowerCase() === "[object array]"){
        var i = 0, j = 0, len = array.length, temp;
        for(i = 0; i < len; i++){
            for(j = 1 ; j < len - i ; j++){
                if(array[j-1] > array[j]){
                    temp = array[j - 1];
                    array[j - 1] = array[j];
                    array[j] = temp;
                }
            }
        }
    }
    self.postMessage(array);
}


console.log("end of worker1");