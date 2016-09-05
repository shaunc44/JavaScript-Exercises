var fibonacci = function(num) {

	var a = 0, b = 1;
	var fiboArray = [];

	if (num < 1) {
		return fiboArray;
	}

	else {
		fiboArray.push(a, b);
		for (i = 0; i < num; i++) { 
			c = a + b
			if (c < num) { 
				fiboArray.push(c);
			}
			a = b
			b = c
		}
		return fiboArray;
	}

};

fibonacci(10);