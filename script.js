// complete this js code
class Person{
	constructor(name, age) {
	this._name = name;
	this._age = age;
}

	greet() {
		console.log(`Hello, my name is ${this._name} I am ${this._age} years old.`);
	}
}

// Employee.prototype = Object.create(Person.prototype);

class Employee extends Person{
	constructor(name, age, jobTitle) {
	super(name, age, jobTitle)
	this.jobtitle = jobTitle;
}
jobGreet(){
	console.log(`Hello, my name is ${this._name} I am ${this._age} years old, and my job title is ${this.jobtitle}.`);
}
}

// Do not change code below this line
const person = new Person("Alice", 25);
const employee = new Employee("Bob", 30);
person.greet();
window.Person = Person;
window.Employee = Employee;
