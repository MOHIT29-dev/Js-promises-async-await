// Simple JavaScript Examples

// 1. Basic function
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("World"));

// 2. Array operations
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled);

const person = {
  name: "John",
  age: 30,
  city: "New York"
};
console.log(person.name);

// 4. Class
class Calculator {
  add(a, b) {
    return a + b;
  }
  
  subtract(a, b) {
    return a - b;
  }
}

const calc = new Calculator();
console.log(calc.add(10, 5));

// 5. Async function
async function fetchData() {
  try {
    const response = await fetch('https://api.chatgpt.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

// 6. Array filter and reduce
const items = [10, 20, 30, 40, 50];
const sum = items.reduce((acc, val) => acc + val, 0);
console.log("Sum:", sum);


//map method

const students = ["john", "sarah", "karen", "mike"];

const studentUpper = students.map(element => element.toUpperCase());
console.log(studentUpper);


//filter method
const scores = [10, 25, 30, 45, 50, 60];

function isEven(score)
{
  return score%2===0;
}
const evenScores = scores.filter(isEven);
console.log(evenScores);

//reduce method theory : 
const marks = [10, 20, 30, 40, 50];

const total = marks.reduce(function(accumulator, current)
{
  return accumulator + current;
}, 0);

console.log("total:", total);


//objects
const laptop = {
  brand: "Dell",
  model: "XPS 13",
  year: 2020,
  say: function() {
    console.log("This is a laptop.");
  }
};

console.log("Brand:", laptop.brand);
console.log("Model:", laptop.model);  
laptop.year = 2021;
console.log("Year:", laptop.year);

//this keyword
const person1 = {
  firstName: "Alice",
  lastName: "Smith",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log("Full Name:", person1.fullName());  



//constructors
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
} 
const myCar = new Car("Toyota", "Camry", 2020);
console.log("Car Make:", myCar.make);
console.log("Car Model:", myCar.model);
console.log("Car Year:", myCar.year); 



function dog(breed,color){
  this.breed = breed;
  this.color = color;
}

const myDog = new dog("German", "White");
console.log("Dog Breed:", myDog.breed);
console.log("Dog Color:",myDog.color);


//class
class Person {
  constructor(name, age)
  {
    this.name = name;
    this.age = age;
  }
  display()
  {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
//object creation
const person2 = new Person("Bob", 25);
person2.display();


//static method
class MathUtil{
  static square(num){
    return num*num;
  }
}
console.log("Square of 5:", MathUtil.square(5));
console.log("Square of 10:", MathUtil.square(10));

//user count
class User {
  static userCount = 0; //used to keep track of the number of User instances created.
  constructor(username)
  {
    this.username = username;
    User.userCount++;
  }
}

const user1 = new User("Mohit");
const user2 = new User("Ankit");

console.log("Total Users:", User.userCount); //userCount is accessed using the class name User.
console.log("User1:", user1.username);
console.log("User2:", user2.username);


//define INHERITANCE : allows a class to inherit properties and methods from another class.


class Animal{
  speak(){ //what is this method doing? answer: defines a method named speak in the Animal class.
    console.log("Animal speaks"); //base class method
  }
}
class Dog extends Animal{
  speak(){
    console.log("Dog Barks"); //derived class method
  }
}
const myAnimal = new Animal(); //creating instance of base class
myAnimal.speak();              //calling speak method of base class
const myDog1 = new Dog();      //creating instance of derived class
myDog1.speak();                //calling speak method of derived class


//NESTED OBJECTS
const company = {
  name: "TechCorp",
  address: {
    street: "123 Main St",
    city: "Metropolis", 
    country: "Fictionland"
  },
  employees: [      
    { name: "Alice", position: "Developer" },
    { name: "Bob", position: "Designer" }
  ]
};  
console.log("Company Name:", company.name);
console.log("City:", company.address.city);
console.log("First Employee:", company.employees[0].name);
console.log("Second Employee Position:", company.employees[1].position);



// closures is a feature in JavaScript where an inner function has access to the outer 
// (enclosing) function's variables and parameters, even after the outer function has returned.

//allows for data privacy and encapsulation.
//example of closure

function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log("Outer Variable:", outerVariable);
    console.log("Inner Variable:", innerVariable);
  };
} 
const newFunction = outerFunction("outside");
newFunction("inside");

////  


function outer(name){
  function inner(){
    console.log("hello", name);
  }
  return inner;
}
const innerFunc = outer("Mohit");
innerFunc();
console1og(typeof outer); //function
console.log(typeof innerFunc); //function



//ASYNC AWAIT
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
} 
async function fetchData1() {
  console.log("Fetching data...");
  await delay(2000);
  console.log("Data fetched!");
  return { data: "Sample Data" };
}

fetchData1().then(result => console.log(result.data));

//FETCH API
async function getUserData() {
  try {   
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();
    console.log("User Data:", data);
  }
  catch (error) {
    console.error("Error fetching user data:", error);
  }
}

getUserData();    

//async function with error handling
async function fetchWithErrorHandling(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  } 
}

fetchWithErrorHandling('https://jsonplaceholder.typicode.com/posts/1')
  .then(data => console.log("Post Data:", data));

//


function fun1(){
    setTimeout(() => {
      console.log("Function 1 executed");
    }, 2000);
  }

  function fun2(){
    console.log("Function 2 executed");
  }
fun1();
fun2();

//Promise example
function asyncTask(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Task completed successfully.");
      } 
      else {
        reject("Task failed.");
      }
    }, 1000);
  });
}
asyncTask(true)
  .then(result => console.log(result))
  .catch(error => console.error(error));  

asyncTask(false)
  .then(result => console.log(result))
  .catch(error => console.error(error));  

//Promise chaining
function multiplyBy2(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 1000);
  });
}
multiplyBy2(5)
  .then(result => {
    console.log("Result:", result);
    return multiplyBy2(result);
  })
  .then(result => console.log("Final Result:", result));    
  