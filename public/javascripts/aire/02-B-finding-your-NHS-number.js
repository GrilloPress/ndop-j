var PROTOTYPE_URL = "/aire";

//takes user to correct page based on the settings they have set
function confirm() {
  var nhsNumberPref = $('input[name="finding-it-pref"]:checked').val();

  if (nhsNumberPref == "true") {
    window.location.href = PROTOTYPE_URL + '/journey/03-verification-process';
  } else if (nhsNumberPref == "false") {
    window.location.href = PROTOTYPE_URL + '/journey/02-C-contact-us';
  } else {
    $(" .error-summary ").addClass(" error-message-active ").focus();
      $('#finding-it-question-link').remove();

      $( '#finding-it-question' ).addClass("form-row-error-active has-error");
      $( '#finding-it-question h2' ).addClass("error-label");
      $( "#link-to-errors" ).append( "<li id='finding-it-question-link'>" + "<a href='#finding-it-question'>" + "No answer provided" + "</a>" + "</li>" );

    $('html,body').animate({scrollTop: $('#error-summary').offset().top -100});
    return;
  }
};

function confirmAll() {
  confirm();
}
