"use strict";

function displayMoon() {

    fetch("./scripts/data.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {

        const image = document.getElementById("obj-image");
        image.src = data.destinations[0].images.png;

        const named = document.getElementById("obj-name");
        named.innerHTML = data.destinations[0].name;

        const desc = document.getElementById("obj-description");
        desc.innerHTML = data.destinations[0].description;

        const distance = document.getElementById("obj-distance");
        distance.innerHTML = data.destinations[0].distance;

        const travel = document.getElementById("obj-travel");
        travel.innerHTML = data.destinations[0].travel;
    });
    }

function displayMars() {

    fetch("./scripts/data.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {

        const image = document.getElementById("obj-image");
        image.src = data.destinations[1].images.png;

        const named = document.getElementById("obj-name");
        named.innerHTML = data.destinations[1].name;

        const desc = document.getElementById("obj-description");
        desc.innerHTML = data.destinations[1].description;

        const distance = document.getElementById("obj-distance");
        distance.innerHTML = data.destinations[1].distance;

        const travel = document.getElementById("obj-travel");
        travel.innerHTML = data.destinations[1].travel;
    });
    }

function displayEuropa() {

    fetch("./scripts/data.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {

        const image = document.getElementById("obj-image");
        image.src = data.destinations[2].images.png;

        const named = document.getElementById("obj-name");
        named.innerHTML = data.destinations[2].name;

        const desc = document.getElementById("obj-description");
        desc.innerHTML = data.destinations[2].description;

        const distance = document.getElementById("obj-distance");
        distance.innerHTML = data.destinations[2].distance;

        const travel = document.getElementById("obj-travel");
        travel.innerHTML = data.destinations[2].travel;
    });
    }

function displayTitan() {

    fetch("./scripts/data.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
    
        const image = document.getElementById("obj-image");
        image.src = data.destinations[3].images.png;

        const named = document.getElementById("obj-name");
        named.innerHTML = data.destinations[3].name;

        const desc = document.getElementById("obj-description");
        desc.innerHTML = data.destinations[3].description;

        const distance = document.getElementById("obj-distance");
        distance.innerHTML = data.destinations[3].distance;

        const travel = document.getElementById("obj-travel");
        travel.innerHTML = data.destinations[3].travel;
    });
    }