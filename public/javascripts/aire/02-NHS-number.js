var PROTOTYPE_URL = "/aire";

//takes user to correct page based on the settings they have set
function confirm() {
  var nhsNumberPref = $('input[name="NHS-number-pref"]:checked').val();

  if (nhsNumberPref == "true") {
    window.location.href = PROTOTYPE_URL + '/journey/03-verification-process';
  } else if (nhsNumberPref == "false") {
    window.location.href = PROTOTYPE_URL + '/journey/02-B-finding-your-NHS-number';
  } else {
    $(" .error-summary ").addClass(" error-message-active ").focus();
      $('#NHS-number-question-link').remove();

      $( '#NHS-number-question' ).addClass("form-row-error-active has-error");
      $( '#NHS-number-question h2' ).addClass("error-label");
      $( "#link-to-errors" ).append( "<li id='NHS-number-question-link'>" + "<a href='#NHS-number-question'>" + "No answer provided" + "</a>" + "</li>" );

    $('html,body').animate({scrollTop: $('#error-summary').offset().top -100});
    return;
  }
};

function confirmAll() {
  confirm();
}
