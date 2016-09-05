var isPalindrome = function(string) {

	var lowerString = string.toLowerCase();
	var noSpaceString = lowerString.replace(/[^a-zA-Z]/g, '');
	var alphaString = noSpaceString.replace(/\s+/g, '');
	var revString = alphaString.split('').reverse().join('');

	if (alphaString == revString) {
		return true;
	}
	else {
		return false;
	}
};

console.log(isPalindrome("odc$ % a rryy rrac do"));