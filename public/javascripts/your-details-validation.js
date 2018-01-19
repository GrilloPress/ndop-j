//Please enter your personal details page ---------------------------------------------------------------------------------
//JQuery ------------------------------------------------------------------------------------------------------------------

//waits for the page to load
$(window).load(function() {
	//Checks the validity of the form and if there is a match
	$(".help-block").hide();
});


//JS -----------------------------------------------------------------------------------------------------------------------

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
	if ((firstName == 'lesley') && (formComplete == true)) {
			window.location.href = 'verification-fail.html';
		} else if ((formComplete == true) && (firstName == 'alex')) {
			window.location.href = 'verify-by-post.html';
		} else if (formComplete == true) {
			window.location.href="confirm-your-channel.html"
		}
};

/* Handles the validation for the form
	- Checks each input to determin if the validation error should be displayed or not
	- Checks the entire form to determin if it is complete (no empty inputs)
	- Not intnded as any proper validation, just enough to fake it and give the desired respone */
function formValidation (formComplete, firstName, lastName, postcode, dobD, dobM, dobY, nhsNo){

	//Checks if the first name field is empty
	if (firstName ==''){
		//Adds the validation error css class to the form group and shows the error message
		$('#first-name').addClass("has-error");
		$('#first-name-error').show();
	}

	else {
		//Removes the validation error ccs class and hides the error message
		$('#first-name').removeClass("has-error");
		$('#first-name-error').hide();
	}

	//Checks if the last name field is empty
	if (lastName ==''){
		//Adds the validation error css class to the form group and shows the error message
		$('#last-name').addClass("has-error");
		$('#last-name-error').show();
	}

	else {
		//Removes the validation error ccs class and hides the error message
		$('#last-name').removeClass("has-error");
		$('#last-name-error').hide();
	}

	//Checks if the postode field is empty
	if (postcode ==''){
		//Adds the validation error css class to the form group and shows the error message
		$('#postcode').addClass("has-error");
		$('#postcode-error').show();
	}

	else {
		//Removes the validation error ccs class and hides the error message
		$('#postcode').removeClass("has-error");
		$('#postcode-error').hide();
	}

	//Checks if any of the date of birth fields are empty
	if (dobD == '' || dobM == '' || dobY == ''){
		//Adds the validation error css class to the form group and shows the error message
		$('#dob').addClass('has-error');
		$('#dob-error').show();
	}

	else {
		//Removes the validation error ccs class and hides the error message
		$('#dob').removeClass('has-error');
		$('#dob-error').hide();
	}

	//Checks if the nhs number field is empty
	if (postcode ==''){
		//Adds the validation error css class to the form group and shows the error message
		$('#nhs-number').addClass("has-error");
		$('#nhs-number-error').show();
	}

	else {
		//Removes the validation error ccs class and hides the error message
		$('#nhs-number').removeClass("has-error");
		$('#nhs-number-error').hide();
	}


	//Checks if any of the form fields are empty
	if (firstName =='' || lastName == '' || postcode == ''|| dobD == '' || dobM == '' || dobY == '' || nhsNo == ''){
		formComplete = false;
	}

	else {
		formComplete = true;
	}

	//Returns the status of the form
	return formComplete;

}
