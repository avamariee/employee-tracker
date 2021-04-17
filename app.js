const mysql = require('mysql2')
const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('./db/connection')

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
      // console.log(answers.start)
      switch (answers.start) {
        case "View All Departments":
          viewDepartments();
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
      }
    })
    .catch(error => {
      if (error) {
        console.log(error)
      }
    });
}

function viewDepartments(){
  // select all data from the department table in mysql
  const sql = `SELECT * FROM department`;
  db.query(sql, (err, rows) => {
    if (err){
      console.table('There was an error. ')
      return; 
    }
   return console.table(rows)
   
  })

  questionsStart();

}

// function viewRoles(){

// }

// function viewEmployees(){

// }

// function addDepartment(){

// }

// function addRole(){

// }

// function addEmployee(){

// }

// function updateEmployee(){

// }


questionsStart();