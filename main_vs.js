var movieSelector ={


  init: function() {

    movieSelector.initStyling();
    // movieSelector.initEvents();
  },

  initStyling: function() {

    movieSelector.renderMovies();

  },

// initEVents: function() {
//
// },




renderMovies: function (movieObject) {

  var selectRating = function(val) {
  if(val.mpaa_rating === "PG" || "PG-13") {
    return val.title;}
  };
   _.each(moviedata,movieSelector.selectRating);

   console.log(movieObject);
}

};



$(document).ready(function () {
  movieSelector.init();

});
