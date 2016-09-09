$(document).ready( function() {

	var endNumber = 100;  // set default value
	
	//get value from user
	$('form').submit (function (event) {
		event.preventDefault();
		
		// remove any previous output
		$('p').remove ();

		endNumber = $('input').val();
		// If x is Not a Number or less than one or greater than 10
        if (isNaN(endNumber)) {
        	endNumber=100;
        	$('body').append ("<p> Invalid number entered; using value of 100 </p>");
        };

		// remove the submitted number from the form input
		$(this)[0].reset();

		//Loop thru and output fizz and/or buzz based on index value
		for (index=1; index <= endNumber; index++)
		{
			var outputString = index;
			if (index % 3 ==0) {
				outputString = "fizz";
			}

			if (index % 5 == 0) {
				if (outputString == index) {
					outputString = "buzz";
				}
				else // fizz is in there
				{
					outputString += " " + "buzz";
				}
				
			}

			$('body').append ("<p>" + outputString + "</p>");

		};
	});	

});