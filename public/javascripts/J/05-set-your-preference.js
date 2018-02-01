var PROTOTYPE_URL = "/J";

$(window).load( function() {
  
  $( '#single-question' ).change( function() {

    $( 'input[name="single-pref"]:checked' ).each( function () {

      $(this).parent().addClass( "checked" );

    })

    $( 'input[name="single-pref"]:not(:checked)' ).each( function () {

      $(this).parent().removeClass( "checked" );

    })

  })
});

$(window).ready(function() {

  if ( sessionStorage.singlePref == "true" ) {
    $(" #preference ").text( "use");
    $( "#single-opted-in" ).prop( "checked", true ).parent().addClass( "checked" );
    $( ".alert" ).fadeIn( 1000, function() {
    // Animation complete
    });
  } else if ( sessionStorage.singlePref == "false" ) {

    $(" #preference ").text( "not use");
    $( "#single-opted-out" ).prop( "checked", true ).parent().addClass( "checked" );
    $( ".alert" ).fadeIn( 1000, function() {
    // Animation complete
    });

  } else {

    return
  }

});

//Javascript to direct user to correct confirmation page based on their data sharing preferences
// Check that form is filled out
// Serve errors if not
// save options to local/session storage
// direct to next page, where preferences are stored and displayed
// On the next page, if not preferences are set, it will be random

//Sets opt in preferences to session
function setSinglePref() {
  var singlePref = $('input[name="single-pref"]:checked').val();

  if (singlePref == 'single-opted-out') {
    sessionStorage.singlePref = "false";
  } else if( singlePref == 'single-opted-in' ) {
    sessionStorage.singlePref = "true";
  } else {
    sessionStorage.singlePref = "";
    return false;
  }

};

//takes user to correct page based on the settings they have set
function confirm() {
  var singlePref = sessionStorage.singlePref;

  if (singlePref == "true") {
    window.location.href = PROTOTYPE_URL + '/app/06-confirm-your-preference';
  } else if (singlePref == "false") {
    window.location.href = PROTOTYPE_URL + '/app/06-confirm-your-preference';
  } else {
    $(" .error-summary ").addClass(" error-message-active ").focus();

    if (singlePref == "") {
      $('#single-question-link').remove();

      $( '#single-question' ).addClass("form-row-error-active has-error");
      $( '#single-question h2' ).addClass("error-label");
      $( "#link-to-errors" ).append( "<li id='single-question-link'>" + "<a href='#single-question'>" + "No single preference set" + "</a>" + "</li>" );
    } else {
      $( '#single-question' ).removeClass("form-row-error-active has-error");
      $( '#single-question h2' ).removeClass("error-label");
      $('#single-question-link').remove();
      $( "#link-to-errors" ).append( "<li id='single-question-link'>" + "<a href='#single-question'>" + "No single preference set" + "</a>" + "</li>" );
    }

    $('html,body').animate({scrollTop: $('#error-summary').offset().top -100});
    return;
  }
};

function confirmAll() {
  setSinglePref();
  confirm();
}
