var sieve = function(num) {

    var primeArray = [];
    if (num < 2) {
        return primeOne;
    }
    
    var i = 2;
    while (i <= num) {
        var j = 2;
        while (j <= i) {
            if (num % i == 0) { 
                break;
            } 
            primeArray.push(i);
        }
        i++;
    }
};

console.log(sieve(10));