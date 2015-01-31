var pgRatingMovies = [];
var rRatingMovies = [];

var movieSelector ={


  init: function() {

    movieSelector.initStyling();
    // movieSelector.initEvents();
  },

  initStyling: function() {

    movieSelector.renderMovies(moviedata);

  },

// initEVents: function() {
//
// },


selectRating: function(val) {
  if(val.mpaa_rating === "PG" || val.mpaa_rating ==="PG-13") {
    pgRatingMovies.push(val.title);

  } else if (val.mpaa_rating === "R") {
    rRatingMovies.push(val.title);
  }
},

renderMovies: function (movieObject) {
  console.log(movieObject);

   _.each(movieObject,movieSelector.selectRating);


 }
};




$(document).ready(function () {
  movieSelector.init();

});
