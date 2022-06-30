window.initMap = initMap;

function initMap() {
    const uluru = { lat: 40.7699401, lng: -73.9816664 };
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.76802, lng: -73.97546 },
        zoom: 16,
        mapId: 'cade366ce27cb28f'
    });
    const flag = "./img/svg/map_pin.svg"
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: flag
    });
}
