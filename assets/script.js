// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
let employeesArray = [];

const addEmployee = function(){
let firstName = prompt('Enter first name:');
let lastName = prompt('Enter last name:');
let sal = prompt('Enter salary:');
let salary = (parseInt(sal));

let person = {
  firstName : firstName,
  lastName : lastName,
  salary: salary,
};

employeesArray.push(person);
};

// Get user input to create and return an array of employee objects
const collectEmployees = function() {
addEmployee();
while (confirm('Add new employee?') === true){
addEmployee();  
};  
return employeesArray;
};

const calculateAvgSal = function(employeesArray){
  let totalSum = 0;
  for( let i = 0; i < employeesArray.length; i++){
    totalSum += employeesArray[i].salary;
  }
  let avgSalary = totalSum / employeesArray.length;
console.log('avgSalary:', avgSalary); 
};

// Display the average salary
const displayAverageSalary = function(employeesArray) {
calculateAvgSal(employeesArray);
};

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let randomPerson = Math.floor(Math.random() * employeesArray.length);
  let randomEmployee = employeesArray[randomPerson];
  console.log(`Congrats to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);