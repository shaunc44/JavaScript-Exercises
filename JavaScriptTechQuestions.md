### 1. Can you name two programming paradigms important for JavaScript app developers?  
* OOP programming with prototypal inheritance  
* functional programming  

### 2. What is functional programming?  
* produced composing mathematical functions and avoids sharing state & data  

### 3. What is the difference between classical inheritance and prototypal inheritance?  
* class inheritance inherits from classes, creates hierarchies  
	-> class instances are instantiated with constructor functions using “new” keyword  
* prototypal inheritance inherits from objects using object.create()  

### 4. What are the pros and cons of functional programming vs object-oriented programming?  
* OOP cons: depends on shared state  
* FP pros: avoid shared state, which eliminates bugs caused by multiple functions  
* FP cons: steeper learning curve, large files can reduce readability b/c code is abstract, terse  

### 5. When is classical inheritance an appropriate choice?  
* Never, favor object composition over class inheritance  

### 6. When is prototypal inheritance an appropriate choice?  
* three types are delegation, concatenative, functional  
* any time you need inheritance, when FP doesn’t provide a solution  

### 7. What does “favor object composition over class inheritance” mean?  
* avoid brittle classes, hierarchies, coupling  
* make code more flexible  

### 8. What are two-way data binding and one-way data flow, and how are they different?  
* 2 way means that when UI field is bound to model data dynamically, that when UI field changes, the  model data changes and vice versa (Angular)  
* 1-way means that the model is the single source of truth (React)  

### 9. What are the pros and cons of monolithic vs micro-service architectures?  
* Monolithic Cons:  coupling, dependencies  
* Monolithic Pros: easy to hook up with cross-cutting concerns  
* Micro-service Cons:  higher intial cost  
* Micro-service Pros: perform and scale better in the long-run  

### 10. What is asynchronous programming, and why is it important in JavaScript?  
* engine runs in an event loop  
* when blocking op is needed, request is started, code keeps running without blocking the result; when  response is ready, interrupt is fired, causes event handler to run, where control flow continues  

### 11. What is the difference between *undefined* and *not* *defined*  in JavaScript?  
* **Not defined** occurs when attempting to use a variable that does not exist  
and has not been declared
* **Undefined** occurs when trying to print or return a variable that has been declared,  
but no value has been assigned  

### 12. What is the output of the code below?  
```javascript
var y = 1;
  if (function f(){}) {
    y += typeof f;
  }
  console.log(y);
```
-> 1undefined

### 13. What is the drawback of creating true private methods in JavaScript?  
```javascript
var Employee = function (name, company, salary) {
    this.name = name || "";       //Public attribute default value is null
    this.company = company || ""; //Public attribute default value is null
    this.salary = salary || 5000; //Public attribute default value is null

    // Private method
    var increaseSalary = function () {
        this.salary = this.salary + 1000;
    };

    // Public method
    this.dispalyIncreasedSalary = function() {
        increaseSlary();
        console.log(this.salary);
    };
};

// Create Employee class object
var emp1 = new Employee("John","Pluto",3000);
// Create Employee class object
var emp2 = new Employee("Merry","Pluto",2000);
// Create Employee class object
var emp3 = new Employee("Ren","Pluto",2500);
```
Each instance variable emp1, emp2, ... has its own copy of the private method **increaseSalary()**  

### 14. What is a **“closure”** in JavaScript? Provide an example  
A closure is a function defined inside another function (parent function) and  
has access to variables declared in their own scope, parent scope and global scope  
```javascript
var globalVar = "abc"; 

// Parent self invoking function 
(function outerFunction (outerArg) { // begin of scope outerFunction
    // Variable declared in outerFunction function scope 
    var outerFuncVar = 'x';    
    // Closure self-invoking function 
    (function innerFunction (innerArg) { // begin of scope innerFunction
        // variable declared in innerFunction function scope
        var innerFuncVar = "y"; 
        console.log(          
            "outerArg = " + outerArg + "\n" +
            "outerFuncVar = " + outerFuncVar + "\n" +
            "innerArg = " + innerArg + "\n" +
            "innerFuncVar = " + innerFuncVar + "\n" +
            "globalVar = " + globalVar);
 
    }// end of scope innerFunction)(5); // Pass 5 as parameter 
}// end of scope outerFunction )(7); // Pass 7 as parameter 
```
Output of code:
```
outerArg = 7
outerFuncVar = x
innerArg = 5
innerFuncVar = y
globalVar = abc
```

### 15.  Write a *mul* function which will produce the following outputs when invoked:  
```javascript
console.log(mul(2)(3)(4)); // output : 24 
console.log(mul(4)(3)(4)); // output : 48
```
Answer:
```javascript
function mul (x) {
    return function (y) { // anonymous function 
        return function (z) { // anonymous function 
            return x * y * z; 
        };
    };
}
```
Two anonymous functions inside *mul* function

### 16.  How to empty an array in JavaScript?  
```javascript
var arrayList = ['a', 'b', 'c', 'd', 'e', 'f'];
```

Method 1:
```javascript
arrayList = [];
```
This will empty the list; does not empty references that point to original list  
```javascript
var arrayList = ['a','b','c','d','e','f']; // Created array 
var anotherArrayList = arrayList;  // Referenced arrayList by another variable 
arrayList = []; // Empty the array 
console.log(anotherArrayList); // Output ['a','b','c','d','e','f']
```

Method 2:
```javascript
arrayList.length = 0;
```
This will empty the original list and references that point to the original list  
```javascript
var arrayList = ['a','b','c','d','e','f']; // Created array 
var anotherArrayList = arrayList;  // Referenced arrayList by another variable 
arrayList.length = 0; // Empty the array by setting length to 0
console.log(anotherArrayList); // Output []
```

Method 3:
```javascript
arrayList.splice(0, arrayList.length);
```
This will empty the original list and references that point to the original list  
```javascript
var arrayList = ['a','b','c','d','e','f']; // Created array 
var anotherArrayList = arrayList;  // Referenced arrayList by another variable 
arrayList.splice(0, arrayList.length); // Empty the array by setting length to 0
console.log(anotherArrayList); // Output []
```

### 17. What is the output of the following code?  
```javascript
var output = (function(x){
    delete x;
    return x;
  })(0);
  
  console.log(output);
```
Answer: 0  
Delete deletes properties of objects, whereas x is a local variable of which delete doesn't affect  

### 18. What is the output of the following code?  
```javascript
var x = 1;
var output = (function(){
    delete x;
    return x;
  })();

  console.log(output);
```
Answer: 1  
x is a global variable not a property of an object  

### 19. What will be the output of the code below?  
```javascript
var x = { foo : 1 };
var output = (function(){
    delete x.foo;
    return x.foo;
  })();

  console.log(output);
```
Answer: undefined  
Here x is a global variable not a property of the object  









































