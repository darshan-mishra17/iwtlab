// Input: Array of student objects
const students = [
    { name: "Amit", age: 23 },
    { name: "Sima", age: 21 },
    { name: "Bimal", age: 19 },
    { name: "Ravi", age: 25 },
    { name: "Anita", age: 20 },
  ];
  
  // a) Display details using forEach, object destructuring, and string literals
  console.log("Student Details:");
  students.forEach(({ name, age }) => {
    console.log(`${name} is ${age} years old`);
  });
  
  // b) Find the student with the highest age
  const oldestStudent = students.reduce((max, student) =>
    student.age > max.age ? student : max
  );
  console.log("Student with the highest age:", oldestStudent);
  
  // c) Find the average age of the class
  const totalAge = students.reduce((sum, { age }) => sum + age, 0);
  const averageAge = totalAge / students.length;
  console.log("Average age of the class:", averageAge.toFixed(2));
  