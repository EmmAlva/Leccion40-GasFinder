'use strict';

const StationDetails = (update) =>{
	
	const container = $('<div class="stationDetails"></div>');
	const title = $('<h2>'+state.selectedStation.name+'</h2>');
	const p = $('<p>'+state.selectedStation.address+'</p>');
	const button = $('<i class="fa fa-chevron-left" aria-hidden="true"></i>');

	container.append(title);
	container.append(p);
	container.append(button);

	button.on('click',(e) => {
    e.preventDefault();
    state.selectedStation = null;
    update();
  })

	 return container;
}