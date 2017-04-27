"use strict";

var menuToggeled = false;
var sidenavToggle = false;

setInterval(function () {
    if (window.innerWidth < 992 && menuToggeled !== true) {
        $("#dropdown").hide();
    } else {
        $("#dropdown").show();
    }
}, 50);

function MenuToggle() {
    if (!menuToggeled) {
        $("#dropdown").show();
        menuToggeled = true;
    } else {
        $("#dropdown").hide();
        menuToggeled = false;
    }
}

function ActionsToggle() {
    if (!sidenavToggle) {
        sidenavToggle = true;
        $(".dash-controls").slideDown(500);
    } else {
        sidenavToggle = false;
        $(".dash-controls").slideUp(500);
    }
}

$('.livre-info').perfectScrollbar({
    "supressScrollX": true,
    "scrollYMarginOffset": "10"
});

setInterval(function () {
    var totalHeight, currentScroll, visibleHeight;

    if (document.documentElement.scrollTop) {
        currentScroll = document.documentElement.scrollTop;
    } else {
        currentScroll = document.body.scrollTop;
    }

    totalHeight = document.body.offsetHeight;
    visibleHeight = document.documentElement.clientHeight;

    if (totalHeight <= currentScroll + visibleHeight) {
        $(".footer").slideDown(150);
    } else {
        $(".footer").slideUp(150);
    }
}, 100);
//# sourceMappingURL=main.js.map
