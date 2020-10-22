// ***************** MAP ****************

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
});

let marker;

//create and add marker
map.on('click', function(event) {
    const formLat = document.querySelector("#lat")
    const formLng = document.querySelector("#lng")

    let lat = event.latlng.lat;
    let lng = event.latlng.lng;

    //remove previous icons
    marker && map.removeLayer(marker);

    //zoom on point
    map.setView([lat, lng])
    
    //add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map);
    formLat.value = lat;
    formLng.value = lng;
})



// ***************** ADD PHOTO FIELD ****************

    //get photo container #images
const container = document.querySelector("#images")

const divMsg = document.createElement('div');
divMsg.classList.add('msg', 'msg-erro');


function addPhotoField() {
    //get field .new-upload
    let fieldsContainer = document.querySelectorAll(".new-upload")

    //clone last added img
    if (fieldsContainer.length >= 6) {
        alert('Máximo de 6 fotos!')
    } else {
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


// ***************** CHECK IF ALL FIELDS ARE COMPLETE ****************

const form = document.querySelector('form')

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let fields = document.querySelectorAll('input');
    let emptyFields = 0;

    fields.forEach(function(input) {
        if (input.value.trim() == "") {
            emptyFields++
        }
    })

    if (emptyFields > 0) {
        alert('Todos os campos devem ser preenchidos! Escolha um local no mapa.')
    } else {
        console.log(fields.values)
        alert('Formulario enviado com sucesso!')
        form.submit()
    }
})