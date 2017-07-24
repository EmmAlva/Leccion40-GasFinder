'use strict';

const StationDetails = () =>{	
	const container = $('<div class="stationDetails"></div>');
	const title = $('<h2>'+state.selectedStation.name+'</h2>');
	const p = $('<p>'+state.selectedStation.address+'</p>');
	const div = $('<div class="cont-prod"></div>');
	// const products = $('<span class="products">'+state.selectedStation.products+'</span>');
	const products = $(state.selectedStation.products.map((ele) => { return '<span class="product">'+ele+'</span>';}).join(" "));

	// const button = $('<i class="fa fa-chevron-left" aria-hidden="true"></i>');

	console.log(products);

	container.append(title);
	container.append(p);
	div.append(products);
	container.append(div);
	// container.append(button);

	// button.on('click',(e) => {
	 // e.preventDefault();
	 // state.selectedStation = null;
	 // update();
  // })

	 return container;
}