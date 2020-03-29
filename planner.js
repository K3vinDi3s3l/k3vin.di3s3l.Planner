$(function () {

    //Makes list of all testareas by class description
    var textAreas = $('.description');
  
    //If local storage isn't empty, load all saved text area text
    if (localStorage && localStorage.length > 0) {
      for (var i = 0; i < textAreas.length; i++) {
        $(textAreas[i]).text(localStorage.getItem(`${i}`));
      }
    }
  
    //Sets current day using moment.js
    $("#currentDay").text(moment().format("dddd[,] MMM Do YYYY"));
  
    //Create moment formatted strings to compare later
    var currentDate = moment().format("L")
    var currentTime = moment().format("L h a");
  
    //Makes a list of all hours in scheduler
    var hourElem = $(".hour");
  
  
  //Checks actual time against every hour on scheduler
    for (var i = 0; i < hourElem.length; i++) {
  
      var checkDate = `${currentDate} ${$(hourElem[i]).text()}`;
  
      if (moment(checkDate, 'L h a').isBefore(moment(currentTime, 'L h a'))) {
        $(hourElem[i]).next().addClass("past");
      } else if (moment(checkDate, 'L h a').isSame(moment(currentTime, 'L h a'))) {
        $(hourElem[i]).next().addClass("present");
      } else {
        $(hourElem[i]).next().addClass("future");
      }
    }
  
  //Makes jquery event for class saveBtn
  // (Will apply to ALL buttons regardless of which is clicked)
    $('.saveBtn').click(saveHtml);
  
  //Function to store every textarea text in local storage
    function saveHtml() {
      for (var i = 0; i < textAreas.length; i++) {
        $(textAreas[i]).text($(textAreas[i]).val());
        localStorage.setItem(`${i}`, $(textAreas[i]).text());
      }
    }
  
  
  });