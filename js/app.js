$(document).ready( function() {

	var endNumber = 1; 

	// if user input is valid, global variable endNumber is updated
	function validPositiveInt(num) {
		if (isNaN(num) || (num % 1 != 0) || (num <=0)) {
			return false;		// Not a Number, or not an int, or not positive
		};
		endNumber = +num;
		return true; 	
	};
		
	
	// find and output FizzBuzz for numbers from 1 to num
	function outputFizzBuzz (num){

		// num has aleady been validated to be an integer
		// Loop thru and output fizz and/or buzz based on index value
		for (index=1; index <= num; index++) {
			var outputString = index;
			if (index % 3 ==0) {
				outputString = "Fizz";
			}
			if (index % 5 == 0) {
				if (outputString == index) {
					outputString = "Buzz";
				}
				else {   // fizz is in there
					outputString += " " + "Buzz";
				}
			}
			$('.output').append ("<p>" + outputString + "</p>");
		};
	};

	//get value from user
	$('form').submit (function (event) {
		event.preventDefault();

		// remove any previous output
		$('p').remove ();

		//validate user input  - global var endNumber is updated if valid input provided	
		if (validPositiveInt ($('input').val())){
				outputFizzBuzz(endNumber);
			}
			else {
        		$('.output').append ("<p> " + $('input').val() + " is not a valid positive integer; try again. </p>");
        };
       
		// remove the submitted number from the form input
		$(this)[0].reset();

	});	

});