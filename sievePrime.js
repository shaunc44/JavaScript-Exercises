var sieve = function(num) {

    primeArray = [];
    var x = 2

    while (x < num) {
        if (num < 2) {
            return primeArray;
        }
        else if (num % x == 0) {
            num /= x;
        } else {
       		primeArray.push(num);
    	}
    }
};

console.log(sieve(10));