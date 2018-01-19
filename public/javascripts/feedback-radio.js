$(window).load(function() {
	$("#feedback-thanks").hide();
      $("input[name$='help']").click(setFeedback);
});

function setFeedback() {
          $('#feedback-thanks').show();
          $('#feedback-form').hide();
          $('#feedback-form-label').hide();
      };
