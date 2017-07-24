'use strict';

const render = (root) => {
  root.empty(); //limpia la raíz
  const wrapper = $('<div class="wrapper"></div>');  
  wrapper.append(Header(_ => render(root))); //componente Header(update) --> vacia e imprime;
  if(state.selectedStation == null){
    wrapper.append(Search(_=> render(root)));
    root.append(wrapper); //Seach(update), mantiene la cabecera y pinta la busqueda
  } else{ //Significa que esta en la otra página;por lo que debe verse el mapa.
    const gmap = GMap();
    wrapper.append(gmap); //mapa
    wrapper.append(StationDetails()); //detalles
    root.append(wrapper); //una vez impreso, el mapa es cargado.
    gmap.init(); //precisa que el RESTO ESTE CARGADO.
  }
}

const state = {
  stations: null,
  selectedStation: null
};

//JQuery, $.getJSON(url, data, success);
$( _ => { //trayendo el objeto JSON, inicializa al cargar la página
  getJSON('stations.json', (err, json) => {  //const getJSON = (url, cb) => {
    if (err) { return alert(err.message);}
    state.stations = json;
    console.log(json);
    const root = $('.root'); //enlaza el HTML para la impresión 
    render(root); //imprime el root!!. 
  });

});

