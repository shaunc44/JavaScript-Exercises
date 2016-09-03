var fahrenheitToCelsius = function(tempToCels){
	var conversion = (tempToCels - 32) * (5/9);
	console.log(conversion);
	return conversion;
};

fahrenheitToCelsius(40);


var celsiusToFahrenheit = function(tempToFar){
	var conversion = (tempToFar * 9/5) + 32;
	console.log(conversion);
	return conversion;
};

celsiusToFahrenheit(40);