//Javascript to direct user to correct confirmation page based on their data sharing preferences
// Check that form is filled out
// Serve errors if not
// save options to local/session storage
// direct to next page, where preferences are stored and displayed
// On the next page, if not preferences are set, it will be random

//Sets research opt in preferences to session
function setResearchPref() {
  var researchPref = $('input[name="research-pref"]:checked').val();

  if (researchPref == 'research-opted-out') {
    sessionStorage.researchPref = "false";
  } else if( researchPref == 'research-opted-in' ) {
    sessionStorage.researchPref = "true";
  } else {
    sessionStorage.researchPref = "";
    return false;
  }

};

//sets planning opt in preferences to session
function setPlanningPref() {
  var planningPref = $('input[name="planning-pref"]:checked').val();

  if (planningPref == 'planning-opted-out') {
    sessionStorage.planningPref = "false";
  } else if (planningPref == 'planning-opted-in') {
    sessionStorage.planningPref = "true";
  } else {
    sessionStorage.planningPref = "";
    return false;
  }
};

//takes user to correct page based on the settings they have set
function confirm() {
  var researchPref = sessionStorage.researchPref;
  var planningPref = sessionStorage.planningPref;

  if (researchPref == "true" && planningPref == "true") {
    window.location.href = '/F/app/06-confirm-your-choice';
  } else if (researchPref == "true" && planningPref == "false") {
    window.location.href = '/F/app/06-confirm-your-choice';
  } else if (researchPref == "false" && planningPref == "true") {
    window.location.href = '/F/app/06-confirm-your-choice';
  } else if (researchPref == "false" && planningPref == "false") {
    window.location.href = '/F/app/06-confirm-your-choice';
  } else {
    $(" .error-summary ").addClass(" error-message-active ").focus();

    if (researchPref == "") {
      $('#research-question-link').remove();

      $( '#research-question' ).addClass("form-row-error-active has-error");
      $( '#research-question h2' ).addClass("error-label");
      $( "#link-to-errors" ).append( "<li id='research-question-link'>" + "<a href='#research-question'>" + "No research preference set" + "</a>" + "</li>" );
    } else {
      $( '#research-question' ).removeClass("form-row-error-active has-error");
      $( '#research-question h2' ).removeClass("error-label");
      $('#research-question-link').remove();
    }

    if (planningPref == "") {
      $('#planning-question-link').remove();

      $( '#planning-question' ).addClass("form-row-error-active has-error");
      $( '#planning-question h2' ).addClass("error-label");
      $( "#link-to-errors" ).append( "<li id='planning-question-link'>" + "<a href='#planning-question'>" + "No planning preference set" + "</a>" + "</li>" );
    } else {
      $( '#planning-question' ).removeClass("form-row-error-active has-error");
      $( '#planning-question h2' ).removeClass("error-label");
      $('#planning-question-link').remove();
    }

    $('html,body').animate({scrollTop: $('#error-summary').offset().top -100});
    return;
  }
};

function confirmAll() {
  setResearchPref();
  setPlanningPref();
  confirm();
}
