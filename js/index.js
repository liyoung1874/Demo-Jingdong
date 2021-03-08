window.onload = function(){
    var wallMain = document.getElementById("wall-main");
    var index = 1;
    var imgList = wallMain.children;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    for(i=0; i<imgList-2; i++){
        
    }
    prev.onclick = function () { 
        // console.log(index);
        // move(wallMain, "left", 711, 100, function () {});
    }
    
    // console.log(imgList.length);
    /* for(i=0; i<imgList.length; i++){
        
        var timer = setInterval(function(){
            move(imgList, "left", 711, 100,function(){})
        },1500)
    } */
    
}