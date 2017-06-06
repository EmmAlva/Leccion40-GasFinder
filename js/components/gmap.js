$(document).ready(function(){
//En gmap.js
var map;
var initMap = function(parent) {
	map = new GMaps({
	el: '#map',
	lat: -12.043333,
	lng: -77.028333
	});
	map.addMarker({
	lat: -12.043333,
	lng: -77.03,
	title: 'Lima'
	});
}


var Gmap = () => {
var wrapper = $('<div id="map"></div>');
wrapper.initMap = initMap.bind(null,wrapper.get(0));
return wrapper;
}

//En index.js
  var gmap = Gmap();
  gmap.initMap();

});
