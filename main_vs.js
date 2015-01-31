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


/* pseudo-code for quiz

Question 1:

if answer=B: return array of all PG and PG-13-rated movies, then go straight to final screen (not through other questions) Imee, is this OK?
else: return array of all R-rated movies (=all movies - PG&PG-13 movies)

Question 2:

if answer=A: of the movies from the array generated in question 1, create new array of those movies with genre=Thriller/Action
            Only for these, go to question 4 (Liam Neeson is only in Taken 3, and that is a Thriller/Action)
if answer=B: of the movies from the array generated in question 1, create new array of those movies with genre=Romance. Then go to final screen.
if answer=C: of the movies from the array generated in question 1, create new array of those movies with genre=drama (question response needs to be changed first).
            Only for these, go to question 3 (Kevin Costner is only in one movie, and that is a drama)
if answer=D: of the movies from the array generated in question 1, create new array of those movies with genre=comedy. Then go to final screen.



Question 3:

if answer=A: return movie with title===Black or White on final screen
if answer=B: of the movies from the array generated in question 2, answer C: take out movie with title===Black or White. Then go to final screen.
else: return same array as in question 2. Then go to final screen.

Question 4:

if answer=A: of the movies from the array generated in question 2, answer A: take out movie with title===Taken 3.Then go to final screen.
else: return same array as in question 2. Then go to final screen. Imee, is this what you intended?

Final screen: display final selection of movies with details (see template).

















*/
