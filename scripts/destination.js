"use strict";

const image = document.getElementById("obj-image");
const named = document.getElementById("obj-name");
const desc = document.getElementById("obj-description");
const distance = document.getElementById("obj-distance");
const travel = document.getElementById("obj-travel");
const moon = document.getElementById("moon");
const mars = document.getElementById("mars");
const europa = document.getElementById("europa");
const titan = document.getElementById("titan");

function displayMoon() {

    fetch("./scripts/data.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {

        moon.setAttribute("aria-selected", true);
        mars.setAttribute("aria-selected", false);
        europa.setAttribute("aria-selected", false);
        titan.setAttribute("aria-selected", false);
        
        image.src = data.destinations[0].images.png;
        named.innerHTML = data.destinations[0].name;
        desc.innerHTML = data.destinations[0].description;
        distance.innerHTML = data.destinations[0].distance;
        travel.innerHTML = data.destinations[0].travel;
    });
    }

function displayMars() {

    fetch("./scripts/data.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {

        moon.setAttribute("aria-selected", false);
        mars.setAttribute("aria-selected", true);
        europa.setAttribute("aria-selected", false);
        titan.setAttribute("aria-selected", false);

        image.src = data.destinations[1].images.png;
        named.innerHTML = data.destinations[1].name;
        desc.innerHTML = data.destinations[1].description;
        distance.innerHTML = data.destinations[1].distance;
        travel.innerHTML = data.destinations[1].travel;
    });
    }

function displayEuropa() {

    fetch("./scripts/data.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {

        moon.setAttribute("aria-selected", false);
        mars.setAttribute("aria-selected", false);
        europa.setAttribute("aria-selected", true);
        titan.setAttribute("aria-selected", false);

        image.src = data.destinations[2].images.png;
        named.innerHTML = data.destinations[2].name;
        desc.innerHTML = data.destinations[2].description;
        distance.innerHTML = data.destinations[2].distance;
        travel.innerHTML = data.destinations[2].travel;
    });
    }

function displayTitan() {

    fetch("./scripts/data.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
    
        moon.setAttribute("aria-selected", false);
        mars.setAttribute("aria-selected", false);
        europa.setAttribute("aria-selected", false);
        titan.setAttribute("aria-selected", true);

        image.src = data.destinations[3].images.png;
        named.innerHTML = data.destinations[3].name;
        desc.innerHTML = data.destinations[3].description;
        distance.innerHTML = data.destinations[3].distance;
        travel.innerHTML = data.destinations[3].travel;
    });
    }