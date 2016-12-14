/**************************************
 TITLE: Triggered James Lewis (JL)
 CREATE DATE: 30 March 2016
 PURPOSE: Demonstrate Web Design, Graphic Design and Web Developing skills
 LAST MODIFIED ON: 30 March 2016
 LAST MODIFIED BY: James Lewis (JL)
 MODIFICATION HISTORY:
 Update:
***************************************/


$(document).ready(function() {

  //event registrations
  $("#resultButton").click(seeResults);
  $(document).keypress(pressTheKey);
  $(document).dblclick(clickMouseTwice);
  $(window).load(captainSpeaking);
  $(window).resize(focus);
  

  $("#intro").css("font-weight", "bold");
  $(".switch").css("color", "red");


  //function that fires standard cannon
  function pressTheKey() {
    $('#standard').append(' Boom! ');
  }

  //Double Clicking fires Secondary weapon
  function clickMouseTwice() {
    $('#strong').append(' Kablam! ');
  }

  //Will act as an alert when the page loads
  function captainSpeaking() {
    alert("This is a demonstration so follow directions");
  }

  //Will fire God weapon
  function focus() {
    $('#god').append(" Pow!!!");
  }
  //Will read the results of the damage
  function seeResults() {
    $('#results').append(" You Won!");
  }

});
