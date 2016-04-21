/**
 * Created by Administrator on 2016/3/28 0028.
 */

/**
 * 打印前n个fibonacci数
 * @param n
 */
function fibonacci(n){
    var m = parseInt(n);
    if(!m){
        throw new TypeError("Parameter must be Integer or can be parsed int Integer");
    }
    if(m < 1){
        throw new RangeError("Parameter n should greater than 0");
    }
    //先打印第一个
    console.log(1);
    var prevv = 0, prev = 1,current;
    for(var i = 2; i <= m; i++) {
        current = prevv + prev;
        console.log(current);
        prevv = prev;
        prev = current;
    }
}



function add(){
    var len = arguments.length,
        args = Array.prototype.slice.call(arguments, 0);
    if(len < 2){
        return function(){
            argsT =  Array.prototype.slice.call(arguments, 0);
            return add.apply(null, args.concat(argsT));
        }
    }else{
        return arguments[0] + arguments[1];
    }
}

console.log(add(3)(1));