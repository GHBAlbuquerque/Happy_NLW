// create-map

const map = L.map('mapid').setView([-23.5339705, -46.8544877], 16); //coordinates & zoom


// tile-layer

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
).addTo(map);

//create icon

var icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize:     [58, 68], // size of the icon
    iconAnchor:   [29, 68], // point of the icon which will correspond to marker's location
    popupAnchor:  [170, 2] // point from which the popup should open relative to the iconAnchor
});

function addMarker({ id, name, lat, lng }) {

    //create popup overlay

    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name}<a href="/orphanage?id=${id}" class="choose-orphanage"> <img src="/images/arrow-white.svg"></a>`)

    // add marker with pop-ups

    L.marker([lat, lng], { icon }) //destructor icon const to icon
        .addTo(map)
        .bindPopup(popup);
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach((span)=> {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(orphanage)
})
