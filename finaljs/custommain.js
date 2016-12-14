/**************************************
 TITLE: jQuery UI file: James Lewis (JL)
 CREATE DATE: 02 May 2016
 PURPOSE: Demonstrate Web Design, Graphic Design and Web Developing skills
 LAST MODIFIED ON: 02 May 2016
 LAST MODIFIED BY: James Lewis (JL)
 MODIFICATION HISTORY: No Modification
 Update:
***************************************/
$(document).ready(function() {

  $("#accordion").accordion();



  var availableTags = [

    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District Of Columbia",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];
  $("#autocomplete").autocomplete({
    source: availableTags
  });



  //$("#button").button();
  $("#submit").button();
  $("#reset").button();
  $("#getValue").button();
  $("#radioset").buttonset();



  $("#tabs").tabs();



  $("#dialog").dialog({
    autoOpen: false,
    width: 400,
    buttons: [{
      text: "Ok",
      click: function() {
        $(this).dialog("close");
      }
    }, {
      text: "Cancel",
      click: function() {
        $(this).dialog("close");
      }
    }]
  });

  // Link to open the dialog
  $("#dialog-link").click(function(event) {
    $("#dialog").dialog("open");
    event.preventDefault();
  });



  $("#datepicker").datepicker({
    inline: true
  });



  $("#slider").slider({
    range: true,
    values: [17, 67]
  });



  $("#progressbar").progressbar({
    value: 20
  });



  $("#spinner").spinner();


  $("#menu").menu();



  $("#tooltip").tooltip();



  $("#selectmenu").selectmenu();


  // Hover states on the static widgets
  $("#dialog-link, #icons li").hover(
    function() {
      $(this).addClass("ui-state-hover");
    },
    function() {
      $(this).removeClass("ui-state-hover");
    }
  );
  /*
    $("#button").click(function() {
      alert("Hello World");
      return false;
    });
  */



});
