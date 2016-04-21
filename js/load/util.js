/**
 * Created by Administrator on 2016/1/11 0011.
 */
var xhr = (function(){
    function createXhr(){
        var xhr ;
        if(window.XMLHttpRequest){
            xhr = new XMLHttpRequest();
        }else if(window.ActiveXObject){
            var xhrVersions = ['MSXML2.XMLHttp','MSXML2.XMLHttp.3.0','MSXML2.XMLHttp.6.0'], i, len;
            for(i = 0, len = xhrVersions.length; i < len ; i++){
                try{
                    xhr = new ActiveXObject(xhrVersions[i]);
                    if(xhr){
                        break;
                    }
                }catch(e){
                }
            }
        }else{
            throw new Error("无法创建xhr对象");
        }
        return xhr;
    }
    function get(url,async,callback){
        var xhr = createXhr();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
                    callback&&callback(xhr.responseText);
                }else{
                    alert("请求失败，错误码为" + xhr.status);
                }
            }
        }
        xhr.open("get",url,async);
        xhr.send(null);
    }
    return {
        get:get
    }
}())

function loadScript(url,callback){
    var script = document.createElement("script");
    script.type = "text/javascript";
    //绑定加载完毕的事件
    if(script.readyState){
        script.onreadystatechange = function(){
            if(script.readyState === "loaded" || script.readyState === "complete"){
                callback&&callback();
            }
        }
    }else{
        script.onload = function(){
            callback&&callback();
        }
    }
    //script.setAttribute("defer","defer");
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

function loadXhrScript(url,async, callback){
    if(async == undefined){
        async = true;
    }
    xhr.get(url,async,function(text){
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.text = text;
        document.getElementsByTagName("head")[0].appendChild(script);
    });
}

function doSomething(length){
    var start = new Date().getTime() ;
    while((new Date().getTime() - start) < 1000 * length){}
}