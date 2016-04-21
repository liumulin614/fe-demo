var Util = (function(){
 	function getCookie(key){
 		console.log("获取key值为"+key+"的cookie");
 	}

 	function setCookie(key,value){
 		console.log("设置key为"+key+"的cookie值为"+value);
 	}

 	var result = {};

 	result.getCookie = getCookie;

 	result.setCookie = setCookie;
 	

 	return result;
}());