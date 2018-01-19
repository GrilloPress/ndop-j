var PROTOTYPE_URL = "/aire";

//takes user to correct page based on the settings they have set
function confirm() {
  var startPref = $('input[name="start-pref"]:checked').val();

  if (startPref == "true") {
    window.location.href = PROTOTYPE_URL + '/journey/02-NHS-number';
  } else if (startPref == "false") {
    window.location.href = PROTOTYPE_URL + '/journey/01-B-registered-details';
  } else {
    $(" .error-summary ").addClass(" error-message-active ").focus();
      $('#start-question-link').remove();

      $( '#start-question' ).addClass("form-row-error-active has-error");
      $( '#start-question h2' ).addClass("error-label");
      $( "#link-to-errors" ).append( "<li id='start-question-link'>" + "<a href='#start-question'>" + "No answer provided" + "</a>" + "</li>" );

    $('html,body').animate({scrollTop: $('#error-summary').offset().top -100});
    return;
  }
};

function confirmAll() {
  confirm();
}
