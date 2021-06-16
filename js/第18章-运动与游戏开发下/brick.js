// 界面加载
window.onload = function () {
    var box = document.getElementById("box");
    var ball = document.getElementById("ball");
    var slider = document.getElementById("slider");

    console.log("jiazaijiemian")

    // 创建砖块
    createBrick(60);
    // 小球运动

    ballMove();
    // 滑块移动
    sliderMove(slider);

}
// 创建砖块
function createBrick(n) {
    var brick = document.getElementById('brick');

    for (var i = 0; i < n; i++) {
        var newBrick = document.createElement("div");
        newBrick.style.backgroundColor = randomColor();
        brick.appendChild(newBrick);
    }
    var oBrick = brick.getElementsByTagName("div");

    for (var i = 0; i < oBrick.length; i++) {
        oBrick[i].style.left = oBrick[i].offsetLeft + "px";
        oBrick[i].style.top = oBrick[i].offsetTop + "px";

    }
    // 避免砖块重叠
    for (var i = 0; i < oBrick.length; i++) {
        oBrick[i].style.position = "absolute";

        // console.log(oBrick[i].style.left + "," + oBrick[i].style.top);

    }
}

// 小球运动
function ballMove() {
    var ball = document.getElementById("ball");
    var brick = document.getElementById('brick');
    var slider = document.getElementById("slider");

    var oBrick = brick.getElementsByTagName("div");


    //给小球一个随机速度    
    var speedX = parseInt(Math.random() * 4) + 3;
    var speedY = -(parseInt(Math.random() * 3) + 5);


    // 限制小球在方块内运动
    setInterval(() => {
        ball.style.left = ball.offsetLeft + speedX + 'px';

        ball.style.top = ball.offsetTop + speedY + 'px';
        console.log(ball.offsetTop)
        if (ball.offsetLeft >= 580 || ball.offsetLeft <= 0) {
            speedX *= -1;
        }
        if (ball.offsetTop <= 0) {
            speedY *= -1;
        }
        if (ball.offsetTop >= 585) {
            slider.style.left = 250 + "px";
            ball.style.top = 550 + "px";
            ball.style.left = 290 + "px"
            speedY *= -1;

            alert("game over")
            window.location.reload();

        }
        // 检测碰撞
        if (nodeCollision(slider, ball)) {
            speedY *= -1;
        }
        for (var i = 0; i < oBrick.length; i++) {
            if (nodeCollision(oBrick[i], ball)) {
                speedY *= -1;
                brick.removeChild(oBrick[i]);
                break;
            }
        }


    }, 30);


}
// 滑块移动
function sliderMove(node) {

    // var slider = document.getElementById("slider");

    node.onmousedown = function (ev) {
        // console.log("点击滑块")
        var e = ev || window.event;
        var offsetX = e.clientX - node.offsetLeft;
        document.onmousemove = function (ev) {
            // console.log("放开滑块")
            var e = ev || window.event;
            var l = e.clientX - offsetX;

            if (l <= 0) {
                l = 0;
            }
            if (l >= 500) {
                l = 500;
            }
            node.style.left = l + "px";
        }
    }
    document.onmouseup = function () {
        // console.log("leave")
        document.onmousemove = null;
    }
}

// 两物体碰撞
function nodeCollision(node1, node2) {
    var l1 = node1.offsetLeft;
    var r1 = node1.offsetLeft + node1.offsetWidth;
    var t1 = node1.offsetTop;
    var b1 = node1.offsetTop + node1.offsetHeight;

    var l2 = node2.offsetLeft;
    var r2 = node2.offsetLeft + node2.offsetWidth;
    var t2 = node2.offsetTop;
    var b2 = node2.offsetTop + node2.offsetHeight;

    if (l1 > r2 || r1 < l2 || t1 > b2 || b1 < t2) {
        return false;
    } else {
        return true;
    }

}

// 随机背景颜色
function randomColor() {
    var str = "rgba(" + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + "," + 1 + ")";
    return str;
}