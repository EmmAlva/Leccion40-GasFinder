'use strict';

const Header = (update) => {
  const header = $("<header></header>");
  const title = $("<span>Gas Finder</span>");
  const icon = $('<i class="fa fa-chevron-left" aria-hidden="true"></i>'); //icono de retorno pagina 2
  // const input = $('<input id="search" class ="station-filter" placeholder="Ingresa tu distrito a buscar">');
  // const iconInput = $('<span class="fa fa-search" aria-hidden="true"></span>');

  // header.append(input);
  // header.append(iconInput);
  // 
  icon.on('click',(e)=>{ //btn regresar
    e.preventDefault();
    state.selectedStation = null;
    update();
  });

  if(state.selectedStation != null){
    header.append(icon);
  }
    header.append(title);

  return header;
}
