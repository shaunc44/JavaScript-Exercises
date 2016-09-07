var largestPrimeFactor = function(num){

    divisibleNums = [];
    for (var i = 2; i <= num; i++) {
        if (num % i == 0) {
            divisibleNums.push(i);
        }
    }

    for (var j in divisibleNums) {
        for (var k = 2; k <= j; k++) {
            if (j % k == 0) {
                break;
            }
            else {
                return j;
            }
        }
    }
};

console.log(largestPrimeFactor(15));