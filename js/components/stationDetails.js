'use strict';

const StationDetails = (update) =>{
	
	const container = $('<div class="stationDetails"></div>');
	const map = $('<div id="map"></div>');
	const title = $('<h2>'+state.selectedStation.name+'</h2>');
	const p = $('<p>'+state.selectedStation.address+'</p>');
	const div = $('<div class="cont-prod"></div>');
	const products = $('<span class="products">'+state.selectedStation.products+'</span>');
	const button = $('<i class="fa fa-chevron-left" aria-hidden="true"></i>');

	container.append(map);
	container.append(title);
	container.append(p);
	div.append(products);
	container.append(div);
	container.append(button);

	button.on('click',(e) => {
    e.preventDefault();
    state.selectedStation = null;
    update();
  })

	 return container;
}