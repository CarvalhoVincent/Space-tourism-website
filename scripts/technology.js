"use strict";
const image = document.getElementById("obj-image");
const named = document.getElementById("obj-name");
const desc = document.getElementById("obj-description");

const number1 = document.getElementById("#1");
const number2 = document.getElementById("#2");
const number3 = document.getElementById("#3");


fetch("./scripts/data.json")
.then(function(resp) {
    return resp.json();
})
.then(function(data) {

          if(window.matchMedia("(min-width:45em)").matches) {
            image.src = data.technology[0].images.portrait;
          } else {
            image.src = data.technology[0].images.landscape;
          }
    
    function resizing() {
        if("matchMedia" in window) {
          if(window.matchMedia("(min-width:45em)").matches) {
            image.src = data.technology[0].images.portrait;
          } else {
            image.src = data.technology[0].images.landscape;
          }
        }
    }
      window.addEventListener('resize', resizing, false);
});


function displayVehicle() {

    fetch("./scripts/data.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
            
              if(window.matchMedia("(min-width:45em)").matches) {
                image.src = data.technology[0].images.portrait;
              } else {
                image.src = data.technology[0].images.landscape;
              }
        
        function resizing() {
            if("matchMedia" in window) {
              if(window.matchMedia("(min-width:45em)").matches) {
                image.src = data.technology[0].images.portrait;
              } else {
                image.src = data.technology[0].images.landscape;
              }
            }
          } 
          window.addEventListener('resize', resizing, false);
           

        number1.setAttribute("aria-selected", true);
        number2.setAttribute("aria-selected", false);
        number3.setAttribute("aria-selected", false);  
        named.innerHTML = data.technology[0].name;
        desc.innerHTML = data.technology[0].description;   

    });
    }

function displaySpacePort() {

    fetch("./scripts/data.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
            
              if(window.matchMedia("(min-width:45em)").matches) {
                image.src = data.technology[1].images.portrait;
              } else {
                image.src = data.technology[1].images.landscape;
              }
        
        function resizing() {
            if("matchMedia" in window) {
              if(window.matchMedia("(min-width:45em)").matches) {
                image.src = data.technology[1].images.portrait;
              } else {
                image.src = data.technology[1].images.landscape;
              }
            }
          }
          window.addEventListener('resize', resizing, false);


        number1.setAttribute("aria-selected", false);
        number2.setAttribute("aria-selected", true);
        number3.setAttribute("aria-selected", false); 
        named.innerHTML = data.technology[1].name;
        desc.innerHTML = data.technology[1].description;
    });
    }

function displayCapsule() {

    fetch("./scripts/data.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
            
              if(window.matchMedia("(min-width:45em)").matches) {
                image.src = data.technology[2].images.portrait;
              } else {
                image.src = data.technology[2].images.landscape;
              }
        
        function resizing() {
            if("matchMedia" in window) {
              if(window.matchMedia("(min-width:45em)").matches) {
                image.src = data.technology[2].images.portrait;
              } else {
                image.src = data.technology[2].images.landscape;
              }
            }
          }
          window.addEventListener('resize', resizing, false);


        number1.setAttribute("aria-selected", false);
        number2.setAttribute("aria-selected", false);
        number3.setAttribute("aria-selected", true); 
        named.innerHTML = data.technology[2].name;
        desc.innerHTML = data.technology[2].description;
    });
    }