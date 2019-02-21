/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// ciao
document.getElementById("navicella").style.top = (Math.random() * 400) + "px";
document.getElementById("navicella").style.left = (Math.random() * 400) + "px";
var speed = 10;
document.querySelector("#navicellaImage").style.width = "100px";
document.querySelector("#navicellaImage").style.height = "100px";
var deformazione = 10;
document.querySelector("#navicellaImage").rotazione = 0;
var rotation = 0;
var rotationSpeed = 10;
var framerate = 125;
document.getElementById("missile").style.top = (Math.random() * 400) + "px";
document.getElementById("missile").style.left = (Math.random() * 400) + "px";
var speedMissile = 20;
var rotMissile = 0;
document.getElementById("stella").style.top = (Math.random() * 600 +200) + "px";
document.getElementById("stella").style.left = (Math.random() * 600 +200) + "px";
var punteggio = 0;

document.querySelectorAll(".cattivo").forEach(function (elm) {

    elm.style.top = (Math.random() * 1000) + "px";
    elm.style.left = (Math.random() * 1000) + "px";
    elm.rotazione = (Math.random() * 360);
    elm.speed = 5;

});


document.querySelector("body").onkeydown = function (e) {


    let direzione = e.which;

    if (direzione === 38) {

        if (e.ctrlKey) {
            ruota("#navicellaImage", rotationSpeed);
        }

        if (e.shiftKey) {
            ruota("#navicellaImage", -rotationSpeed);
        }
        muovi("navicella", speed);
    }

    if (direzione === 39) {
        ruota("#navicellaImage", rotationSpeed);
    }

    if (direzione === 37) {
        ruota("#navicellaImage", -rotationSpeed);
    }

    if (direzione === 33) {
        muovi("navicella", speed);
        ruota("#navicellaImage", rotationSpeed);
    }

    if (direzione === 36) {
        muovi("navicella", speed);
        ruota("#navicellaImage", -rotationSpeed);
    }
    if (direzione === 32) {
        creaMissile();
    }
};


function creaMissile() {

    document.querySelector("#missile").style.display = "block";
    rotMissile = document.querySelector("#navicellaImage").rotazione;

    let x2 = parseFloat(document.getElementById("navicella").style.left);
    let y2 = parseFloat(document.getElementById("navicella").style.top);

    document.getElementById("missile").style.left = x2 + 50 + "px";
    document.getElementById("missile").style.top = y2 + 50 + "px";
}


function muoviMissile() {

    let cos = Math.cos(rotMissile * Math.PI / 180);
    let sen = Math.sin(rotMissile * Math.PI / 180);

    let x2 = parseFloat(document.querySelector("#missile").style.left) + (cos * speedMissile * 2);
    let y2 = parseFloat(document.querySelector("#missile").style.top) + (sen * speedMissile * 2);

    document.querySelector("#missile").style.left = x2 + "px";
    document.querySelector("#missile").style.top = y2 + "px";

    if (x2 > 1000 || x2 < 0 || y2 < 0 || y2 > 1000) {
        document.querySelector("#missile").style.display = "none";
    }

}



function muovi(oggetto, s) {


    let rot = document.querySelector("#navicellaImage").rotazione;

    let cos = Math.cos(rot * Math.PI / 180);
    let sen = Math.sin(rot * Math.PI / 180);
    let x2 = parseFloat(document.getElementById(oggetto).style.left) + (cos * speed * 2);
    let y2 = parseFloat(document.getElementById(oggetto).style.top) + (sen * speed * 2);

    if (x2 > 1000) {
        x2 = x2 - 1000;
    }
    if (x2 < 0) {
        x2 = x2 + 1000;
    }
    if (y2 > 1000) {
        y2 = y2 - 1000;
    }
    if (y2 < 0) {
        y2 = y2 + 1000;
    }

    document.getElementById("navicella").style.left = x2 + "px";
    document.getElementById("navicella").style.top = y2 + "px";
}


function ruota(oggetto, r) {

    let rotazione = document.querySelector(oggetto).rotazione;
    let nuovoValore = rotazione + r;
    document.querySelector(oggetto).style.transform = "rotateZ(" + nuovoValore + "deg)";

    document.querySelector(oggetto).rotazione = nuovoValore;

}

function muoviCattivone(oggetto) {

    let rot = document.querySelector(oggetto).rotazione;

    let cos = Math.cos(rot * Math.PI / 180);
    let sen = Math.sin(rot * Math.PI / 180);
    let x2 = parseFloat(document.querySelector(oggetto).style.left) + (cos * speed);
    let y2 = parseFloat(document.querySelector(oggetto).style.top) + (sen * speed);

    if (x2 > 930) {
        x2 = x2 - 930;
    }
    if (x2 < 0) {
        x2 = x2 + 930;
    }
    if (y2 > 930) {
        y2 = y2 - 930;
    }
    if (y2 < 0) {
        y2 = y2 + 930;
    }

    document.querySelector(oggetto).style.left = x2 + "px";
    document.querySelector(oggetto).style.top = y2 + "px";

}

