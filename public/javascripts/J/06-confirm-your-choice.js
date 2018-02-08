$(window).load(function() {
	confirmationChecker();
  preferenceChecker();
});

var PROTOTYPE_URL = "/J";

function preferenceChecker() {
  var pref = sessionStorage.singlePref;

  // This is now an ugly hack...

  var prefText = ( pref == "true"  ) ?  "<p>Your personally identifiable data <strong>can</strong> be used | <a href='" + PROTOTYPE_URL + "/app/05-make-your-choice' onclick='history.go(-1); return false;'>Change <span class='util-visuallyhidden'>your preference</span></a></p>" : "<p>Your health data <strong>will not</strong> be used | <a href='" + PROTOTYPE_URL + "/app/05-make-your-choice' onclick='history.go(-1); return false;'>Change</a></p>";

  $( '#your-preference' ).after( prefText );

};

function confirmationChecker() {
  var confirmationType = localStorage.verificationOption;

	if (confirmationType == "email") {
		$("#email-confirm").show();
	} else if (confirmationType == "mobile") {
		$("#mobile-confirm").show();
	} else {
    $("#mobile-confirm").show();
		return
    // do we still want to do this? $("#post-confirm").show();
	}

};
