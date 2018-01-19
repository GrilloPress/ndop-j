$(window).load(function() {
	confirmationChecker();
  preferenceChecker();
});

function preferenceChecker() {
  var researchPref = sessionStorage.researchPref;
  var planningPref = sessionStorage.planningPref;

  // This is now an ugly hack...

  var researchPrefText = ( researchPref == "true"  ) ?  "<p>Your health data <strong>will</strong> be shared for research purposes | <a href='/F/app/05-make-your-choice' onclick='history.go(-1); return false;'>Edit <span class='util-visuallyhidden'>your research preference</span></a></p>" : "<p>Your health data <strong>will not</strong> be shared for research purposes | <a href='/F/app/05-make-your-choice' onclick='history.go(-1); return false;'>Edit</a></p>";

  var planningPrefText = ( planningPref == "true" ) ?  "<p>Your health data <strong>will</strong> be shared for planning purposes | <a href='/F/app/05-make-your-choice' onclick='history.go(-1); return false;'>Edit <span class='util-visuallyhidden'>your planning preference</span></a></p>" : "<p>Your health data <strong>will not</strong> be shared for planning purposes | <a href='/F/app/05-make-your-choice' onclick='history.go(-1); return false;'>Edit</a></p>";

  $( '#your-planning-preferences' ).after( planningPrefText );
  $( '#your-research-preferences' ).after( researchPrefText );

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
