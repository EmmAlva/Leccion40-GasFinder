'use strict';

const filterByDistrict = (stations,query) => {  //filterByDistrict(state.stations,$(e.target).val())
		return stations.filter ((station) =>{ //station = elemento :D
		// return array.filter(function(ele, index, arr){
       		// 	return index == arr.indexOf(ele);
 				   // });
			 	console.log(stations);
  				console.log(station);
			return station.district.toLowerCase().indexOf(query.toLowerCase()) != -1;
					//valor del input(string).indexOf(retorna la posición de la primera ocurrencia, el input.val())
					//string.indexOf(searchvalue, start)
					//"-1" : no se encontró coincidencias	
	});
}
