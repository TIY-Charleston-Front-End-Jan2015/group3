
if(movieData.mpaa === "PG-13") {
  var moviePile = _.template(template.movieStack);


} else if(movieData.mpaa === "R") {
  var moviePile= _.template(template.movieStack);

},

if(moviePile.genre === "Adventure") {
  var moviePile2= _.template(template.movieStack);
} else if (moviePile.genre === "Romance") {
  var moviePile2= _.template(template.movieStack);
} else if(moviePile.genre === "Thriller"){
  var moviePile2= _.template(template.movieStack);
} else if(moviePile.genre === "Comedy") {
  var moviePile2= _.template(template.movieStack);
} ,

if(moviePile2.castData === "Costner") {
  var moviePile3= _.template(template.movieStack);
} else if (moviePile2.castData != "Costner") {
  var moviePile3= _.template(template.movieStack);
},

if(moviePile3.castData === "Liam") {
  var moviePile4= _.template(template.movieStack);

} else if (moviePile3.castData != "Liam") {
  var moviePile3= _.template(template.movieStack);
},


$("section").append(moviePile3);
