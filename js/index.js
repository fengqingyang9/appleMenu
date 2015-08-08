window.onload = function () {
    var oDiv = document.getElementById('div1');
    var aImg = oDiv.getElementsByTagName('img');

    document.onmousemove = function (ev) {

        var ev = ev || window.event;

        for (var i = 0; i < aImg.length; i++) {
            //x和y表示图片的中心点到屏幕左边和顶部的坐标
            var x = aImg[i].offsetLeft + aImg[i].offsetWidth / 2;
            var y = aImg[i].offsetTop + aImg[i].offsetHeight / 2 + oDiv.offsetTop;

            //勾股定理
            var a = ev.clientX - x;
            var b = ev.clientY - y;

            var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

            //中间大，两边小
            var scale = 1 - c / 300;

            if (scale < 0.5) {
                scale = 0.5;//设定最小值，否则会让图片消失
            }

            aImg[i].style.width = scale * 128 + 'px';
            aImg[i].style.height = scale * 128 + 'px';

        }

    };

};
