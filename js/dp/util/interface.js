var Interface = function(name,methods){
	if(arguments.length != 2){
		throw new Error("Interface constructor was called with " + 
			arguments.length +"arguements,but expected 2");
	}
	this.name = name;
	this.methods = [];
	var len = methods.len, i = 0 , method;
	for(; i < len ; i++){
		method = methods[i];
		if(typeof method !== "string"){
			throw new Error("Interface method name type expected string, but is" + (typeof method));
		}
		this.methods.push(method);
	}
}
/**
 * [ensureInterfaceApis description]
 * @return {[type]} [description]
 */
Interface.ensureInterfaceApis = function(obj){
	if(arguements.length < 2){
		throw new Error("method arguements length is " + arguements.length + ", but expected at least 2");
	}
	var i = 1, j = 0 , method,methods;
	for(; i < arguements.length; i++){
		methods = arguements[i].methods;
		for(; j < methods.length ; j++){
			method = methods[j];
			if(!obj[method] || typeof obj[method] !== "function"){
				throw new Error("Instance expected to implement method " + method);
			}
		}
	}
}