$(".nav-links").hide();
$(".dash-controls").hide();
$("#addForm").hide();
$("#deleteForm").hide();
$("#editForm").hide();

var menuToggeled = false;
var sidenavToggle = false;
var addToggle = false;
var deleteToggle = false;
var editToggle = false;

function menuToggle(){
    if(!menuToggeled){
        menuToggeled = true;
        $(".nav-links").slideDown(500);
    }

    else{
        menuToggeled = false;
        $(".nav-links").slideUp(500);
    }
}

function SidenavToggle(){
    if(!sidenavToggle){
        sidenavToggle = true;
        $(".dash-controls").slideDown(500);
    }

    else{
        sidenavToggle = false;
        $(".dash-controls").slideUp(500);
    }
}

function Add(){
    if(!addToggle){
        addToggle = true;
        $("#addForm").slideDown(500);
    }

    else{
        addToggle = false;
        $("#addForm").slideUp(500);
    }
}

function Delete(){
    if(!deleteToggle){
        deleteToggle = true;
        $("#deleteForm").slideDown(500);
    }

    else{
        deleteToggle = false;
        $("#deleteForm").slideUp(500);
    }
}

function Edit(){
    if(!editToggle){
        editToggle = true;
        $("#editForm").slideDown(500);
    }

    else{
        editToggle = false;
        $("#editForm").slideUp(500);
    }
}

$('.livre-info').perfectScrollbar({
    "supressScrollX": false,
    "scrollYMarginOffse": "10"
});

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // downscroll code
       $(".footer").fadeIn();
    } else {
      // upscroll code
      $(".footer").fadeOut();
   }
   lastScrollTop = st;
});