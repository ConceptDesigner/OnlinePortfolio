/**************************************
 TITLE: Slidehow for James Lewis (JL)
 CREATE DATE: 13 April 2016
 PURPOSE: Demonstrate Web Design, Graphic Design and Web Developing skills
 LAST MODIFIED ON: 13 April 2016
 LAST MODIFIED BY: James Lewis (JL)
 MODIFICATION HISTORY:
 Update:
***************************************/

$(document).ready(function() {//document ready start

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);

});//end document ready