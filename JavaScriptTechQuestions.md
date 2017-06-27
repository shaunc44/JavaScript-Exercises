1. Can you name two programming paradigms important for JavaScript app developers?  
	- OOP programming with prototypal inheritance  
	- function programming  

2. What is functional programming?  
	- produced composing mathematical functions and avoids sharing state & data  

3. What is the difference between classical inheritance and prototypal inheritance?  
	- class inheritance inherits from classes, creates hierarchies  
		-> instances are instantiated with constructor functions using “new” keyword  
	- prototypal inheritance inherits from objects using object.create()  

4. What are the pros and cons of functional programming vs object-oriented programming?  
	- OOP cons: depends on shared state  
	- FP pros: avoid shared state, which eliminates bugs caused by multiple functions  
	- FP cons: steeper learning curve, large files can reduce readability b/c code is abstract, terse  

5. When is classical inheritance an appropriate choice?  
	- Never, favor object composition over class inheritance  

6. When is prototypal inheritance an appropriate choice?  
	- three types are delegation, concatenative, functional  
	- any time you need inheritance, when FP doesn’t provide a solution  

7. What does “favor object composition over class inheritance” mean?  
	- avoid brittle classes, hierarchies, coupling  
	- make code more flexible  

8. What are two-way data binding and one-way data flow, and how are they different?  
	- 2 way means that when UI field is bound to model data dynamically, that when UI field changes, the model data changes and vice versa (Angular)  
	- 1-way means that the model is the single source of truth (React)  

9. What are the pros and cons of monolithic vs micro-service architectures?  
	- Monolithic Cons:  coupling, dependencies  
	- Monolithic Pros: easy to hook up with cross-cutting concerns  
	- Micro-service Cons:  higher intial cost  
	- Micro-service Pros: perform and scale better in the long-run  

10. What is asynchronous programming, and why is it important in JavaScript?  
	- engine runs in an event loop  
	- when blocking op is needed, request is started, code keeps running without blocking the result; when response is ready, interrupt is fired, causes event handler to run, where control flow continues  

11. What is the difference between *undefined and *not defined in JavaScript?  
	- *Not *defined occurs when attempting to use a variable that does not exist  
	and has not been declared
	- *Undefined occurs when trying to print a variable that has been declared,  
	but no value has been assigned  

12. What is output of the code below?  

























