var a_idx = 0;
jQuery(document).ready(function ($) {
    $("body").click(function (e) {
        var a = new Array("矛盾", "虚伪", "贪婪", "欺骗", "幻想", "疑惑", "简单", "善变", "好强", "无奈", "孤独", "脆弱", "忍让", "气愤", "复杂", "讨厌");
        var $i = $("<span/>").text(a[a_idx]);
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 99999,
            "top": y - 28,
            "left": x - a[a_idx].length * 8,
            "position": "absolute",
            "color": "#daa520"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        }, 1500, function () {
            $i.remove();
        });
        a_idx = (a_idx + 1) % a.length;
    });
});