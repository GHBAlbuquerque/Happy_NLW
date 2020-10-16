// ***************** MAP ****************

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
    const formLat = document.querySelector("#latitude")
    const formLng = document.querySelector("#longitude")

    let latitude = event.latlng.lat;
    let longitude = event.latlng.lng;

    //remove previous icons
    marker && map.removeLayer(marker);

    //zoom on point
    map.setView([latitude, longitude])
    
    //add icon layer
    marker = L.marker([latitude, longitude], { icon }).addTo(map);
    formLat.value = latitude;
    formLng.value = longitude;
})



// ***************** ADD PHOTO ****************

    //get photo container #images
const container = document.querySelector("#images")

const divMsg = document.createElement('div');
divMsg.classList.add('msg', 'msg-erro');


function addPhotoField() {
    //get field .new-upload
    let fieldsContainer = document.querySelectorAll(".new-upload")

    //clone last added img
    const newFieldContainer = fieldsContainer[fieldsContainer.length-1].cloneNode(true)

    //verify if input is empty
    let inputValue = newFieldContainer.children[0].value
    if (inputValue == "") {
        divMsg.textContent = 'Digite uma URL!';
        container.insertAdjacentElement('beforebegin', divMsg);
    } else {
    //clean before cloning
    newFieldContainer.children[0].value = ""

    //add clone to container
    if (document.querySelector(".msg") != null) {
        document.querySelector(".msg").remove()
    }

    container.appendChild(newFieldContainer)
    }

}

// remove "add photo field"
container.addEventListener("click", function(event) {
    //get field .new-upload
    let fieldsContainer = document.querySelectorAll(".new-upload")

    if (event.target.tagName == 'IMG' || event.target.tagName == 'SPAN') {
        if (fieldsContainer.length != 1) {
            const cancelButton = event.target
            cancelButton.closest('div').remove()
        } else {
            fieldsContainer[0].children[0].value=""
        }
    }
})


// ***************** ADD PHOTO ****************

function toggleSelect(event) {
    //remover classe active do outro
    document.querySelector(".button-select .active").classList.remove("active")

    //pegar o botão clicado e adc classe
    let clickedButton = event.target
    clickedButton.classList.add("active")

    //atualizar o input hidden com o valor selecionado
    document.querySelector("#open-on-weekends").value = clickedButton.dataset.value
}