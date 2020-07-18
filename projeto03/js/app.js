window.onload = function(){
    var map;
    const LONG = -48.60618442;
    const LAT = -16.66261929;

    function initialize() {
        var mapProp = {
            center: new google.maps.LatLng(-16.66261929, -48.60618442),
            scrollWheel: false,
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        map = new google.maps.Map(document.getElementById("mapa"), mapProp);
    }

    function addMarker(lat, long, icon, content) {
        var latlng = {'lat': lat, 'lng': long};
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            icon: icon
        });

        var infoWindow = new google.maps.InfoWindow({
            content: content,
            maxWidth: 200,
            pixelOffset: new google.maps.Size(0, 20)
        });

        infowindow.open(map, marker)
    }

    initialize();
    addMarker(LAT, LONG,'' , 'Meu endereço')
}