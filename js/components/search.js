'use strict';

const Search = (update) => {
  const parent = $('<div></div>');
  const search = $('<div class="search"></div>');
  const icon = $('<i class="fa fa-search" aria-hidden="true"></i>');
  const input = $('<input type="text" placeholder="Ingresa tu distrito a buscar">');
  const stations = $('<div class="stations"></div>');

  input.on('keyup', (e) => {
    const filteredStations = filterByDistrict(state.stations,$(e.target).val());
    console.log(filteredStations);
    reRender(stations,filteredStations,update);
  });

  parent.append(search);
  parent.append(stations);
  search.append(icon);
  search.append(input);

  return parent;
}


const reRender = (container,filteredStations,update) => {
  container.empty();
  filteredStations.forEach((station) => { //array.forEach(item, index){}
    const stationItem = StationItem({
      station: station,
      update:  update
    }); //dibuja los espacios a las estaciones coincidente en el div.stations
    // console.log(stationItem);
    container.append(stationItem);
  });
}

const StationItem = (features) => {
  const st = $('<div class="station"></div>');
  const name = $('<h3>'+features.station.name+'</h3>');
  const address = $('<p>'+features.station.address+'</p>');
  const district = $('<p>'+features.station.district+'</p>');
  const maplink = $('<a href="#" class="maplink"><i class="fa fa-map" aria-hidden="true"></i></a>');

  st.append(name);
  st.append(address);
  st.append(district);
  st.append(maplink);

  //click a la siguiente vista
  maplink.on('click',(e) => {
    e.preventDefault();
    state.selectedStation = features.station;
    features.update();
  });

  return st;
}





// const StationGrid = (update) => {
// 	const stationContainer = $('<div class="movieContainer"></div>');
// 	state.stations.forEach((station) =>{
// 		stationContainer.append(stationItem(station,update));
// 	});

// 	return stationContainer;

// }
