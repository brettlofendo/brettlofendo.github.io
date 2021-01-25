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