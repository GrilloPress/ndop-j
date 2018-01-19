$(window).load(function() {
  preferenceChecker();
});

var PROTOTYPE_URL = "/spen";

function preferenceChecker() {
  var pref = sessionStorage.singlePref;

  // This is now an ugly hack...

  var prefText = ( pref == "true"  ) ?  "<p>Your preferences are currently set to <strong>share</strong> your health data.</p>" : "<p>Your preferences are currently set to <strong>not share</strong> your health data.</p>";

  $( '#your-preference' ).after( prefText );

};
