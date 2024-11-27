// Define the Person class
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Method to get person's information
    getInfo() {
      return `${this.name} is ${this.age} years old.`;
    }
  }
  
  // Define the Student class that extends Person
  class Student extends Person {
    constructor(name, age, roll, grade) {
      super(name, age); // Call the parent class constructor
      this.roll = roll;
      this.grade = grade;
    }
  
    // Method to display student details
    getDetails() {
      return `${this.getInfo()} Roll number: ${this.roll}, Grade: ${this.grade}.`;
    }
  }
  
  // Example Usage
  const person = new Person("Alice", 30);
  console.log(person.getInfo()); // Output: Alice is 30 years old.
  
  const student = new Student("Bob", 20, "A12", "A");
  console.log(student.getDetails()); // Output: Bob is 20 years old. Roll number: A12, Grade: A.

  