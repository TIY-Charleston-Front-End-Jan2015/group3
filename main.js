var mpaaChoice ="";
var movieGenre = "";
var costner = "";
var liam ="";

var flixPage = {

init: function() {
    flixPage.initStyling();
    flixPage.initEvents();
    flixPage.initGenre();
    flixPage.initCostner();
    flixPage.initLiam();

  },

initStyling: function() {
  flixPage.question1();

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




    $('.A2').click(function(event){
      event.preventDefault();
      console.log("A");

      movieGenre = genreData.Adventure;
      console.log(movieGenre);

});
      $('.B2').click(function(event){
        event.preventDefault();
        movieGenre = genreData.Romance;
        console.log(movieGenre);
});
      $('.C2').click(function(event){
        event.preventDefault();
        movieGenre = genreData.Thriller;
        console.log(movieGenre);
});
        $('.D2').click(function(event){
        event.preventDefault();
         movieGenre = genreData.Comedy;
         console.log(movieGenre);
});

flixPage.question3();



},

///// 3rd Question costner

initCostner: function () {


$('.A3').click(function(event){
  event.preventDefault();
  console.log("A");

  costner = castData.noCostner;
  console.log(costner);
});

  $('.B3').click(function(event){
    event.preventDefault();
    costner = castData.yesCostner;
    console.log(costner);
});

  $('.C3').click(function(event){
    event.preventDefault();
    costner = castData.noCostner;
    console.log(costner);
});
    $('.D3').click(function(event){
    event.preventDefault();
    costner = castData.yesCostner;
    console.log(costner);
});

flixPage.question4();


},

initLiam: function () {

var liam = "";

$('.A4').click(function(event){
  event.preventDefault();
  liam = castData.noLiam;
  console.log(liam);
});
  $('.B4').click(function(event){
    event.preventDefault();
    liam = castData.yesLiam;
    console.log(liam);
  });
  $('.C4').click(function(event){
    event.preventDefault();
    liam = castData.noLiam;
    console.log(liam);
  });
    $('.D4').click(function(event){
    event.preventDefault();
    liam = castData.noLiam;
    console.log(liam);
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
