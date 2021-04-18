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
          'Update an Employee Role',
          'Quit'
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
          addRole();
          break;
        case "Add an Employee":
          addEmployee();
          break;
        case "Update an Employee Role":
          updateEmployee();
          break;
        case "Quit":
          //function to quit the program
          db.end();
      }
    })
    .catch(error => {
      if (error) {
        console.log(error)
      }
    });
}

function viewDepartments() {
  // select all data from the department table in mysql
  const sql = `SELECT * FROM department`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log('There was an error. ' + err)
      return;
    }
    console.table(rows)

    questionsStart();

  })



}

function viewRoles() {

  const sql = `SELECT roles.id, title, salary, department_name FROM roles INNER JOIN department ON roles.department_id = department.id`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log('There was an error. ' + err)
      return;
    }
    console.table(rows);
    questionsStart();
  })



}

function viewEmployees() {
  const sql = `SELECT employee.id, employee.first_name, employee.last_name, title, salary, employee.manager_id FROM employee INNER JOIN roles ON employee.role_id = roles.id INNER JOIN employee AS manager ON employee.manager_id = manager.id ORDER BY employee.id ASC`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log('There was an error. ' + err)
      return;
    }
    console.table(rows);
    questionsStart();
  })
}

function addDepartment() {
  inquirer.prompt({
    type: 'input',
    name: 'department_name',
    message: 'Please enter the name of the department you would like to add.'
  })
    .then((answers) => {
      // console.log(answers)
      db.query(`INSERT INTO department (department_name) VALUES (?)`, answers.department_name, (err) => {
        if (err) {
          console.log('There was an error. ' + err)
          return;
        } else {
          console.log('The department was successfully added to the database!')
        }
      })
      viewDepartments();
    })

}

function addRole() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'AddRole',
      message: 'Please enter the name of the role.'
    },
    {
      type: 'input',
      name: 'salary',
      message: 'Please enter the salary for this role.'
    },
    {
      type: 'input',
      name: 'department_id',
      message: 'Please enter the ID of the department that this role belongs to.'
    }
  ])
    .then((answers) => {

      let answersArray = [answers.AddRole, answers.salary, answers.department_id]

      db.query(`INSERT INTO roles (title, salary, department_id) VALUES (?,?,?) `, answersArray, (err) => {
        // "Incorrect decimal value: '?' for column 'salary' at row 1"
        if (err) {
          console.log('There was an error. ' + err)
          return;
        }
        console.log('The employee role was successfully updated!')
        viewRoles();
      });
    })

}

function addEmployee() {
  // WHEN I choose to add an employee
  // THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database
  inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'Please enter the first name of the employee.'
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'Please enter the last name of the employee.'
    },
    {
      type: 'input',
      name: 'role',
      message: 'Please enter the role ID of the employee.'
    },
    {
      type: 'list',
      name: 'manager',
      message: "Please select the employee's manager. 2 = Commander Shepard, 3 = Jane Doe",
      choices:
        [
          2,
          3
        ]
    }
  ])
    .then((answers) => {
      db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?) `, [answers.first_name, answers.last_name, answers.role, answers.manager], (err) => {
        if (err) {
          console.log('There was an error. ' + err)
          return;
        }
        console.log('The employee was successfully added!')
        questionsStart();
      });
    })
}

function updateEmployee() {
  // WHEN I choose to update an employee role
  // THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

  inquirer.prompt([
    {
      type: 'input',
      name: 'employee_id',
      message: 'Please enter the ID of the employee.'
    },
    {
      type: 'input',
      name: 'role',
      message: 'Please enter the new role ID of the employee.'
    }])
    .then((answers) => {
      db.query(`UPDATE employee SET role_id = ? WHERE id = ?;`, [answers.role, answers.employee_id], (err) => {
        // not sure how to go about this one
        if (err) {
          console.log('There was an error. ' + err)
          return;
        }
        console.log('The employee was successfully updated!')
        questionsStart();
      });
    })


}


questionsStart();