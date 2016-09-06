var stringScramble = function(stringA, stringB){

	var stringOne = stringA.toLowerCase().split('');
	var stringTwo = stringB.toLowerCase().split('');
	var stringArray = [];

	for (i = 0; i < stringOne.length; i++) {
		for (j = 0; j < stringTwo.length; j++) {
			if (stringOne[i] == stringTwo[j] && 
			stringArray.indexOf(stringOne[i]) < 0) {
				stringArray.push(stringOne[i]);
			}
		}
	}
	return stringArray;
};

console.log(stringScramble('hello', 'world'));