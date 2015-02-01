var mpaaChoice ="";
var movieGenre = "";
var costner = "";
var liam ="";


var flixPage = {

init: function() {
    flixPage.initStyling();
    flixPage.initEvents();
    ////flixPage.initGenre();
    //flixPage.initCostner();
    //flixPage.initLiam();
   //flixPage.finalMovies();

  },

initStyling: function() {
  flixPage.question1();
  flixPage.question2();
  flixPage.question3();
  flixPage.question4();
    console.log("called init styling");
  },



initEvents: function () {
// first question asked. filtering out Kids movies


  $('.B1').click(function (event){
    event.preventDefault();
    $(".question1").hide();

    $(".question2").addClass("active");
    _.each(movieData, function(currentItem){
      if (currentItem.mpaa_rating === "PG-13"){

        moviePile.push(currentItem);
        users.push("Kids");

   };

    });
});


$('.A1').click(function (event){
  event.preventDefault();
  $(".question1").hide();

  $(".question2").addClass("active");
  _.each(movieData, function(currentItem){

    moviePile.push(currentItem);
      console.log(moviePile);


  });

});

$('.C1').click(function (event){
  event.preventDefault();
  $(".question1").hide();

  $(".question2").addClass("active");
  _.each(movieData, function(currentItem){

      moviePile.push(currentItem);
      console.log(moviePile);

});

});

$('.D1').click(function (event){
  event.preventDefault();
  $(".question1").hide();

  $(".question2").addClass("active");
  _.each(movieData, function(currentItem){

      moviePile.push(currentItem);
      console.log(moviePile);


});

 }),

//OPTION A PUSHES DRAMA, ACTION, THRILLER INTO ARRAY MOVIEPILE2

  $('.A2').click(function(event){
    event.preventDefault();
    console.log("A2");
    $(".question2").hide();

    $(".question3").addClass("active");

    _.each(moviePile, function(currentItem){
      _.each(currentItem.genre, function (genre, Index, Array){
        if(genre == "Comedy") {
          moviePile2.push(currentItem)

        };

      });


    });

}),




//  _.each(moviePile, function(currentItem){
//
//      if (currentItem.genre == "Action"){
//      moviePile2.push(currentItem);
//      console.log(moviePile2);

  //};
//
  //    if (currentItem.genre == "Drama"){
  //    moviePile2.push(currentItem);
    //  console.log(moviePile2);

//};

//if (currentItem.genre == "Thriller"){
//moviePile2.push(currentItem);
//console.log(moviePile2);

//};


//});

//});

/// OPTION WILL FILTER OUT DRAMA, ROMANCE, FAMILY


      $('.B2').click(function(event){
        event.preventDefault();
        console.log("B2")
        $(".question2").hide();

        $(".question3").addClass("active");
        _.each(moviePile, function(currentItem){

        if (currentItem.genre == "Romance"){
        moviePile2.push(currentItem);

        console.log(moviePile2);
};

        if (currentItem.genre == "Family"){
        moviePile2.push(currentItem);
        console.log(moviePile2);
};

        if (currentItem.genre == "Drama"){
        moviePile2.push(currentItem);
        console.log(moviePile2);

};

});
});

//// OPTION WILL FILTER OUT HORROR AND THRILLER

$('.C2').click(function(event){
  event.preventDefault();
  console.log("C2");
  $(".question2").hide();

/// Parental Alert
  _.each(users, function (currentItem){

    if(currentItem === "Kids"){
    $(".badParent").css({"display": "block"});
    $(".question3").hide();

  };

  });


  $(".question3").addClass("active");
_.each(moviePile, function(currentItem){

    if (currentItem.genre == "Thriller"){
    moviePile2.push(currentItem);
    console.log(moviePile2);

};




});

});



///WILL FILTER OUT COMEDY

$('.D2').click(function(event){
  event.preventDefault();
  console.log("D2");
  $(".question2").hide();
  //flixPage.question3();
  $(".question3").addClass("active");
_.each(moviePile, function(currentItem){

    if (currentItem.genre == "Comedy"){
    moviePile2.push(currentItem);
    console.log(moviePile2);

};


});

});





///// OPTION ADDS COSTNER IF NOT ALREADY ADDED


$('.A3').click(function(event){
  event.preventDefault();
  console.log("A3");
  $(".question3").hide();

  $(".question4").addClass("active");
_.each(moviePile2, function(currentItem){
    moviePile3.push(currentItem);
    if (currentItem.abridged_cast == "Kevin Costner"){
    moviePile3.push(currentItem);
    console.log(moviePile3);

};

});

});

/// OPTION REMOVES COSTNER IF ADDED

$('.B3').click(function(event){
  event.preventDefault();
  console.log("B3");
  $(".question3").hide();

  $(".question4").addClass("active");
_.each(moviePile2, function(currentItem){
    moviePile3.push(currentItem);

    if (currentItem.abridged_cast == "Kevin Costner"){
    moviePile3.remove(currentItem);
    console.log(moviePile3);

};

});

});


$('.C3').click(function(event){
  event.preventDefault();
  console.log("C3");
  $(".question3").hide();

  $(".question4").addClass("active");
_.each(moviePile2, function(currentItem){
    moviePile3.push(currentItem);
    if (currentItem.abridged_cast == "Kevin Costner"){
    moviePile3.push(currentItem);
    console.log(moviePile3);

};

});

});

$('.D3').click(function(event){
  event.preventDefault();
  console.log("D3");
  $(".question3").hide();

  $(".question4").addClass("active");
_.each(moviePile2, function(currentItem){
    moviePile3.push(currentItem);
    if (currentItem.abridged_cast == "Kevin Costner"){
    moviePile3.push(currentItem);
    console.log(moviePile3);

};

});

});


//// LIAM NEESON

$('.A4').click(function(event){
  event.preventDefault();
  console.log("A4");
  $(".question4").hide();


_.each(moviePile3, function(currentItem){
    moviePile4.push(currentItem);
    if (currentItem.abridged_cast == "Liam Neeson"){
    moviePile4.remove(currentItem);
    console.log(moviePile3);

};

});
///call on final movies list
    flixPage.finalMovies();
});


$('.B4').click(function(event){
  event.preventDefault();
  console.log("B4");
  $(".question4").hide();

//WILL PUSH LIAM NEESON MOVIE IF NOT ALREADY PUSHED
_.each(moviePile3, function(currentItem){
  moviePile4.push(currentItem);
    if (currentItem.abridged_cast == "Liam Neeson"){
    moviePile4.push(currentItem);
    console.log(moviePile3);

};

});
flixPage.finalMovies();

});


$('.C4').click(function(event){
  event.preventDefault();
  console.log("C4");
  $(".question4").hide();

  $(".question1").addClass("active");
_.each(moviePile3, function(currentItem){
  moviePile4.push(currentItem);
    if (currentItem.abridged_cast == "Liam Neeson"){
    moviePile4.remove(currentItem);
    console.log(moviePile4);

};

});
flixPage.finalMovies();
});




$('.D4').click(function(event){
  event.preventDefault();
  console.log("D4");
  $(".question4").hide();


  _.each(moviePile3, function(currentItem){
  moviePile4.push(currentItem);
    if (currentItem.abridged_cast == "Liam Neeson"){
    moviePile4.remove(currentItem);
    console.log(moviePile4);

};

});
flixPage.finalMovies();
});

},
//// Section for final selections
finalMovies: function (){
  var finalTmpl = _.template(templates.movieFinals);
  var html = "";
  _.each(moviePile4, function (currentItem){
    html += finalTmpl(currentItem);
  });


  $(".finalMovies").addClass("active");
  $("section").append(html);
  console.log(html);






},


////// Question Section

question1: function () {
  var questTmpl = _.template(templates.question1);
  var html = "";
  _.each(questions1Data, function (currentItem, index, array){
  html += questTmpl(currentItem);
});
  $("section").append(html);
console.log(html);
},

question2: function () {
  var questTmpl = _.template(templates.question2);
  var html = "";
  _.each(questions2Data, function (currentItem, index, array){
  html += questTmpl(currentItem);
});
  $("section").append(html);
console.log(html);
},

question3: function () {
  var questTmpl = _.template(templates.question3);
  var html = "";
  _.each(questions3Data, function (currentItem, index, array){
  html += questTmpl(currentItem);
});
  $("section").append(html);
console.log(html);
},

question4: function () {
  var questTmpl = _.template(templates.question4);
  var html = "";
  _.each(questions4Data, function (currentItem, index, array){
  html += questTmpl(currentItem);
});
  $("section").append(html);
console.log(html);
},

}

$(document).ready(function(){
  flixPage.init();

});
