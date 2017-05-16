//Client-size Global JS
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

window.onresize = () => {
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

function Confirmation(id) {
    var confirmation = confirm("Voulez-vous vraiment supprimer ce livre?");
    if (confirmation == true) {
        window.location.replace("/supprimer/" + id);
    }
    else {
        
    }
}

function Validate(field, e){
    var minPassLength = 8;
    switch(field){
        case "username":
        if(Username($(e).val())){
            $("#usernamebar").css({"width": "100%"});
            $("#usernamebar").addClass("bg-success");
        }
        else {
            $("#usernamebar").css({"width": "0%"});
            $("#usernamebar").removeClass("bg-success");
        }
        break;
        case "password":
        if($(e).val().length >= minPassLength){
            $("#passwordbar").css({"width": "100%"});
            $("#passwordbar").addClass("bg-success");
            Validate("verification", $("verificationpassword"));
        }
        else{
            $("#passwordbar").css({"width": 100 / minPassLength * $(e).val().length +"%"});
            $("#passwordbar").removeClass("bg-success");
            Validate("verification", $("verificationpassword"));
        }
        break;
        case "verification":
        if($(e).val() === $('#password').val()){
            $("#verificationbar").css({"width": "100%"});
            $("#verificationbar").addClass("bg-success");
        }
        else{
            $("#verificationbar").css({"width": "0%"});
            $("#verificationbar").removeClass("bg-success");
        }
        break;
        default:
        console.log("default");
        break;
    }
}

function Username(e){
    if(e.length >= 3){
        return true;
    }
    else{
        return false;
    }
}