/**
 * Created by Administrator on 2016/3/28 0028.
 */
(function(window, undefined){

    var jQuery = (function(){
        var jQuery = function(selector, context){

        };
        //�����ľֲ������������ܶ�ܶ�������ʽ��

        //fn���ԣ���һ������ͬʱҲ��jquery
        jQuery.fn = jQuery.prototype = {
            constructor:jQuery,
            init:function(selector, context, rootjQuery){

            }
            //����������
        };

        jQuery.fn.init.prototype = jQuery.fn;

        jQuery.extend = jQuery.fn.extend = function(){};
        jQuery.extend({

        });
        return jQuery;
    })();



    window.$ = window.jQuery = jQuery;
})(window);