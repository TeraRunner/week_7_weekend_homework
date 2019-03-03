const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const StudioGhibli = function () {
  this.data = null;
}

StudioGhibli.prototype.getData = function () {
  const url = `https://ghibliapi.herokuapp.com/films`;
  const request = new RequestHelper(url);
  request.get()
    .then((data) => {
      this.data = data;
      PubSub.publish('StudioGhibli:StudioGhibli-data-loaded', this.data);
      console.log(data);
    })
    .catch((error) => console.error(error));
};

module.exports = StudioGhibli;
