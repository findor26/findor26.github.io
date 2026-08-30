let awser = function () { }
awser.log = function (text){
    var x = text;
    console.log("来自网站的消息：" + x);
}

awser.error = function (text){
    var c = text;
    console.error("控制台有一个错误：" + c);
}

awser.warn = function (text){
    var v = text;
    console.warn("控制台有一个警告：" + v);
}
