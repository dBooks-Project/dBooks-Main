"use strict";

var menuToggeled = false;
var sidenavToggle = false;

if (window.innerWidth > 992) {
    $("#toggle").hide();
    $("#dropdown-links").hide();
    $("#normal-links").show();
} else {
    $("#toggle").show();
    $("#dropdown-links").hide();
    $("#normal-links").hide();
}

window.onresize = function () {
    if (window.innerWidth > 992) {
        $("#toggle").hide();
        $("#dropdown-links").hide();
        $("#normal-links").show();
    } else {
        $("#toggle").show();
        $("#dropdown-links").hide();
        $("#normal-links").hide();
    }
};

function MenuToggle() {
    if (!menuToggeled) {
        $("#dropdown-links").slideDown();
        menuToggeled = true;
    } else {
        $("#dropdown-links").slideUp();
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
//# sourceMappingURL=main.js.map
