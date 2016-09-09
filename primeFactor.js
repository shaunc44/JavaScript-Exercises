var largestPrimeFactor = function(num) {

    var i = 2;
  while (i < num) {
        if (num % i == 0) {
            i++;
            break;
      } else {
            i++;
        return i;
      }
    }
}

console.log(largestPrimeFactor(10));