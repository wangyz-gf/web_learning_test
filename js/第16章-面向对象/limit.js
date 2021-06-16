function LimitDrag(id) {
    drag.call(this, id);
    // drag.apply(this, [id]);
}

// LimitDrag.prototype = new drag();
// for (var funcName in drag.prototype) {
//     LimitDrag.prototype[funcName] = drag.prototype[funcName];
// }
LimitDrag.prototype = Object.create(drag.prototype);
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

}