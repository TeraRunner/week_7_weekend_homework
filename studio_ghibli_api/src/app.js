const StudioGhibli = require('./models/studio_ghibli.js');
const StudioGhibliView = require('./views/studio_ghibli_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const filmContainer = document.querySelector('#film-container');
  const filmView = new StudioGhibliView(filmContainer);
  filmView.bindEvents();

  const studioGhibli = new StudioGhibli();
  studioGhibli.getData();

});
