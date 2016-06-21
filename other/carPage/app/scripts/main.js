var app = {
    init: function () {

        var  a = new pageSwitch('imgs', {
                duration: 1000,
                start: 0,
                direction: 1,
                loop: true,
//                ease: /flip(?!Paper)/.test(ts) ? 'bounce' : 'ease',
                transition: 'scroll',
                mouse: true,
                mousewheel: true,
                arrowkey: true
            }),
            navs = document.getElementById('navs').getElementsByTagName('a');
        a.on('before', function (m, n) {
            navs[m].className = '';
            navs[n].className = 'active';
        });




        var i = 0, op;
        while (op = options[i++]) {
            if (op.value === ts) {
                op.selected = true;
                break;
            }
        }

        i = 0;
        for (; i < navs.length; i++) {
            !function (i) {
                navs[i].onclick = function () {
                    a.slide(i);
                }
            }(i);
        }

    }
}

