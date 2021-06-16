function tagSwitch(id) {
    var node = document.getElementById(id);
    this.oBtn = node.getElementsByTagName("button");
    this.oBox = node.getElementsByTagName("div");

    for (var i = 0; i < this.oBtn.length; i++) {
        var _this = this;
        this.oBtn[i].index = i;
        this.oBtn[i].onclick = function () {
            _this.funcOnclick(this);
        }
    }
}
tagSwitch.prototype.funcOnclick = function (oBtn1) {
    for (var i = 0; i <
        this.oBtn.length; i++) {
        this.oBox[i].style.display = "none";
        this.oBtn[i].className = "";
    }
    oBtn1.className = "active";
    this.oBox[oBtn1.index].style.display = "block";
}
window.onload = function () {
    new tagSwitch("div1");
}

