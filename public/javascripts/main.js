"use strict";

document.onreadystatechange = function (e) {
    if (document.readyState === 'complete') {
        $("#addForm").hide();
        $("#deleteForm").hide();
        $("#editForm").hide();
    }
};

var menuToggeled = false;
var sidenavToggle = false;
var addToggle = false;
var deleteToggle = false;
var editToggle = false;

function menuToggle() {
    if (!menuToggeled) {
        menuToggeled = true;
        $(".nav-links").slideDown(500);
    } else {
        menuToggeled = false;
        $(".nav-links").slideUp(500);
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
    "supressScrollX": false,
    "scrollYMarginOffse": "10"
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

var options = {};

var ctx = document.getElementById("chart");
var chart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: options
});
//# sourceMappingURL=main.js.map
