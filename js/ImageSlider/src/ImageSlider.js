/**
 * Created by TracyLin on 2016/1/6 0006.
 * 1. 首先初始化一些参数，
 *
 *
 */
(function(window){
    if(typeof window.ImageSlider !== "object"){
        window.ImageSlider = {};
    }
    /**
     * 入口
     * @param id
     * @param options
     */
    ImageSlider.init = function(id,options){
        var wrapper = Dom.getElementById(id);
        if(!wrapper){
            return;
        }
        var params = Util.initParams(wrapper, options);
        params.step = 80;
        var leftButton = Dom.getElementByClass("slider-left",wrapper),
            rightButton = Dom.getElementByClass("slider-right",wrapper);
        var i = 0,index =0;

        console.log(params);
        EventHandler.addHandler(leftButton,"click",function(){
            if(index == params.itemCount - 1){
                index = 0;
            }else{
                index ++;
            }
            move();
        })

        function move(){
            var nowLeft = parseInt(params.sliderContainer.style.left.replace("px","") || 0);
            var targetLeft = -(params.width * index);
            console.log(nowLeft);
            console.log(index);
            if(nowLeft == targetLeft){
                return;
            }
            var type = nowLeft < targetLeft ? "right" : "left";
            if(type == "left"){
                var nextLeft = nowLeft - params.step < targetLeft ? targetLeft : nowLeft - params.step;
                params.sliderContainer.style.left = nextLeft + "px";
                setTimeout(move);
            }else{
                var nextLeft = nowLeft + params.step > targetLeft ? targetLeft : nowLeft + params.step;
                params.sliderContainer.style.left = nextLeft + "px";
                setTimeout(move);
            }
        }




    }

    /**
     * 工具模块
     * @type {{initParams: Function, initUIParams: Function, redrawUI: Function}}
     */
    var Util = {
        /**initialize the options from the client
         * @param options
         */
        initParams:function(wrapper, options){
            var params = {};
            //用户自定义参数
            params.timeout = options.timeout || 3000;
            params.autoSlide = options.autoSlide !== undefined ? options.autoSlide : true;
            params.autoDots = options.autoDots != undefined ? options.autoDots : true;
            //UI参数
            Util.initUIParams(wrapper, params)
            Util.redrawUI(wrapper,params);
            return params;
        },
        initUIParams:function(wrapper, params){
            //这个方法的作用是初始化DOM元素的相关属性，比如为slider-container设置好宽度，为slider-item设置宽度和浮动等
            var items = Dom.getElementsByClass("slider-item");
            params.items = items;
            params.itemCount = items.length;
            params.width = wrapper.offsetWidth;
            params.height = wrapper.offsetHeight;
        },
        redrawUI:function(wrapper, params){
            //重新创建一个container，把item都包含进来
            var sliderContainer = document.createElement("div");
            sliderContainer.className = "slider-item-container";
            sliderContainer.style.height = params.height+"px";
            sliderContainer.style.width = params.width * params.itemCount+"px";
            sliderContainer.style.position = "relative";
            //再新创建一个documentFragment
            var fragment = document.createDocumentFragment(),i =0,len = params.itemCount,item;
            //alert(params.items[0].style.styleFloat = "right");
            for(; i < len ; i++){
                item = params.items[i];
                item.style.styleFloat = "left";
                item.style.cssFloat = "left";
                item.style.height = params.height + "px";
                item.style.width = params.width + "px";
                fragment.appendChild(item);
            }
            sliderContainer.appendChild(fragment);
            wrapper.insertBefore(sliderContainer,wrapper.childNodes[0]);
            params.sliderContainer = sliderContainer;
        }
    }

    //DOM操作模块
    var Dom = {
        getElementByClass:function(className, root){
            if(!className){
                return;
            }
            if(!root){
                root = document.body;
            }
            var result,childs,node,stack = [], i,len;
            if(root.querySelector){
                result = root.querySelector("." + className);
            }else{
                //迭代遍历DOM树，并查找指定的className的元素
                while(root){
                    if(Dom.getElementNode(root) && Dom.checkClass(className, root.className)){
                        result = root;
                        break;
                    }
                    childs = root.childNodes;
                    len = childs.length;
                    if(len > 0){
                        for( i = 0; i < len ; i++){
                            node = Dom.getElementNode(childs[i]);
                            if(node){
                                stack.push(node);
                            }
                        }
                    }else{
                        if(stack.length < 1){
                            break;
                        }
                    }
                    root = stack.pop();
                }
            }
            return result;
        },
        getElementsByClass:function(className, root){
            if(!className){
                return;
            }
            if(!root){
                root = document.body;
            }
            var result=[],childs,node,stack = [], i,len;
            if(root.querySelectorAll){
                childs = root.querySelectorAll("." + className);
                for(i=0,len =childs.length; i < len; i++){
                    result.push(childs[i]);
                }
            }else{
                //迭代遍历DOM树，并查找指定的className的元素
                while(root){
                    if(Dom.getElementNode(root) && Dom.checkClass(className, root.className)){
                        result.push(root);
                    }
                    childs = root.childNodes;
                    len = childs.length;
                    if(len > 0){
                        for( i = 0; i < len ; i++){
                            node = Dom.getElementNode(childs[i]);
                            if(node){
                                stack.push(node);
                            }
                        }
                    }else{
                        if(stack.length < 1){
                            break;
                        }
                    }
                    root = stack.pop();
                }
            }
            return result;
        },
        getElementNode:function(node){
            if(node.nodeType == 1){
                return node;
            }
        },
        checkClass:function(targetClass, sourceClass){
            var result = false, classes = sourceClass.split(/\s+/), i,len;
            for(i=0,len=classes.length; i < len; i++){
               if(classes[i] == targetClass){
                   result = true;
                   break;
               }
            }
            return result;
        },
        getElementById:function(id){
            return document.getElementById(id);
        }
    }

    /**
     * JS动画实现模块
     * @type {{}}
     */
    var Animation = {
    }

    /**
     * EventHandler模块主要负责事件的绑定和解绑等操作
     * @type {{addHandler: Function, removeHandler: Function, getEvent: Function, getTarget: Function, stopProgapation: Function, preventDefault: Function}}
     */
    var EventHandler = {
        addHandler:function(element, event, handler){
            if(element.addEventListener){
                element.addEventListener(event,handler,false);
            }else if(element.attachEvent){
                element.attachEvent("on" + event, handler);
            }else{
                element["on" + event] = handler;
            }
        },
        removeHandler:function(element, event){
            if(element.removeEventListener){
                element.removeEventListener(event);
            }else if(element.detachEvent){
                element.detachEvent("on" + event);
            }else{
                element['on' + event] = null;
            }
        },
        getEvent:function(event){
            return event || window.event;
        },
        getTarget:function(event){
            return event.target || event.srcElement;
        },
        stopProgapation:function(event){
            if(event.stopProgapation){
                event.stopPropagation();
            }else{
                event.cancelBubble = true;
            }
        },
        preventDefault:function(event){
            if(event.preventDefault){
                event.preventDefault();
            }else{
                event.returnValue = false;
            }
        }

    }

}(window))
