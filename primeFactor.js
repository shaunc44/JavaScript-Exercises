var largestPrimeFactor = function(num) {
  
    divisNums = [];
    for (var i = 2; i <= num; i++) {
      if (num % i == 0) {
          divisNums.push(i);
        }
    }

    console.log(divisNums);
    
    var index;
    for (index = divisNums.length -1; index >= 0; --index) {
      for (var j = 2; j < index; j++) {
          if (index % j == 0) {
              break;
            } else {
              return divisNums[j];
            }
        }
    }
    //return divisNums[j];
};

console.log(largestPrimeFactor(33));