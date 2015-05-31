var table = document.getElementById('tbl');
var thead = table.tHead.cloneNode(true);
table.insertBefore(thead, table.tHead);
thead.className = "afix";
thead.nextSibling.className = "static";

var update = function (ev) {
    var scrollTop = (window.pageYOffset || document.documentElement.scrollTop)
    if (scrollTop > table.offsetTop && scrollTop < (table.offsetTop + table.offsetHeight)) {
        if (table.className != "afix" || ev.type != 'scroll') {
            table.className = "afix";
            var c = thead.rows[0].cells, c_ = thead.nextSibling.rows[0].cells;
            for (var i = 0, l = c.length; i < l; i++)
                c[i].style.width = c_[i].offsetWidth + 'px';
        }
    } else if (table.className != "static") {
        table.className = "static";
        var c = thead.rows[0].cells;
        for (var i = 0, l = c.length; i < l; i++)
            c[i].style.width = '';
    };
}

window.onscroll = window.onresize = thead.onclick = update;
update();