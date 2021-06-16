// 随机验证码（纯数字）
function codeTestNum(n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        var num = parseInt(Math.random() * 10);
        arr.push(num);
    }
    return arr.join("");
}


// 随机验证码（含有英文）
function codeTextNumEng(n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        var num = parseInt(Math.random() * 123);
        if (num >= 0 && num <= 9) {
            arr.push(num);
        } else if (num <= 122 && num >= 97 || num >= 65 && num <= 90) {
            arr.push(String.fromCharCode(num));
            // 它不能作为您已创建的 String 对象的方法来使用。因此它的语法应该是 String.fromCharCode()，而不是 myStringObject.fromCharCode()。
        } else {
            i--
        }
    }
    return arr.join("");
}


// 判断一个数是奇数还是偶数
function oddOrEven(n) {
    if (n % 2 == 0) {
        return "偶数";
    } else {
        return "奇数";
    }
}


// 判断是平年还是闰年
function ordinaryOrLeap(n) {
    if (n % 4 == 0 && n % 100 != 0 || n % 400 == 0) {
        return "润年";
    } else {
        return "平年";
    }
}

// 输入两个数，求两个数的最小公倍数 （能够同时被两个数整除的最小数）
function commonMultiple(num1, num2) {
    var max = num1 > num2 ? num1 : num2;
    while (1) {
        if (max % num1 == 0 && max % num2 == 0) {
            break;
        }
        max++;
    }
    return max;
}

// 输入两个数，求两个数的最大公约数（能够同时整除两个数的最大数）
function commonDivisor(num1, num2) {
    var min = num1 > num2 ? num2 : num1;
    while (1) {
        if (num1 % min == 0 && num2 % min == 0) {
            break;
        }
        min--;
    }
    return min;
}

// 冒泡排序
function bubbleSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - (i + 1); j++) {
            if (arr[j] > arr[j + 1]) {
                var tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}

// 字符串逆序
function reverseStr(str) {
    var arr = str.split(" ");
    arr.reverse();
    return arr.join(" ");;
}

// 对称数组
function symmetricArray(arr) {
    var newArr = arr.concat();
    for (var i = newArr.length - 1; i >= 0; i--) {
        newArr.push(newArr[i]);
    }
    return newArr;
}

//计算一段字符串中有多少个英文，以非字母字符分割
function countOfWord(str) {
    var count = 0;
    for (var i = 0; i < str.length - 1; i++) {
        if (isABC(str[i]) && !isABC(str[i + 1])) {
            count++
        }
    }
    return count;
}

function isABC(word) {
    if (word > "a" && word <= "z" || word >= "A" && word <= "Z") {
        return true;
    } else {
        return false;
    }
}

// 实现一个字符串在另一个字符串出现的次数
function countOfStr(subStr, supStr) {
    var newArr = subStr.split(supStr);
    return newArr.length - 1;
}

// 判断是否符合相应的邮箱格式，这里以@1000phone.com
function isEmail(email) {
    var index = email.indexOf("@");
    // console.log(index);
    if (index == -1) {
        return false;
    } else {
        var endStr = email.substring(index);
        // console.log(endStr);
        if (endStr != "@1000phone.com") {
            return false;
        } else {
            var useName = email.substring(0, index);
            var isYes = true;
            for (var i = 0; i < useName.length; i++) {
                if (!isEDF(useName[i])) {
                    isYes = false;
                    break;
                }
            }
            return isYes;
        }
    }
}

function isEDF(num) {
    if (num >= "a" && num <= "z" || num >= "A" && num <= "Z" || num >= 0 && num <= 9 || num == "_") {
        return true;
    }
    return false;
}


// 计算两个时间之间的天数；（传入格式:xxxx-xx-xx或者xxxx/xx/xx）;
function countOfDate(day1, day2) {
    var d1 = new Date(day1);
    var d2 = new Date(day2);
    var time1 = d1.getTime();
    var time2 = d2.getTime();

    var time = Math.abs(time1 - time2);
    return time / 1000 / 24 / 3600;
}

//  获取N天后的时间
function afterOfDate(n) {
    var date = new Date();
    var d1 = date.getDate();
    date.setDate(d1 + n);
    return date;

}


// 自定义时间
function showTime() {
    var d = new Date();
    // d.setFullYear(2019);
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var date = d.getDate();
    var week = d.getDay();
    week = numOfChinese(week);

    var hour = doubleNum(d.getHours());
    var minute = doubleNum(d.getMinutes());
    var seconds = doubleNum(d.getSeconds());

    var str = year + "年" + month + "月" + date + "日" + " 星期" + week + hour + ":" + minute + ":" + seconds;
    return str;
}

function numOfChinese(num) {
    var arr = ["日", "一", "二", "三", "四", "五", "六"];
    return arr[num];
}


function doubleNum(num) {
    if (num < 10) {
        return "0" + num;
    } else {
        return num;
    }
}

// 自定义byClassName方法
function elementsByClassName(node, classStr) {
    var nodes = node.getElementsByTagName("*");
    var arr = [];
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].className === classStr) {
            arr.push(nodes[i]);
        }
    }
    return arr
}

