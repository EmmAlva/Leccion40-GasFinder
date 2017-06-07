'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  
  wrapper.append(Header(_ => render(root)));
  if(state.selectedStation == null){
    wrapper.append(StationGrid( _=> {
      render(root);
    }));
  }else{
    wrapper.append(StationDetails( _ => {
      render(root);

      //En index.js

   var Gmap = () => {
      var wrapper = $('<div id="map"></div>');
      wrapper.initMap = initMap.bind(null,wrapper.get(0));
      return wrapper;
    }  


  var gmap = Gmap();
  gmap.initMap();




   



    }));
  }




  root.append(wrapper);
}

const state = {
  stations: null,
  selectedStation: null
};


$( _ => {

  getJSON('stations.json', (err, json) => {

    if (err) { return alert(err.message);}

    state.stations = json;

    const root = $('.root');
    render(root);
  });

});

