function add(a,b){
	return a + b;
}



function curry(fn){
	var len = fn.length;
	var args = Array.prototype.slice.call(arguments, 1);
	return function func(){
		args = args.concat(Array.prototype.slice.call(arguments, 0));
		if(args.length < len){
			return func;
		}else{
			return fn.apply(null, args);
		}
	}
}
// console.log(curry(add)(1)(2));

var array = [1,2,3,4,1];

// console.log(Math.max.apply(null, array));

var re = array.map(function(item,index){
	return function(){
		console.log(item);
	}
})

re[2]();

