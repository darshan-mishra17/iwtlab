// Input: Array of Employee objects
const employees = [
    { name: "Alice", skill: ["JavaScript", "React", "Node.js"], salary: 70000 },
    { name: "Bob", skill: ["Python", "Django", "Machine Learning"], salary: 85000 },
    { name: "Charlie", skill: ["Java", "Spring Boot", "Hibernate"], salary: 75000 },
    { name: "David", skill: ["JavaScript", "Angular", "TypeScript"], salary: 90000 },
    { name: "Eve", skill: ["C++", "Embedded Systems", "IoT"], salary: 80000 },
  ];
  
  // a) Display the name of the employee and the technical skills they have
  console.log("Employee Skills:");
  employees.forEach(({ name, skill }) => {
    console.log(`${name} knows ${skill.join(", ")}`);
  });
  
  // b) Display the employee details in sorted order of their name
  const sortedEmployees = [...employees].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  console.log("Employees sorted by name:", sortedEmployees);
  
  // c) Find the highest-paid employee
  const highestPaidEmployee = employees.reduce((max, employee) =>
    employee.salary > max.salary ? employee : max
  );
  console.log("Highest Paid Employee:", highestPaidEmployee);
  
  // d) Display all the unique skills available in the company
  const uniqueSkills = [...new Set(employees.flatMap((employee) => employee.skill))];
  console.log("Unique Skills in the Company:", uniqueSkills);
  
  // e) Find all the employees who know JavaScript
  const jsDevelopers = employees.filter((employee) =>
    employee.skill.includes("JavaScript")
  );
  console.log("Employees who know JavaScript:", jsDevelopers);
  