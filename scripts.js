'use strict';

document.body.style.backgroundColor = '#8E2DE2'
let container = document.createElement('div')
document.body.append(container)
container.style.padding = '40px'
let title_h1 = document.createElement('h1')
title_h1.textContent = 'Weather'
title_h1.style.color = '#ffffff'
title_h1.style.opacity = '0.5'
let table = document.createElement('p')


container.append(title_h1)
container.append(table)

const x = document.getElementById('#demo')
function getLocation() {
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    } else {
    table.innerHTML = "Geolocation is not supported by this browser.";
    }
}


function showPosition() {
    x.innerHTML = "Latitude: " + position.coords.latitude +
"<br>Longitude: " + position.coords.longitude; 
}
window.onload = getLocation()