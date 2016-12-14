/**************************************
 TITLE:Form Validation James Lewis (JL)
 CREATE DATE: 02 May 2016
 PURPOSE: Demonstrate Web Design, Graphic Design and Web Developing skills
 LAST MODIFIED ON: 02 May 2016
 LAST MODIFIED BY: James Lewis (JL)
 MODIFICATION HISTORY: No Modification
 Update:
***************************************/
$(document).ready(function() { //start document.ready
  /* Validation plugin - Define form functionality */

  $.validator.setDefaults({ //open validator.setDefaults
    submitHandler: function() { // (open submit handler function) Send output to screen
        //getting the values from the form
        var userFirstName = $('#firstName').val(); //Name on form
        var userLastName = $('#lastName').val(); //Name on form
        var userAddress = $('#streetAddress').val(); //Name on form
        var userPhone = $('#phoneNumber').val();
        var userEmailAddress = $('#emailAddress').val();
        var userPassword = $('#password').val();
        var userAnswer = $('#autocomplete').val();
        var userDate = $('#datepicker').val();
        var userHours = $('#spinner').val();
        var userProjectDes = $('#userTextArea').val();
        var userProfession = $('input[name="profession"]').val();

        $("#myForm").validate();

        //outputting the values to the page
        $("#outputFirstName").text(userFirstName);
        $("#outputLastName").text(userLastName);
        $("#outputAddress").text(userAddress);
        $("#outputPhone").text(userPhone);
        $("#outputEmailAddress").text(userEmailAddress);
        $("#outputPassword").text(userPassword);
        $("#outputAnswer").text(userAnswer);
        $("#outputDate").text(userDate);
        $("#outputHours").text(userHours);
        $("#outputProjectDes").text(userProjectDes);
        $("#outputProfession").text(userProfession);
      } // end submitHandler
  }); // end validator.setDefaults

  // Use custom rules and error messages when validating $("#myForm").validate();
  $("#myForm").validate({ //open myForm.validate

    rules: { //open start rules
      firstName: { //<input name="lastName">
        required: true,
        maxlength: 15
      },

      lastName: { //<input name="lastName">
        required: true,
        maxlength: 15,
      },

      streetAddress: { //<input name="streetAddress"
        required: true,
        maxlength: 25
      },

      phoneNumber: { //<input name="phoneNumber">
        required: true,
        digits: true,
        maxlength: 10
      },

      emailAddress: { //<input name="emailAddress">
        required: true,
        email: true
      },

      password: { //<input name="password">
        required: true,
        minlength: 4
      }

    }, // close start rules

    messages: { // (open messages)These messages are displayed when user input doesn't match the rules
      firstName: { //<input name="firstName">
        required: "Please enter a valid first name",
        maxlength: $.validator.format("Must not have more than {0} characters")

      },

      lastName: { //<input name="lastName">
        required: "Please enter a valid last name",
        maxlength: $.validator.format("Must not have more than {0} characters")

      },

      streetAddress: { //<input name="streetAddress">
        required: "Please provide a valid Address",
        maxlength: $.validator.format("Must have at least {0} characters")
      },

      phoneNumber: { //<input name="phoneNumber">
        required: "Please enter a valid phone number",
        maxlength: 10
      },

      emailAddress: { //<input name="emailAddress">
        required: "Please enter an email address",
        emailAddress: "Please enter a valid email address"
      },

      password: { //<input name="password">
        required: "Please provide a password",
        minlength: $.validator.format("Must have at least {0} characters")
      } // close messages

    } //end "#myForm".validate

  });



});
