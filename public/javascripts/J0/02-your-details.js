//Please enter your personal details page ---------------------------------------------------------------------------------
//JQuery ------------------------------------------------------------------------------------------------------------------
var PROTOTYPE_URL = "/J0";

//waits for the page to load
$(window).load(function() {
	//Checks the validity of the form and if there is a match
	$(".help-block").hide();
});

function matchDetails() {

	var firstName = $("#first-name-input").val().toLowerCase();
	var lastName = $("#last-name-input").val().toLowerCase();
	var postcode = $('#postcode-input').val().toUpperCase();
	var dobD = $('#dob-day-input').val();
	var dobM = $('#dob-month-input').val();
	var dobY = $('#dob-year-input').val();
	var dob = dobD+"/"+dobM+"/"+dobY;
	var nhsNo = $('#nhs-number-input').val();

	var vgpReason = "noMatch";
	var formComplete = false;

	//Checks the status of the form
	formComplete = formValidation(formComplete, firstName, lastName, postcode, dobD, dobM, dobY, nhsNo);

	//Only continues if the form is complete
	if ((firstName == 'devil') && (formComplete == true)) {
			window.location.href = PROTOTYPE_URL + '/app/02X-verification-fail';
		} else if ((formComplete == true) && (firstName == 'satan')) {
			window.location.href = PROTOTYPE_URL + '/app/02X-contact-us';
		} else if (formComplete == true) {
			window.location.href= PROTOTYPE_URL + "/app/03-verification-option"
		}
};

/* Handles the validation for the form
	- Checks each input to determin if the validation error should be displayed or not
	- Checks the entire form to determin if it is complete (no empty inputs)
	- Not intnded as any proper validation, just enough to fake it and give the desired respone */
function formValidation (formComplete, firstName, lastName, postcode, dobD, dobM, dobY, nhsNo){

  //Checks if any of the form fields are empty
	if (firstName =='' || lastName == '' || postcode == ''|| dobD == '' || dobM == '' || dobY == '' || nhsNo == ''){
		formComplete = false;
    $(" .error-summary ").addClass(" error-message-active ");
    $('html,body').animate({scrollTop: $('#error-summary').offset().top -100});
    $( ".error-summary" ).focus();
	}

	else {
		formComplete = true;
	}

	//Checks if the first name field is empty
	if (firstName ==''){
		//Adds the validation error css class to the form group and shows the error message
		$('#first-name').addClass("form-row-error-active has-error");
		$('#first-name-error').addClass( 'error-message-active' );
    $('#first-name-error-link').remove(); //remove previous link to error if error still active
    $( "#link-to-errors" ).append( "<li id='first-name-error-link'>" + "<a href='#first-name'>" + "First name is missing" + "</a>" + "</li>" );
	}

	else {
		//Removes the validation error ccs class and hides the error message
		$('#first-name').removeClass("has-error");
    $('#first-name').removeClass("form-row-error-active");
		$('#first-name-error').removeClass( 'error-message-active' );
    $('#first-name-error-link').remove();
	}

	//Checks if the last name field is empty
	if (lastName ==''){
		//Adds the validation error css class to the form group and shows the error message
		$('#last-name').addClass("has-error");
    $('#last-name').addClass("form-row-error-active");
		$('#last-name-error').addClass( 'error-message-active' );
    $('#last-name-error-link').remove(); //remove previous link to error if error still active
    $( "#link-to-errors" ).append( "<li id='last-name-error-link'>" + "<a href='#last-name'>" + "Last name is missing" + "</a>" + "</li>" );
	}

	else {
		//Removes the validation error ccs class and hides the error message
		$('#last-name').removeClass("has-error");
		$('#last-name-error').removeClass( 'error-message-active' );
    $( '#last-name' ).removeClass("form-row-error-active");
    $('#last-name-error-link').remove();
	}

	//Checks if any of the date of birth fields are empty
	if (dobD == '' || dobM == '' || dobY == ''){
		//Adds the validation error css class to the form group and shows the error message
		$('#dob').addClass('has-error');
    $('#dob').addClass("form-row-error-active");
		$('#dob-error').addClass( 'error-message-active' );
    $('#dob-error-link').remove(); //remove previous link to error if error still active
    $( "#link-to-errors" ).append( "<li id='dob-error-link'>" + "<a href='#dob'>" + "Date of birth is missing" + "</a>" + "</li>" );
	}

	else {
		//Removes the validation error ccs class and hides the error message
		$('#dob').removeClass('has-error');
    $('#dob').removeClass("form-row-error-active");
		$('#dob-error').removeClass( 'error-message-active' );
    $('#dob-error-link').remove();
	}

  //Checks if the postode field is empty
	if (postcode ==''){
		//Adds the validation error css class to the form group and shows the error message
		$( '#postcode' ).addClass("has-error");
    $( '#postcode' ).addClass("form-row-error-active");
		$( '#postcode-error' ).addClass( 'error-message-active' );
    $('#postcode-error-link').remove(); //remove previous link to error if error still active
    $( "#link-to-errors" ).append( "<li id='postcode-error-link'>" + "<a href='#postcode'>" + "Postcode is missing" + "</a>" + "</li>" );
	}

	else {
		//Removes the validation error ccs class and hides the error message
		$('#postcode').removeClass("has-error");
    $('#postcode').removeClass("form-row-error-active");
		$('#postcode-error').removeClass( 'error-message-active' );
    $('#postcode-error-link').remove();
	}

  //Checks if the nhs number field is empty
	if (nhsNo ==''){
		//Adds the validation error css class to the form group and shows the error message
		$('#nhs-number').addClass("has-error");
		$('#nhs-number').addClass("form-row-error-active");
    $('#nhs-number-error').addClass( 'error-message-active' );
    $('#nhs-number-error-link').remove(); //remove previous link to error if error still active
    $( "#link-to-errors" ).append( "<li id='nhs-number-error-link'>" + "<a href='#nhs-number'>" + "NHS number is missing" + "</a>" + "</li>" );
	}

	else {
		//Removes the validation error ccs class and hides the error message
		$('#nhs-number').removeClass("has-error");
    $('#nhs-number').removeClass("form-row-error-active");
		$('#nhs-number-error').removeClass( 'error-message-active' );
    $('#nhs-number-error-link').remove();
	}

	//Returns the status of the form
	return formComplete;

}
