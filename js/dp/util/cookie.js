var Cookie = (function(){
	function getCookie(name){
		var str = document.cookie;
		if(!str || str.indexOf(name + "=") < 0)
			return;
		var cookies = str.split("; ");
		for(var i=0; i<cookies.length; i++){
			var cookie = cookies[i];
			if(cookie.indexOf(name + "=") == 0){
				var value = cookie.substring(name.length + 1);
				return decodeURI(value);
			}
		}
	}
	function setCookie(name, value){
		// document.cookie = name + "=" + encodeURI(value);
	    var expires = (arguments.length > 2) ? new Date(arguments[2]) : null;
	    var path = (arguments.length > 3) ? arguments[3] : null;
	    var domain = (arguments.length > 4) ? arguments[4] : null;
	    var secure = (arguments.length > 5) ? arguments[5] : false;
	    document.cookie = encodeURI(name) + "=" + encodeURI(value) +
	      ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
	      ((path == null) ? "" : ("; path=" + path)) +
	      ((domain == null) ? "" : ("; domain=" + domain)) +
	      ((secure == true) ? "; secure" : "") + ";";
	   
	}
	return {
		setCookie:setCookie,
		getCookie : getCookie
	}



}());