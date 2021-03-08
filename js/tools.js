// 提取动画函数
function move(obj,attr,target,speed,callback){
    clearInterval(obj.timer);
    // 先来根据元素目前的位置来判断是否向左还是向右
    var current = parseInt(getStyle(obj,attr));
    if(current > target){
        speed = -speed;
    };
    obj.timer = setInterval(function(){
        var oldValue = parseInt(getStyle(obj,attr));
        var newValue = oldValue + speed;

        if(speed < 0 && newValue < target || speed > 0 && newValue > target){
            newValue = target;
        };

        obj.style[attr] = newValue + "px";

        if(newValue == target){
            clearInterval(obj.timer);
            callback && callback();
        };

    },30);

    
};

function getStyle( obj , name ){
    if(window.getComputedStyle){
        return getComputedStyle(obj, null)[name];
    }else{
        return obj.currentStyle[name];
    };
};