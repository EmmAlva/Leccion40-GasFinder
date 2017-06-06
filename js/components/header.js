'use strict';

const Header = (update) => {
  const header = $("<header></header>");
  const title = $("<span>Gas Finder</span>");
  const icon = $('<i class="fa fa-chevron-left" aria-hidden="true"></i>'); //icono de retorno pagina 2
  const input = $('<input id="search" class ="station-filter" placeholder="Ingresa tu distrito a buscar">');
  const iconInput = $('<span class="fa fa-search" aria-hidden="true"></span>');

  header.append(title);
  header.append(input);
  header.append(iconInput);

 /* if(page#2){
  	 header.append(icon);

  	icon.on('click',(e) => {
    e.preventDefault();
    state.selectedStation = null;
    update();
  	})

  };*/


  return header;
}
