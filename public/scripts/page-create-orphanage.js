// create-map

const map = L.map('mapid').setView([-23.5339705, -46.8544877], 16); //coordinates & zoom

// tile-layer

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
).addTo(map);

//create icon

var icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize:     [58, 68], // size of the icon
    iconAnchor:   [29, 68], // point of the icon which will correspond to marker's location
});

let marker;

//create and add marker
map.on('click', function(event) {
    let latitude = event.latlng.lat;
    let longitude = event.latlng.lng;

    //remove previous icons
    marker && map.removeLayer(marker);

    //zoom on point
    map.setView([latitude, longitude])
    
    //add icon layer
    marker = L.marker([latitude, longitude], { icon }).addTo(map);
})