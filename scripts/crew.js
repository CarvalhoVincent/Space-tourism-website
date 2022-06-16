"use strict";

const image = document.getElementById("obj-image");
const role = document.getElementById("obj-role");
const named = document.getElementById("obj-name");
const bio = document.getElementById("obj-bio");

const commander = document.getElementById("commander");
const specialist = document.getElementById("specialist");
const pilot = document.getElementById("pilot");
const engineer = document.getElementById("engineer");

function displayCommander() {

    fetch("./scripts/data.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {

        commander.setAttribute("aria-selected", true);
        specialist.setAttribute("aria-selected", false);
        pilot.setAttribute("aria-selected", false);
        engineer.setAttribute("aria-selected", false);

        image.src = data.crew[0].images.png;
        role.innerHTML = data.crew[0].role;
        named.innerHTML = data.crew[0].name;
        bio.innerHTML = data.crew[0].bio;
    });
    }

function displaySpecialist() {

    fetch("./scripts/data.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {

        commander.setAttribute("aria-selected", false);
        specialist.setAttribute("aria-selected", true);
        pilot.setAttribute("aria-selected", false);
        engineer.setAttribute("aria-selected", false);

        image.src = data.crew[1].images.png;
        role.innerHTML = data.crew[1].role;
        named.innerHTML = data.crew[1].name;
        bio.innerHTML = data.crew[1].bio;
    });
    }

function displayPilot() {

    fetch("./scripts/data.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {

        commander.setAttribute("aria-selected", false);
        specialist.setAttribute("aria-selected", false);
        pilot.setAttribute("aria-selected", true);
        engineer.setAttribute("aria-selected", false);

        image.src = data.crew[2].images.png;
        role.innerHTML = data.crew[2].role;
        named.innerHTML = data.crew[2].name;
        bio.innerHTML = data.crew[2].bio;
    });
    }

function displayEngineer() {

    fetch("./scripts/data.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {

        commander.setAttribute("aria-selected", false);
        specialist.setAttribute("aria-selected", false);
        pilot.setAttribute("aria-selected", false);
        engineer.setAttribute("aria-selected", true);
        
        image.src = data.crew[3].images.png;
        role.innerHTML = data.crew[3].role;
        named.innerHTML = data.crew[3].name;
        bio.innerHTML = data.crew[3].bio;
    });
    }
