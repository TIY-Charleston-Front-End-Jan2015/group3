var movieSelector ={


  init: function() {

    movieSelector.initStyling();
    movieSelector.initEvents();
  },

  initStyling: function() {

    movieSelector.renderMovies();
    movieSelector.renderAllMovies(moviedata);
  },

initEVents: function() {

},




renderMovies: function (movieObject) {

  var movieTmpl = _.template(templates.movieInfo);
  $("body").append(repoTmpl(movieObject));
},

renderAllMovies: function (movieArray) {

  _.each(movieArray,movieSelector.renderMovies);
},

};



$(document).ready(function () {
  movieSelector.init();

});
