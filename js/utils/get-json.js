'use strict';


const getJSON = (url, cb) => {

  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {

    if (xhr.status !== 200) {
      return cb(new Error('Error loading JSON from ' + url + '(' + xhr.status + ')'));
    }//(error,json) --> error mensaje

    cb(null, xhr.response); //(error, json) -->data
  });

  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.send();
};
