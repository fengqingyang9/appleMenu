window.onload = function () {
    var oDiv = document.getElementById('div1');
    var aImg = oDiv.getElementsByTagName('img');

    document.onmousemove = function (ev) {

        var ev = ev || window.event;

        for (var i = 0; i < aImg.length; i++) {
            //x��y��ʾͼƬ�����ĵ㵽��Ļ��ߺͶ���������
            var x = aImg[i].offsetLeft + aImg[i].offsetWidth / 2;
            var y = aImg[i].offsetTop + aImg[i].offsetHeight / 2 + oDiv.offsetTop;

            //���ɶ���
            var a = ev.clientX - x;
            var b = ev.clientY - y;

            var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

            //�м������С
            var scale = 1 - c / 300;

            if (scale < 0.5) {
                scale = 0.5;//�趨��Сֵ���������ͼƬ��ʧ
            }

            aImg[i].style.width = scale * 128 + 'px';
            aImg[i].style.height = scale * 128 + 'px';

        }

    };

};
