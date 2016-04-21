(function(window){
	var helper = {
		isArray:function(obj){
			return Object.prototype.toString.call(obj) === "[object Array]";
		}
	}
	
	var _$ = function(selector){
		if(selector.search(/^#*$/)){
			this.element = document.getElementById(selector.substring(1));
		}
		return this;
	}

	_$.prototype.hide = function(){
		if(this.element){
			var ele;
			if(helper.isArray(this.element)){
				ele = this.element[0];
			}else{
				ele = this.element;
			}
			ele.style.display = "none";
		}
	}



	window.$ = function(selector){
		return new _$(selector);
	}
}(window))