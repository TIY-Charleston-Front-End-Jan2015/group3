var mpaaChoice ="";

var flixPage = {

init: function() {
    flixPage.initStyling();
    flixPage.initEvents();

  },

initStyling: function() {
    flixPage.question1();
    flixPage.question2();


    console.log("called init styling");
  },



initEvents: function () {
// first question asked. filtering out Kids movies

  $('.B1').click(function (event){
    event.preventDefault();
        console.log("B");

      mpaaChoice = mpaaData.Kids;
      console.log(mpaaChoice);


});

$('.A1').click(function (event){
  event.preventDefault();
      console.log("A");

    mpaaChoice = mpaaData.All;
    console.log(mpaaChoice);


});

$('.C1').click(function (event){
  event.preventDefault();
      console.log("B");

    mpaaChoice = mpaaData.All;
    console.log(mpaaChoice);


});
$('.D1').click(function (event){
  event.preventDefault();
      console.log("B");

    mpaaChoice = mpaaData.All;
    console.log(mpaaChoice);


});

       console.log("initevents");
       flixPage.question2();

    },

/// second question asked. filtering out Genre

initGenre: function () {
var movieGenre = "";


    $('.A2').click(function(event){
      event.preventDefault();
      movieGenre = genreData.Adventure;
});
      $('.B2').click(function(event){
        event.preventDefault();
        movieGenre = genreData.Romance;
});
      $('.C2').click(function(event){
        event.preventDefault();
        movieGenre = genreData.Thriller;
});
        $('.D2').click(function(event){
        event.preventDefault();
         movieGenre = genreData.Comedy;
});





},

///// 3rd Question costner

initCostner: function () {

var costner = "";

$('.C1').click(function(event){
  event.preventDefault();
  costner = castData.nocostner;
});

  $('.C2').click(function(event){
    event.preventDefault();
    costner = castData.yescostner;
});

  $('.C3').click(function(event){
    event.preventDefault();
    costner = castData.nocostner;
});
    $('.C4').click(function(event){
    event.preventDefault();
    costner = castData.yescostner;
});

var movieq3 = "";


},

initLiam: function () {

var liam = "";

$('.D1').click(function(event){
  event.preventDefault();
  costner = castData.noliam;
});
  $('.D2').click(function(event){
    event.preventDefault();
    costner = castData.yesliam;
  });
  $('.D3').click(function(event){
    event.preventDefault();
    costner = castData.noliam;
  });
    $('.D4').click(function(event){
    event.preventDefault();
    costner = castData.noliam;
  });

var movieq4 = "";


},






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
  var questTmpl = _.template(templates.question1);
  var html = "";
  _.each(questions3Data, function (currentItem, index, array){
  html += questTmpl(currentItem);
});
  $("section").append(html);
console.log(html);
},
question4: function () {
  var questTmpl = _.template(templates.question1);
  var html = "";
  _.each(questions1Data, function (currentItem, index, array){
  html += questTmpl(currentItem);
});
  $("section").append(html);
console.log(html);
},

}

$(document).ready(function(){
  flixPage.init();

});
