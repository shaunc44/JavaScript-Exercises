var sieve = function(num) {

    var primeArray = [];
    if (num < 2) {
        return primeArray;
    }

    var i = 2;
    while (i <= num) {
        var j = 2;
        while (j < i) {
            if (i % j == 0) { 
                break;
            }
            j++;
        }
        if (primeArray.indexOf(j) < 0) {
            primeArray.push(j);
        }
        i++;
    }
    return primeArray;
};

console.log(sieve(19));