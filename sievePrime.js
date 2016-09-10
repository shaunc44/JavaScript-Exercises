var sieve = function(num) {

    primeArray = [];

    for (var x = 2; x < num; x++) {
        for (var y = 2; y < x; y++) {
            if (num < x) {
                return primeArray;
            }
        }
        primeArray.push(num);
    }
    return primeArray;
};

console.log(sieve(33));