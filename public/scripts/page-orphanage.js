const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
};

const spanLat = document.querySelector('span[data-lat]').dataset.lat;
const spanLng = document.querySelector('span[data-lng]').dataset.lng;

// create-map

const map = L.map('mapid', options).setView([spanLat, spanLng], 16); //coordinates & zoom


// tile-layer

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
).addTo(map);

//create icon

var icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize:     [48, 48], // size of the icon
    iconAnchor:   [29, 68], // point of the icon which will correspond to marker's location
    popupAnchor:  [170, 2] // point from which the popup should open relative to the iconAnchor
});

//create popup overlay
// markers

L.marker([spanLat, spanLng], { icon }) //destructor icon const to icon
    .addTo(map);

/* img gallery */

function selectImage(event) {
    const button = event.currentTarget

    //remover a classe atual de todas
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => {
        button.classList.remove('active')
    })

    //selecionar imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    imageContainer.src = image.src

    //atualizar o container da imagem

    //adicionar a classe .active para este botão
    button.classList.add('active')
}