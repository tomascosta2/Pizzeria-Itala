// function iniciarMap() {
//     var coord = {lat: -32.8621065,lng: -68.89094}
//     var map = new google.maps.Map(document.getElementById('map'),{
//         zoom: 10,
//         center: coord
//     });
//     var marker = new google.maps.Marker({
//         position: coord,
//         map: map
//     });
// }

// boton menu desplegable

const openCloseButton = document.querySelector('#buttonOpenCloseMenu');
const menuMobileItems = document.querySelector('#menu-mobile-items');

openCloseButton.addEventListener('click', e => {
    menuMobileItems.classList.toggle('menu-mobile-closed')
});