function muoviCattivone2(cattivo, navicella) {

    let rot = -45;

    let cos = Math.cos(rot * Math.PI / 180);
    let sen = Math.sin(rot * Math.PI / 180);

    let catX = parseFloat(document.querySelector(cattivo).style.left);
    let catY = parseFloat(document.querySelector(cattivo).style.top);
    let navX = parseFloat(document.querySelector(navicella).style.left);
    let navY = parseFloat(document.querySelector(navicella).style.top);

    if (navX < catX) {
        cos = cos * -1;
    }
    if (navY > catY) {
        sen = sen * -1;
    }

    let x2 = parseFloat(document.querySelector(cattivo).style.left) + (cos * speed);
    let y2 = parseFloat(document.querySelector(cattivo).style.top) + (sen * speed);

    if (x2 > 930) {
        x2 = x2 - 930;
    }
    if (x2 < 0) {
        x2 = x2 + 930;
    }
    if (y2 > 930) {
        y2 = y2 - 930;
    }
    if (y2 < 0) {
        y2 = y2 + 930;
    }

    document.querySelector(cattivo).style.left = x2 + "px";
    document.querySelector(cattivo).style.top = y2 + "px";

}

function controllaRaccogliStella(stella, nave) {

    let posNavX = parseFloat(document.querySelector(stella).style.left) + 25;
    let posNavY = parseFloat(document.querySelector(stella).style.top) + 25;
    let posCatX = parseFloat(document.querySelector(nave).style.left) + 80;
    let posCatY = parseFloat(document.querySelector(nave).style.top) + 20;

    let distanzaConcessa = 60;

    let distanzaX = (posNavX - posCatX) * (posNavX - posCatX);
    let distanzaY = (posNavY - posCatY) * (posNavY - posCatY);

    let distanzaTOT = Math.sqrt(distanzaX + distanzaY);

    if (distanzaConcessa > distanzaTOT) {
        punteggio = punteggio +1;
        document.getElementById("punteggio").innerHTML = punteggio;
        document.getElementById("stella").style.top = (Math.random() * 1000) + "px";
        document.getElementById("stella").style.left = (Math.random() * 1000) + "px";
    }
}



function controllaCollisioneStella(stella, cattivone) {

    let posNavX = parseFloat(document.querySelector(stella).style.left) + 25;
    let posNavY = parseFloat(document.querySelector(stella).style.top) + 25;
    let posCatX = parseFloat(document.querySelector(cattivone).style.left) + 80;
    let posCatY = parseFloat(document.querySelector(cattivone).style.top) + 20;

    let distanzaConcessa = 60;

    let distanzaX = (posNavX - posCatX) * (posNavX - posCatX);
    let distanzaY = (posNavY - posCatY) * (posNavY - posCatY);

    let distanzaTOT = Math.sqrt(distanzaX + distanzaY);

    if (distanzaConcessa > distanzaTOT) {
        punteggio = punteggio - 5;
        document.getElementById("punteggio").innerHTML = punteggio;
        document.getElementById("stella").style.top = (Math.random() * 1000) + "px";
        document.getElementById("stella").style.left = (Math.random() * 1000) + "px";
    }
}


function controllaCollisione(nave, cattivone) {

    let posNavX = parseFloat(document.querySelector(nave).style.left) + 25;
    let posNavY = parseFloat(document.querySelector(nave).style.top) + 25;
    let posCatX = parseFloat(document.querySelector(cattivone).style.left) + 80;
    let posCatY = parseFloat(document.querySelector(cattivone).style.top) + 20;

    let distanzaConcessa = 70;

    let distanzaX = (posNavX - posCatX) * (posNavX - posCatX);
    let distanzaY = (posNavY - posCatY) * (posNavY - posCatY);

    let distanzaTOT = Math.sqrt(distanzaX + distanzaY);

    if (distanzaConcessa > distanzaTOT) {
        rotationSpeed = 0;
        framerate = 0;
        speed = 0;
        document.querySelector("#fineGioco").style.display = "block";
    }
}


setInterval(function () {

    muoviCattivone("#cattivone");
    muoviCattivone2("#cattivone2", "#navicella");
    muoviCattivone("#cattivone3");
    controllaCollisione("#navicella", "#cattivone");
    controllaCollisione("#navicella", "#cattivone2");
    controllaCollisione("#navicella", "#cattivone3");
    controllaCollisioneStella("#stella", "#cattivone");
    controllaCollisioneStella("#stella", "#cattivone2");
    controllaCollisioneStella("#stella", "#cattivone3");
    muoviMissile();
    controllaRaccogliStella("#stella", "#navicella");


}, framerate);






