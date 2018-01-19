//

var PROTOTYPE_URL = "/spen";

$(window).ready(function() {

  if (sessionStorage.singlePref == "false" ) {
    $(" #preference ").text( "not share");
  } else {
    $(" #preference ").text( "share");
  }

  $( ".alert" ).fadeIn( 1000, function() {
    // Animation complete
  });

  if (sessionStorage.singlePref == "false" || "true" ) {
    $( "#preference-button" ).text( "Edit your preference" );
  }

});
