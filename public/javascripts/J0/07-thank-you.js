$(window).load(function() {
  thankYouMessage();
  $( ".alert" ).fadeIn( 1000, function() {
  })
});

var PROTOTYPE_URL = "/J0";

function thankYouMessage() {
  var pref = sessionStorage.singlePref;

  // This is now an ugly hack...

  if ( pref == "true" ) {
    $( "#shared" ).removeClass( "util-visuallyhidden" );

  } else {
    $( "#not-shared" ).removeClass( "util-visuallyhidden" )
  }

};
