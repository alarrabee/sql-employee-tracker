//inquirer is a library for creating interactive command-line prompts
const inquirer = require("inquirer");
//uses destructuring to extract the Pool class from the pg package. used to create a pool of connections to the PostgreSQL database specified in the configuration object. This pool is then used to execute SQL queries and interact with the database.
const {Pool} = require("pg");


//confiqures the PostgreSQL pool connection
const pool = new Pool({
    user:'username',
    password:'password',
    host:'localhost',
    database:'employees_db'
},
console.log(`Connected to the employees_db database`)
);

//connects to the postgreSQL database
pool.connect();

//asks the user questions. user selections are stored in the answers object
async function promptUser(){
    try{
        const answers = await inquirer.prompt([
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
        ]);

        switch(answers.selection){
            //view all employees
            case 'View all employees':
                console.log('You choose to view all employees');
                await viewAllEmployees();
                break;

            //add employee
            case 'Add employee':
                console.log('You choose to add employee');
                await addEmployee();
                break;

            //update employee role
            case 'Update Employee Role':
                console.log('You choose to update employee');
                await updateEmployeeRole();
                break;

            //view all roles
            case 'View All Roles':
                console.log('You choose to view all roles');
                await viewAllRoles();
                break;

            //add role
            case 'Add Role':
                console.log('You choose to add role');
                await addRole();
                break;

            //view all departments
            case 'View All Departments':
                console.log('You choose to view all departments');
                await viewAllDepartments();
                break;
            
            //add department
            case 'Add Department':
                console.log('You choose to view add department');
                await addDepartment();
                break;

            //quit
            case 'Quit':
                console.log('You choose to quit');
                await quit();
                break;
            default:
                console.log('Invalid choice');
                break;
        }
    } catch (err) {
    console.log('Error', err);
    }
}


// async function viewAllEmployees(){
//     try{
//         const res = await pool.query('SELECT * FROM department');
//         console.log(res.rows);
//     } catch(err){
//         console.log('Error excecuting query', err);
//     }
// };

// async function addEmployee(){
//     try{
//         const res = await pool.query('SELECT * FROM department');
//         console.log(res.rows);
//     } catch(err){
//         console.log('Error excecuting query', err);
//     }
// };

// async function updateEmployeeRole(){
//     try{
//         const res = await pool.query('SELECT * FROM department');
//         console.log(res.rows);
//     } catch(err){
//         console.log('Error excecuting query', err);
//     }
// };

async function viewAllRoles(){
    try{
        const res = await pool.query('SELECT * FROM role');
        console.log(res.rows);
    } catch(err){
        console.log('Error excecuting query', err);
    }
};

// async function addRole(){
//     try{
//         const res = await pool.query('SELECT * FROM department');
//         console.log(res.rows);
//     } catch(err){
//         console.log('Error excecuting query', err);
//     }
// };

async function viewAllDepartments(){
    try{
        const res = await pool.query('SELECT * FROM department');
        console.log(res.rows);
    } catch(err){
        console.log('Error excecuting query', err);
    }
};

// async function addDepartment(){
//     try{
//         const res = await pool.query('SELECT * FROM department');
//         console.log(res.rows);
//     } catch(err){
//         console.log('Error excecuting query', err);
//     }
// };

// async function quit(){
//     try{
//         const res = await pool.query('SELECT * FROM department');
//         console.log(res.rows);
//     } catch(err){
//         console.log('Error excecuting query', err);
//     }
// };




promptUser();

//------------------------------------------------------
// inquirer.prompt([
//         {
//             type:'list',
//             name:'selection',
//             message:'What would you like to do?',
//             choices:[
//                 'View all employees',
//                 'Add employee',
//                 'Update Employee Role',
//                 'View All Roles',
//                 'Add Role',
//                 'View All Departments',
//                 'Add Department',
//                 'Quit'
//             ]
//         }
//     ])
//     .then(async(answers) => {
//         switch(answers.selection){
//             case 'View all employees':
//                 console.log('You choose to view all employees');
//                 try{
//                     const res = await pool.query()
//                 } catch (err){
//                     console.log('Error executing query', err);
//                 }
//                 break;
//             case 'Add employee':
//                 console.log('You choose to add employee');
//                 break;
//             case 'Update Employee Role':
//                 console.log('You choose to update employee');
//                 break;
//             case 'View All Roles':
//                 console.log('You choose to view all roles');
//                 break;
//             case 'Add Role':
//                 console.log('You choose to add role');
//                 break;
//             case 'View All Departments':
//                 console.log('You choose to view all departments');
//                 break;
//             case 'Add Department':
//                 console.log('You choose to view add department');
//                 break;
//             case 'Quit':
//                 console.log('You choose to quit');
//                 break;
//             default:
//                 console.log('Invalid choice');
//                 break;
//         }
//     })
//     .catch((err) => {
//         console.log('Error', err);
//     });
//-----------------------------------------------------
//`async` Function: the then method of the Promise returned by inquirer.prompt is passed an asynchronous function. allows the use of the await keyword inside the function body, which is used to wait for promises to be resolved or rejected.

//`await` Keyword: await is used to wait for the pool.query() function to return a result. The function execution is paused at this line until the promise returned by pool.query() is resolved or rejected. Once the promise is resolved, the result is assigned to the variable res. 

//try..catch statement: The try block contains the code that you want to test for errors. If an error occurs within the try block, JavaScript immediately exits the block and moves on to the catch block. The purpose of the try...catch statement is to prevent unexpected errors from crashing your application.










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


function viewAllEmployees(){
    pool.query("SELECT employee.id AS employee_id,employee.first_name, employee.last_name, role.title AS role_title, role.salary, department.name AS department_name, CONCAT(manager.first_name, ' ', manager.last_name) AS manager_name FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id LEFT JOIN employee AS manager ON employee.manager_id = manager.id", function(err, {row}){
        console.log(row);
    })
};



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



//---
//invoke using node index.js