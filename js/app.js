$(function() {

    var options = {
        onReady: function($el,obj) {
            //log('On Ready',$el ,obj);
        },
        onStart: function(pos){
            //log('On Start' , pos);
        },
        onEnd: function(pos){
            //log('On End' , pos);
        }
    };

    var Slider = $('.rs-slider').rslider(options);

});



/*
|--------------------------------------------------------------------------
| Some log functions
|--------------------------------------------------------------------------
*/
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') { log.apply.call(console.log, console, newarr); } else { console.log.apply(console, newarr); } }};
