// complete this js code
class Person{
	constructor(name, age) {
	this._name = name;
	this._age = age;
}
}
	greet() {
		console.log(`Hello, my name is" ${this._name}, I am ${this._age} years old.`);
	}

// Employee.prototype = Object.create(Person.prototype);

class Employee extends Person{
	constructor(name, age, jobTitle) {
	Super(name, age, jobTitle)
	this.jobtitle = jobTitle;
}
jobGreet(){
	console.log(`Hello, my name is" ${this._name}, I am `${this._age}` years old, and my job title is ${this.jobtitle}.`);
}

// Do not change code below this line
const Person = new Person("Alice", 25);
Person.greet();
window.Person = Person;
window.Employee = Employee;
