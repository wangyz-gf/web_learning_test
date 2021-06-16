console.log("加载成功");


require(["../demo/add", "../demo/mul"], function (addObj, mulObj) {
    var res = addObj.add(10, 20);
    alert(res);
})