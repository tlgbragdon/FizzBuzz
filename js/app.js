$(document).ready( function() {

var endNumber = 100;
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

}

});