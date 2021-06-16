function startMove(node, attrObj, complete) {
    clearInterval(node.timer);
    node.timer = setInterval(function () {
        var isEnd = true;
        for (var attr in attrObj) {
            // 假设全部运动结束
            var iTarget = attrObj[attr];
            var iCur = null;
            if (attr == "opacity") {
                iCur = parseInt(parseFloat(getCurStyle(node, "opacity")) * 100);
            } else {
                iCur = parseInt(getCurStyle(node, attr));
            }


            var speed = (iTarget - iCur) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            if (attr == "opacity") {
                iCur += speed;
                node.style[attr] = iCur / 100;
                node.style.filter = `alpha(opacity = ${iCur})`;
            } else {
                node.style[attr] = iCur + speed + "px";
            }
            if (iCur != iTarget) {
                isEnd = false;
            }
        }
        if (isEnd) {
            clearInterval(node.timer);
            if (complete) {
                complete.call(node);
            }
        }


    }, 30)
}

// 获取当前样式
function getCurStyle(node, cssStyle) {
    return node.currentStyle ? node.currentStyle[cssStyle] : getComputedStyle(node)[cssStyle];
}