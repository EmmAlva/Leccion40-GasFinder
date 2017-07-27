'use strict';

const StationDetails = () =>{	
	const container = $('<div class="stationDetails"></div>');
	const title = $('<h2>'+state.selectedStation.name+'</h2>');
	const divider = $('<hr>');
	const dt = $('<div class="space" ></div>');
	const distancia = $('<span id="distance"></span>');
	const tiempo = $('<span id="time"></span>');
	const p = $('<p>'+state.selectedStation.address+'</p>');
	const div = $('<div class="cont-prod"><h4>Combustibles disponibles: </h4></div>');
	// const products = $('<span class="products">'+state.selectedStation.products+'</span>');
	const products = $(state.selectedStation.products.map((ele) => { return '<span class="product">'+ele+'</span>';}).join(" "));
	const ruta = $('<button id="ruta" >Cómo llegar</button>');
	const instr = $('<div id="instructions"></div>');

	// const button = $('<i class="fa fa-chevron-left" aria-hidden="true"></i>');

	console.log(products);

	container.append(title);
	container.append(divider);
	container.append(dt);
	dt.append(distancia);
	dt.append(tiempo);
	container.append(p);
	div.append(products);
	container.append(div);
	container.append(ruta);
	container.append(instr);
	// container.append(button);

	// button.on('click',(e) => {
	 // e.preventDefault();
	 // state.selectedStation = null;
	 // update();
  // })

	 return container;
}