const RequestHelper = require('./helpers/request_helper.js')
const PubSub = require('./helpers/pub_sub.js')
const StudioGhibli = require('./models/studio_ghibli.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const studioGhibli = new StudioGhibli();
  studioGhibli.getData();
  console.log(studioGhibli);

});
