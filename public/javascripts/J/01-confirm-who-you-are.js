var PROTOTYPE_URL = "/J";

    $(document).ready(function() {
      //Ensure checkbox is empty on page load
      $('input:checkbox').prop('checked', false);

      //Set checkbox as variable
      var ckbox = $('#pds-confirm');

    });

    //function to ensure form can't be submitted when checbkbox not checked
    jQuery(function($) {
      //form submit handler
      $('#form').submit(function(e) {
        //check atleat 1 checkbox is checked
        if (!$('#pds-confirm').is(':checked')) {
          //prevent the default form submit if it is not checked
          e.preventDefault();
          $('.error-message').addClass("error-message-active");
          $('.form-row').addClass("form-row-error-active");
          $('.multiple-choice--checkbox').addClass("checkbox-has-error");
          $('.checkbox-container').addClass("checkbox-container-has-error");
          $('html,body').animate({scrollTop: $('#error-summary').offset().top -100});
          $( ".error-summary" ).focus();
        }
      })
    })

    $("#pds-confirm").change(function() {
      if (this.checked) {
        $('.callout--attention').css("border-color", "#0072ce");
      }
    });
