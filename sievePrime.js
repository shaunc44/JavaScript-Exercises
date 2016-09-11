var sieve = function(num) {

    primeArray = [];
    if (num < 2) {
        return primeArray;
    }

    var i = 2;
    while (i <= num) {
        if (num % i == 0) {
            num /= i;
         } else {
            primeArray.push(i);
            i++;
        }
    }
    return primeArray;
};

console.log(sieve(15));