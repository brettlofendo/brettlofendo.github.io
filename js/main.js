var uiuc = document.getElementById("uiuc");
var bp = document.getElementById("bp");
var codagami = document.getElementById("codagami");
var spd = document.getElementById("spd");
var mission = document.getElementById("mission");
var restapi = document.getElementById("rest_api");

uiuc.onclick = function openUiuc() {
    window.open("https://ece.illinois.edu", "_blank");
}

bp.onclick = function openBp() {
    window.open("https://bp.com", "_blank");
}

codagami.onclick = function openCodagami() {
    window.open("http://www.codagami.com/", "_blank");
}

spd.onclick = function openSpd() {
    window.open("https://sigphis.org", "_blank");
}

mission.onclick = function openMission() {
    window.open("https://missioncontrolsystems.com/", "_blank");
}

restapi.onclick = function openRestapi() {
    window.open("https://github.com/brettlofendo/scope", "_blank");
}

var toggled = false;
var toggleButton = document.getElementById("toggle_button");

toggleButton.addEventListener("click", function() {
    if(!toggled) {
        document.body.classList.toggle("dark_mode"); 
        document.getElementById("greeting").classList.toggle("dark_mode");
        document.getElementById("headline").classList.toggle("dark_mode");
        document.getElementById("contact_body").classList.toggle("dark_mode");

        var titles = document.getElementsByClassName("component_title");
        for (var i = 0; i < titles.length; i++) {
            titles[i].classList.toggle("dark_mode");
        }

        var bodies = document.getElementsByClassName("component_body");
        for (var i = 0; i < bodies.length; i++) {
            bodies[i].classList.toggle("dark_mode");
        }

        var borders = document.getElementsByClassName("grid_item");
        for (var i = 0; i < borders.length; i++) {
            borders[i].style.border = "2px solid white";
        }

        var dividers = document.getElementsByClassName("dotted");
        for (var i = 0; i < dividers.length; i++) {
            dividers[i].style.borderBottom = "rgb(20, 20, 20)";
        }
        toggled = true;
    }
    else {
        document.body.classList.toggle("dark_mode");
        document.getElementById("greeting").classList.toggle("dark_mode");
        document.getElementById("headline").classList.toggle("dark_mode");
        document.getElementById("contact_body").classList.toggle("dark_mode");

        var titles = document.getElementsByClassName("component_title");
        for (var i = 0; i < titles.length; i++) {
            titles[i].classList.toggle("dark_mode");
        }

        var bodies = document.getElementsByClassName("component_body");
        for (var i = 0; i < bodies.length; i++) {
            bodies[i].classList.toggle("dark_mode");
        }

        var borders = document.getElementsByClassName("grid_item");
        for (var i = 0; i < borders.length; i++) {
            borders[i].style.border = "2px solid black";
        }
        toggled = false;
    }
});


