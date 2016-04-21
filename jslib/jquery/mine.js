/**
 * Created by Administrator on 2016/3/28 0028.
 */
(function(window, undefined){

    var jQuery = (function(){
        var jQuery = function(selector, context){

        };
        //其他的局部变量（包括很多很多正则表达式）

        //fn属性，是一个对象，同时也是jquery
        jQuery.fn = jQuery.prototype = {
            constructor:jQuery,
            init:function(selector, context, rootjQuery){

            }
            //其他的属性
        };

        jQuery.fn.init.prototype = jQuery.fn;

        jQuery.extend = jQuery.fn.extend = function(){};
        jQuery.extend({

        });
        return jQuery;
    })();



    window.$ = window.jQuery = jQuery;
})(window);