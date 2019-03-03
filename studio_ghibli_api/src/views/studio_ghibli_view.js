const PubSub = require('../helpers/pub_sub.js');

const StudioGhibliView = function (container) {
  this.container = container;
}

StudioGhibliView.prototype.bindEvents = function () {
  PubSub.subscribe('StudioGhibli:StudioGhibli-data-loaded', (evt) => {
    const films = evt.detail;
    console.log(films);
    this.render(films);
  });
}

StudioGhibliView.prototype.render = function (films) {
  films.forEach((film) => {
    const title = document.createElement('h2');
    title.textContent = film.title;
    this.container.appendChild(title);

    const rtScore = document.createElement('h4');
    rtScore.textContent = `Rating Score: ${film.rt_score}`;
    this.container.appendChild(rtScore);

    const filmUl = document.createElement('ul');
    this.container.appendChild(filmUl);

    const directorLi = document.createElement('li');
    directorLi.textContent = `Director: ${film.director}`;
    this.container.appendChild(directorLi);

    const producerLi = document.createElement('li');
    producerLi.textContent = `Producer: ${film.producer}`;
    this.container.appendChild(producerLi);

    const releaseDateLi = document.createElement('li');
    releaseDateLi.textContent = `Release date: ${film.release_date}`;
    this.container.appendChild(releaseDateLi);

    const description = document.createElement('p');
    description.textContent = film.description;
    this.container.appendChild(description);

    const url = document.createElement('a');
    url.textContent = `URL: ${film.url}`;
    url.href = film.url;
    this.container.appendChild(url);

  })
};

module.exports = StudioGhibliView;