// 获取当前样式
function getStyle(node, cssStyle) {
    return node.currentStyle ? node.currentStyle[cssStyle] : getComputedStyle(node)[cssStyle]

}

// 随机颜色函数
function randomColor() {
    var str = "rgba(" + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + "," + 1 + ")";
    return str;
}

// 获取事件对象（在事件中传入一个参数即可），以点击事件为例子
window.onload = function () {
    var onClick = document.getElementById("node");
    onClick.onclick = function (ev) {
        var e = ev || window.event; //这串代码是为了做ie8以下的兼容
        alert(e);
    }
}


// 阻止事件冒泡
function stopBubble(e) {
    if (e.stopPropagation) {
        e.stopPropagation;
    } else {
        e.cancelBubble = true;
    }
}

// 阻止浏览器默认行为(跨浏览器)
function preDef(e) {
    var e = ev || window.event;
    if (e.preventDefault) {
        e.preventDefault
    } else {
        e.returnValue = false;
    }
}

// 鼠标拖拽方法(限制出界)
function drg(node) {
    node.onmousedown = function (ev) {
        var e = ev || window.event;
        var offsetX = e.clientX - this.offsetLeft;
        var offsetY = e.clientY - this.offsetTop;

        document.onmousemove = function (ev) {
            var e = ev || window.event;
            var l = e.clientX - offsetX;
            var t = e.clientY - offsetY;
            var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
            if (l <= 0) {
                l = 0;
            }
            if (l >= clientWidth - node.offsetWidth) {
                l = clientWidth - node.offsetWidth;
            };
            var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
            if (t <= 0) {
                t = 0
            }
            if (t >= clientHeight - node.offsetHeight) {
                t = clientHeight - node.offsetHeight;
            }
            node.style.left = l + "px";
            node.style.top = t + "px";
        }
    }
    node.onmouseup = function () {
        document.onmousemove = null;
    }
}

// 判断是否为触发对象
function isTarget(ev) {
    var e = ev || window.event;
    var target = e.target || window.event.srcElement;
    return target;
}

// 事件监听的兼容
// 添加监听器
function addEvent(node, eventType, funcName) {
    if (node.addEventListener) {
        node.addEventListener(eventType, funcName, false);
    } else {
        node.attachEvent("on" + eventType, funcName);
    }
}
// 移除监听器
function removeEvent(node, eventType, funcName) {
    if (node.removeEventListener) {
        node.removeEventListener(eventType, funcName, false);
    } else {
        node.detachEvent("on" + eventType, funcName);
    }
}

// 物体运动函数
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


// ajax封装post、get提交
function $ajax({
    method = "get",
    url,
    data,
    success,
    fail
}) {

            // 创建对象
    var xhr = null;
    try {
        xhr = new XMLHttpRequest;
    } catch {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

            //转换数据输入
    if (data) {
        data = queryString(data);
    }

            // 判断url格式
    if (method == "get" && data) {
        url = url + "?" + data;
    }

             // open打开文件
    xhr.open(method, url, true);

             // 判断send方式
    if (method == "get") {
        xhr.send();
    } else {
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhr.send(data);
    }

                // 请求响应
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                if (success) {
                    success(xhr.responseText);
                }
            } else {
                if (fail) {
                    fail("error:" + xhr.status);
                }
            }
        }
    }

}
// 转换数据输入（数据两种方式"?value=v&"(search) & value=v (queryString)）
function queryString(obj) {
    var str = "";
    for (var attr in obj) {
        str += attr + "=" + obj[attr] + "&";
    }
    return str.substring(0, str.length - 1)
}