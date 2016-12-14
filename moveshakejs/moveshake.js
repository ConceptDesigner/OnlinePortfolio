/**************************************
 TITLE: This Script Covers jQuery Animation and effects James Lewis (JL)
 CREATE DATE: 04 April 2016
 PURPOSE: Demonstrate jQuery effects
 LAST MODIFIED ON: 17 May 2016
 LAST MODIFIED BY: James Lewis (JL)
 MODIFICATION HISTORY: Changed some comments and functions
 Update:
***************************************/
$(document).ready(function() {//document ready start

  //The Show Hide and Toggle Buttons will be displayed

  //Showing and Hiding Elements
  //Already Shown. Must hide first
  $("#show").click(function() {
    $("#theDiv").show("fast", showCompletion);
  });

  //After hidden you can click show button
  $("#hide").click(function() {
    $("#theDiv").hide(1000, "swing", hideCompletion); //you could replace "swing" with "linear"
  });

  $("#toggle").click(function() {
    $("#theDiv").toggle("slow", toggleCompletion); //completion can be passed as a funtion
  });
  //Below are 3 function that will write to DOM after firing
  function toggleCompletion() {
    $(this).text("Toggle Between Both");
  }

  function hideCompletion() {
    $(this).text("Div Hides");
  }

  function showCompletion() {
    $(this).text("Div Appears");
  }

  /****************************************************************************************************************/

  //Fade Effects Starts here(JRL)
  //you can use "fast" or "slow" instead or "normal" in the parameters.
  //Fades in
  $("#fadein").click(function() {
    $("#theDiv").fadeIn("normal", peekaBoo);
  });
  //Fades out
  $("#fadeout").click(function() {
    $("#theDiv").fadeOut("normal", booaPeek);
  });
  //This is the pulse command. It's similar to a toggle
  $("#pulse").click(function() {
    $("#theDiv").fadeTo("normal", 0.3)
      .fadeTo("normal", 0.7)
      .fadeTo("normal", 0.3)
      .fadeTo("fast", 0.7)
      .fadeTo("slow", 0.3)
      .fadeTo("slow", 0.7)
      .fadeTo("slow", 0.3)
      .fadeTo("slow", 1.0, showPulse);
  });

  function showPulse() {
    $(this).text("This can Confuse the enemy");
  }

  function peekaBoo() {
    $(this).text("Show");
  }

  function booaPeek() {
    $(this).text("Hide");
  }
  /****************************************************************************************************************/

  //The Effects of Sliding

  $("#slideup").click(function() {
    $("#theDiv").slideUp("normal", slideUpComplete);
  });

  $("#slidedown").click(function() {
    $("#theDiv").slideDown("fast", "swing", slideDownComplete);
  });

  $("#slidetoggle").click(function() {
    $("#theDiv").slideToggle("slow", onToggleFinished);
  });

  function onToggleFinished() {
    //the value of "this" is set to the DOM element being affected
    $(this).text("Keep Toggling");
  }

  function slideDownComplete() {
    //the value of "this" is set to the DOM element being affected
    $(this).text("Slide Down");
  }

  function slideUpComplete() {
    //the value of "this" is set to the DOM element being affected
    $(this).text("Slide Up");
  }

  /****************************************************************************/
  //Using custom animations

  $("#right").click(function() {
    $("#theDiv").animate({
      width: "200px"
    }, 1000, stretchThin);
  });

  $("#text").click(function() {
    $("#theDiv").animate({
      fontSize: "20pt"
    }, 1000);
  });

  $("#moveRight").click(function() {
    $("#theDiv").animate({
      left: "300"
    }, 1000, "swing");
  });

  $("#all").click(function() {
    $("#theDiv").animate({
      left: "200",
      fontSize: "20pt",
      width: "300px"
    }, 1000, "swing", allComplete);
  });

  function allComplete() {
    //the value of "this" is set to the DOM element being affected
    $(this).text("All At Once");
  }

  function stretchThin() {
    //the value of "this" is set to the DOM element being affected
    $(this).text("Extend Div");
  }

});//document ready end
