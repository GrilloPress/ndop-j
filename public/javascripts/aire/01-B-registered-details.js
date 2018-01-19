var PROTOTYPE_URL = "/aire";

//takes user to correct page based on the settings they have set
function confirm() {
  var registeredDetailsPref = $('input[name="registered-details-pref"]:checked').val();

  if (registeredDetailsPref == "true") {
    window.location.href = PROTOTYPE_URL + '/journey/02-NHS-number';
  } else if (registeredDetailsPref == "false") {
    window.location.href = PROTOTYPE_URL + '/journey/01-C-contact-us';
  } else {
    $(" .error-summary ").addClass(" error-message-active ").focus();
      $('#registered-details-question-link').remove();

      $( '#registered-details-question' ).addClass("form-row-error-active has-error");
      $( '#registered-details-question h2' ).addClass("error-label");
      $( "#link-to-errors" ).append( "<li id='registered-details-question-link'>" + "<a href='#registered-details-question'>" + "No answer provided" + "</a>" + "</li>" );

    $('html,body').animate({scrollTop: $('#error-summary').offset().top -100});
    return;
  }
};

function confirmAll() {
  confirm();
}
