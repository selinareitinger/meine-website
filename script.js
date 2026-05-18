// Weltkarte

var map = L.map('map', {
  minZoom: 2
}).setView([20, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


const iconMap = L.divIcon({
  className: 'icon',
  html: `<img src="images/icon_map.png">`,
});

// Marker aller Orte
var markerAmsterdam = L.marker([52.3676, 4.9041], {icon: iconMap}).addTo(map).bindTooltip("Amsterdam", { permanent: false }).bindPopup(`
    <b>Amsterdam</b><br>
    <img src="images/amsterdam/amsterdam-1.webp" style="width:100%; border-radius:8px;">
  `);

var markerRom = L.marker([41.8833, 12.4833], {icon: iconMap}).addTo(map).bindTooltip("Rom", { permanent: false }).bindPopup(`
    <b>Rom</b><br>
    <img src="images/rom/rom-1.webp" style="width:100%; border-radius:8px;">
  `);

var markerSaoMiguel = L.marker([37.7412, -25.6756], {icon: iconMap}).addTo(map).bindTooltip("São Miguel", { permanent: false }).bindPopup(`
    <b>São Miguel</b><br>
    <img src="images/sao-miguel/sao-miguel-1.webp" style="width:100%; border-radius:8px;">
  `);

var markerNizza = L.marker([43.7045, 7.262],{icon: iconMap}).addTo(map).bindTooltip("Nizza", { permanent: false }).bindPopup(`
    <b>Nizza</b><br>
    <img src="images/nizza/nizza-1.webp" style="width:100%; border-radius:8px;">
  `);

var markerDublin = L.marker([53.3498, -6.2603], {icon: iconMap}).addTo(map).bindTooltip("Dublin", { permanent: false }).bindPopup(`
    <b>Dublin</b><br>
    <img src="images/dublin/dublin-1.webp" style="width:100%; border-radius:8px;">
  `);

var markerRhodos = L.marker([36.4375, 28.2231], {icon: iconMap}).addTo(map).bindTooltip("Rhodos", { permanent: false }).bindPopup(`
    <b>Rhodos</b><br>
    <img src="images/rhodos/rhodos-1.webp" style="width:100%; border-radius:8px;">
  `);

// Zoom auf Orte
markerAmsterdam.on('click', () => {
  map.flyTo([52.3676, 4.9041], 10);
});

markerRom.on('click', () => {
  map.flyTo([41.8833, 12.4833], 10);
});

markerSaoMiguel.on('click', () => {
  map.flyTo([37.7412, -25.6756], 10);
});

markerNizza.on('click', () => {
  map.flyTo([43.7045, 7.262], 10);
});

markerDublin.on('click', () => {
  map.flyTo([53.3498, -6.2603], 10);
});

markerRhodos.on('click', () => {
  map.flyTo([36.4375, 28.2231], 10);
});



// Event Listeners
document.getElementById("infos").addEventListener("onclick", moreInfos);

function moreInfos() {
  window.location.href = "about_me.html";
}

document.getElementById("card-amsterdam").addEventListener("onclick", amsterdam);

function amsterdam() {
  window.location.href = "amsterdam.html";
}

document.getElementById("card-rome").addEventListener("onclick", rome);

function rome() {
  window.location.href = "rome.html";
}

document.getElementById("card-sao-miguel").addEventListener("onclick", saoMiguel);

function saoMiguel() {
  window.location.href = "sao_miguel.html";
}
