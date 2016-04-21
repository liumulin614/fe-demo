var log = console.log;

var array = [1,2,3,45,3,2,1];

//reduce统计一个数组不重复的元素的数量
var result = array.reduce(function(previous, current){
	if(previous.indexOf(current) < 0){
		previous.push(current);
	}
	return previous;
},[]).length

//reduce统计各个单词出现的数量
var statistic = array.reduce(function(pre, current){
	pre[current] = (pre[current] + 1) || 1;
	return pre;
},{})

log(statistic);