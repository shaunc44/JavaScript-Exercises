// Thanks to Paul Irish

var fizzBuzz = function(x) {

    for (var i = 1; i <= x; i++) {

        var f = i % 3 == 0, b = i % 5 == 0;
        console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
    }

};

fizzBuzz(20);