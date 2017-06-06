'use strict';

const stationItem = (station,update) =>{
	const place = $('<div class ="place" id="local"></div>');
	const name = $('<h2>'+station.name+'</h2>');
	const p = $('<p>'+station.address+'</p>');
	const distrito = $('<p>'+station.district+'</p>');
	const iconMap = $('<i class="fa fa-map" aria-hidden="true"></i>');


	place.append(name);
	place.append(p);
	place.append(distrito);
	place.append(iconMap);

	iconMap.on('click', e =>{
		e.preventDefault();
		state.selectedStation = station;
		update();
	});

	return place;
}
const StationGrid = (update) => {
	const stationContainer = $('<div class="movieContainer"></div>');
	state.stations.forEach((station) =>{
		stationContainer.append(stationItem(station,update));
	});

	return stationContainer;

}

/*$('div.place').filter(function(index){
		return index || $(this).attr("value");
	}).css("border","1px solid green");*/

