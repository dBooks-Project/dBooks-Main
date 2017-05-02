"use strict";

var menuToggeled = false;
var sidenavToggle = false;
var connectToggle = false;

$('#register').hide();

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

function LoginToggle() {
    if (!connectToggle) {
        $("#register").show();
        $("#login").hide();
        connectToggle = true;
    } else {
        $("#register").hide();
        $("#login").show();
        connectToggle = false;
    }
}

if (window.onload || window.onscroll) {
    (function () {
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
            $("body").css({
                "padding-bottom": $(".footer").totalHeight
            });
        } else {
            $(".footer").slideUp(150);
        }
    });
}
//# sourceMappingURL=main.js.map
