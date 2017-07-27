'use strict';

const init = (parent) => {
	// const state = {
	//   stations: null,
	//   selectedStation: null
	// };
	const route = document.getElementById('ruta');
	const distancia = document.getElementById('distance');
	const tiempo = document.getElementById('time');

	let map = new GMaps({
		el: parent, 
		lat: state.selectedStation.lat,
		lng: state.selectedStation.long
	});

	map.addMarker({
		lat:state.selectedStation.lat,
		lng:state.selectedStation.long,
		title:state.selectedStation.name,
		zoom: 18
	});
	route.addEventListener('click', function(){
		GMaps.geolocate({
			success: function(position) {
				map.setCenter(position.coords.latitude, position.coords.longitude);
				// map.setZoom(16)
				map.addMarker({ //marcador con posición actual
					lat:position.coords.latitude,
					lng:position.coords.longitude,
					title: 'Aquí estás',
					infoWindow: { content: '<p>Estás aqui!</p>' },
					zoom: 10
				});
				map.travelRoute({ //ruta step by step
					origin: [position.coords.latitude, position.coords.longitude],
					destination: [state.selectedStation.lat, state.selectedStation.long],
					travelMode: 'driving',
					step: function(e) { //describe el tramo
					    $('#instructions').append('<li>'+e.instructions+'</li>');
					    $('#instructions li:eq(' + e.step_number + ')').delay(450 * e.step_number).fadeIn(200, function() {
					      map.drawPolyline({
					        path: e.path,
					        strokeColor: '#16730A',
							strokeOpacity: 0.6,
							strokeWeight: 6,
					      });
					    });
					  }
				});
				map.getRoutes({ 
					origin: [position.coords.latitude, position.coords.longitude],
					destination: [state.selectedStation.lat, state.selectedStation.long],
	                callback: function (e) {
	                	var time = 0;
	                    var distance = 0;
	                    for (var i=0; i<e[0].legs.length; i++) {
	                        time += e[0].legs[i].duration.text; 
	                        distance += e[0].legs[i].distance.text;
	                    }
	                    console.log(e[0]);
	                    console.log(e[0].legs);
	                    console.log(e[0].legs[0].distance);
	                    console.log(e[0].legs[0].duration.text);

	                    distancia.innerHTML = distance.split(0,4).join("");
	                    tiempo.innerHTML = time;
	                }
				});
			},
			error: function(error) {
			    alert('Geolocation failed: '+error.message);
			},
			not_supported: function() {
			    alert("Your browser does not support geolocation");
			},
			always: function() {
			    alert("Ubicación actual lista!");
			}
		});	
	})
}

const GMap = () =>{
	const wrapper = $('<div id ="map"></div>');
	wrapper.init = init.bind(null, wrapper.get(0)); //
	return wrapper;
}

// NOTES:
// https://stackoverflow.com/questions/29975618/gmaps-js-route-with-multiple-markers
// http://jsfiddle.net/DXNzu/1/
// https://github.com/hpneo/gmaps/issues/297
// http://jsfiddle.net/mdares/82Dp2/
// http://www.javacms.tech/questions/2130228/gmaps-js-route-with-distance