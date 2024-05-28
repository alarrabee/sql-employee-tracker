const inquirer = require("inquirer");
// const {Pool} = require("pg");



// const pool = new Pool({
//     user:'',
//     password:'',
//     host:'localhost',
//     database:'employees_db'
// },
// console.log(`Connected to the employees_db database`)
// );

// pool.connect();


inquirer.prompt([
        {
            type:'list',
            name:'selection',
            message:'What would you like to do?',
            choices:[
                'View all employees',
                'Add employee',
                'Update Employee Role',
                'View All Roles',
                'Add Role',
                'View All Departments',
                'Add Department',
                'Quit'
            ]
        }
    ])
    .then(answers => {
        switch(answers.selection){
            case 'View all employees':
                console.log('You choose to view all employees');
                break;
            case 'Add employee':
                console.log('You choose to add employee');
                break;
            case 'Update Employee Role':
                console.log('You choose to update employee');
                break;
            case 'View All Roles':
                console.log('You choose to view all roles');
                break;
            case 'Add Role':
                console.log('You choose to add role');
                break;
            case 'View All Departments':
                console.log('You choose to view all departments');
                break;
            case 'Add Department':
                console.log('You choose to view add department');
                break;
            case 'Quit':
                console.log('You choose to quit');
                break;
        }
    })
    .catch((err) => {
        console.log('Error', err);
    });



// function viewAllDepartments(){
//     pool.query('SELECT * FROM department', function(err, {rows}){
//         console.log(rows);
//     })
// };


// function viewAllRoles(){
//     pool.query('SELECT * FROM role', function(err, {rows}){
//         console.log(rows);
//     })
// };


// function viewAllEmployees(){
//     pool.query("SELECT employee.id AS employee_id,employee.first_name, employee.last_name, role.title AS role_title, role.salary, department.name AS department_name, CONCAT(manager.first_name, ' ', manager.last_name) AS manager_name FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id LEFT JOIN employee AS manager ON employee.manager_id = manager.id", function(err, {row}){
//         console.log(row);
//     })
// };



// function addDepartment(name){
//     pool.query('INSERT INTO department name')
// };

// function addRole(title, salary, department_id){
//     pool.query('INSERT INTO role (title, salary, department_id')
// };

// function addEmployee(first_name, last_name, role_id, manager_id){
//     pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id')
// };

// function updateEmployee(){

// };

// function quit(){

// };


// init();
