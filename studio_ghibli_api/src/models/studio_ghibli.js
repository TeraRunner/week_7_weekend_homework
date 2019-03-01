const RequestHelper = require('../helpers/request_helper.js')
const PubSub = require('../helpers/pub_sub.js')

const StudioGhibli = function () {
  this.data = null;
}

StudioGhibli.prototype.getData = function () {
  const url = `https://ghibliapi.herokuapp.com`;
  const request = new RequestHelper(url);
  request.get()
    .then((data) => {
      this.data = data;
      PubSub.publish('Studio-Ghibli:Studio-Ghibli-data-loaded', this.data);
    })
    .catch((error) => console.error(error));
};

module.exports = StudioGhibli;
