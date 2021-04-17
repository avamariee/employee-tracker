const mysql = require('mysql2')
const inquirer = require('inquirer');
const cTable = require('console.table');

// console.table([
//   {
//     name: 'foo',
//     age: 10
//   }, {
//     name: 'bar',
//     age: 20
//   }
// ]);

// prints
// name  age
// ----  ---
// foo   10
// bar   20

questionsStart();

function questionsStart() {
  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: 'list',
        name: 'start',
        message: 'Welcome! What would you like to do?',
        choices: [
          'View All Departments',
          'View All Roles',
          'View All Employees',
          'Add a Department',
          'Add a Role',
          'Add an Employee',
          'Update an Employee Role'
        ]
      }
    ])
    .then(answers => {
      console.log(answers.start)
      switch (answers.start) {
        case "View All Departments":
          // function to view the department in mysql
          break;
        case "View All Roles":
          // function to view the roles of all employees
          break;
        case "View All Employees":
          // function to view all of the employees
          break;
        case "Add a Department":
          // function to add a department
          break;
        case "Add a Role":
          // function to add a role to an employee
          break;
        case "Add an Employee":
          // function to add an employee
          break;
        case "Update an Employee Role":
          // function to update an employee role
          break;
      }


    })
    .catch(error => {
      if (error) {
        // res.status(400).json({ error: err.message });
        // return;
      } else {
        // Something else went wrong
      }
    });
}
