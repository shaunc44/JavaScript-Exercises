var largestPrimeFactor = function(num) {

    var i = 2;
    while (i <= num) {
        if (num % i == 0) {
            num /= i;
        } else {
            i++;
        }
    }
    return i;
};

console.log(largestPrimeFactor(601));