var EventUtil = (function(){
	return {
		addHandler:function(element,eventType,callback){
			if(element.attachEvent){
				element.attachEvent("on" + eventType, callback);
			}else if(element.addEventListener){
				element.addEventListener(eventType,callback,false);
			}else{
				element["on" + eventType] = callback;
			}
		},
		removeHandler:function(element,eventType){
			if(element.detachEvent){
				element.detachEvent("on" + eventType);
			}else if(element.removeEventListener){
				element.removeEventListener(eventType);
			}else{
				element["on" + eventType] = null;
			}
		},
		getEvent : function(event){
			return event || window.event;
		},
		getTarget : function(event){
			event = this.getEvent(event);
			return event.target || event.srcElement;
		},
		preventDefault : function(event){
			event = this.getEvent(event);
			if(event.preventDefault){
				event.preventDefault;
			}else{
				event.returnValue = false;
			}
		},
		stopPropagation : function(){
			event = this.getEvent(event);
			if(event.stopPropagation){
				event.stopPropagation();
			}else{
				event.cancelBubble = true;
			}
		}
	}
}());