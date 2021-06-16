function drag(id) {

    // console.log(this);
    this.oDiv = document.getElementById(id);
    var _this = this;
    this.oDiv.onmousedown = function (ev) {
        _this.funcDown(ev);

    };
    document.onmouseup = this.funcUp;
}


drag.prototype.funcDown = function (ev) {
    var e = ev || window.event;
    this.offsetX = e.clientX - this.oDiv.offsetLeft;
    this.offsetY = e.clientY - this.oDiv.offsetTop;

    var _this = this;
    document.onmousemove = function (ev) {
        _this.funcMove(ev);
    }
    _this.randomColor();
}

drag.prototype.funcMove = function (ev) {
    var e = ev || window.event;
    this.oDiv.style.left = e.clientX - this.offsetX + "px";
    this.oDiv.style.top = e.clientY - this.offsetY + "px";

}



drag.prototype.funcUp = function () {
    document.onmousemove = null;
}

drag.prototype.randomColor = function () {
    var str = "rgba(" + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + "," + 1 + ")";
    // console.log(str);
    return this.oDiv.style.backgroundColor = str;
}

function limitDra(id) {
    drag.call(this, id);
    // drag.apply(this, [id]);
}

// limitDra.prototype = new drag();
/* for (var funcName in drag.prototype) {
    LimitDrag.prototype[funcName] = drag.prototype[funcName];
}
LimitDrag.prototype.funcMove = function (ev) {
    var e = ev || window.event;

    var l = e.clientX - this.offsetX;
    var t = e.clientY - this.offsetY

    var limitHight = document.documentElement.clientHeight || document.body.clientHeight;
    var limitWidth = document.documentElement.clientWidth || document.body.clientWidth;
    if (l <= 0) {
        l = 0;
    }
    if (l >= limitWidth - this.oDiv.offsetWidth) {
        l = limitWidth - this.oDiv.offsetWidth;
    }
    if (t <= 0) {
        t = 0;
    }
    if (l >= limitHight - this.oDiv.offsetHight) {
        l = limitHight - this.oDiv.offsetHight
    }

    this.oDiv.style.left = l + "px";
    this.oDiv.style.top = t + "px";

} */