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
       console.log("initevents");
       flixPage.question2();

    },

/// second question asked. filtering out Genre


var movieGenre = "";


    $('.A2').click(function(event){
      event.preventDefault();
      movieGenre = genreData.Adventure;

      $('.B2').click(function(event){
        event.preventDefault();
        movieGenre = genreData.Romance;

      $('.C2').click(function(event){
        event.preventDefault();
        movieGenre = genreData.Thriller;

        $('.D2').click(function(event){
        event.preventDefault();
        movieGenre = genreData.Comedy;

    var movieq2 = "";
  mpaaChoice === mpaaData.Kids && movieGenre==genreData.Adventure = movieq2;
  mpaaChoice === mpaaData.Kids && movieGenre==genreData.Romance = movieq2;
  mpaaChoice === mpaaData.Kids && movieGenre==genreData.Thriller = movieq2;
  mpaaChoice === mpaaData.Kids && movieGenre==genreData.Thriler = movieq2;


  }

///// 3rd Question costner

var costner = "";

$('.C1').click(function(event){
  event.preventDefault();
  costner = castData.nocostner;

  $('.C2').click(function(event){
    event.preventDefault();
    costner = castData.yescostner;

  $('.C3').click(function(event){
    event.preventDefault();
    costner = castData.nocostner;

    $('.C4').click(function(event){
    event.preventDefault();
    costner = castData.yescostner;

var movieq3 = "";
costner===castData.nocosnter && movieq2 = movieq3;
costner===castData.yescosnter && movieq2 = movieq3;

}

var liam = "";

$('.D1').click(function(event){
  event.preventDefault();
  costner = castData.noliam;

  $('.D2').click(function(event){
    event.preventDefault();
    costner = castData.yesliam;

  $('.D3').click(function(event){
    event.preventDefault();
    costner = castData.noliam;

    $('.D4').click(function(event){
    event.preventDefault();
    costner = castData.noliam;

var movieq4 = "";
liam===castData.noliam && movieq3 = movieq4;
liam===castData.yesliam && movieq3 = movieq4;

}






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
