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
          viewRoles();
          break;
        case "View All Employees":
          viewEmployees();
          break;
        case "Add a Department":
          addDepartment();
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
      console.log('There was an error. ' + err)
      return; 
    }
   return console.table(rows)
   
  })

  questionsStart();

}

function viewRoles(){

  const sql = `SELECT * FROM roles`;
  db.query(sql, (err, rows) => {
    if (err){
      console.log('There was an error. ' + err)
      return;
    }
    return console.table(rows);
  })

  questionsStart();

}

function viewEmployees(){
  const sql = `SELECT * FROM employee`;
  db.query(sql, (err, rows) => {
    if (err){
      console.log('There was an error. ' + err)
      return;
    }
    return console.table(rows);
  })
  questionsStart();
}

function addDepartment(){
  inquirer.prompt({
    type: 'input',
    name: 'AddDepartment',
    message: 'Please enter the name of the department you would like to add.'
  })
  .then((answers) => {
    db.query(`INSERT INTO department (name) VALUES (?)`, answers, (err, rows) => {
      if(err){
        console.log('There was an error. ' + err)
        return;
      }
      console.log('The department was successfully added to the database!')
      viewDepartments();
    })
  })

}

// function addRole(){

// }

// function addEmployee(){

// }

// function updateEmployee(){

// }


questionsStart();