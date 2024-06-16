//inquirer is used for interactive command line user interfaces
const inquirer = require("inquirer");

//Pool is used to execute SQL queries and interact with the database.
const {Pool} = require("pg");


//configures the PostgreSQL pool connection
const pool = new Pool({
    database:'employees_db',
    user:'postgres',
    password:'password',
    host:'localhost',
    port: 5432
},
console.log(`Connected to the employees_db database`)
);



//------ Initial User Prompts ------//

//Asks the user questions. User selections are stored in the answers object
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

            //quit - exits the application
            case 'Quit':
                console.log('You choose to quit');
                pool.end();
                break;
            default:
                console.log('Invalid choice');
                break;
        }

    } catch (err) {
    console.log('Error', err);
    }
}


//------ View All Employees ------//
async function viewAllEmployees(){
    try{
        const res = await pool.query(
            `SELECT employee.id AS employee_id,employee.first_name, employee.last_name, role.title AS role_title, role.salary, department.name AS department_name, CONCAT(manager.first_name, ' ', manager.last_name) AS manager_name FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id LEFT JOIN employee AS manager ON employee.manager_id = manager.id`);

        console.table(res.rows);
        promptUser();

    } catch(err){
        console.log('Error executing query', err);
    }
};




//------ Add Employee ------//
async function addEmployee(){
    try{
        const roles = await pool.query("SELECT id as value, title as name from role");
        const managers = await pool.query("select id as value, first_name || ' ' || last_name as name from employee");
        const answers = await inquirer.prompt([
            {
                type:'input',
                name:'first_name',
                message:"What is the employee's first name?"
            },
            {
                type:'input',
                name:'last_name',
                message:"What is the employee's last name?"
            },
            {
                type:'list',
                name:'role_id',
                message:"What is the employee's role?",
                choices: roles.rows
            },
            {
                type:'list',
                name:'manager_id',
                message:"Who is the employee's manager?",
                choices: managers.rows
            },

        ]);

        await pool.query(
            `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)`,
            [answers.first_name, answers.last_name, answers.role_id, answers.manager_id]);

        console.log("Employee Successfully Added!");
        promptUser();


    } catch(err){
        console.log('Error executing query', err);
    }
};


//------ Update Employee ------//
async function updateEmployeeRole(){
    try{
        const roles = await pool.query("SELECT id as value, title as name from role");
        const employees = await pool.query("select id as value, first_name || ' ' || last_name as name from employee");
        const answers = await inquirer.prompt([
            {
                type:'list',
                name:'id',
                message:"Which employee do you want to update?",
                choices: employees.rows
            },
            {
                type:'list',
                name:'role_id',
                message:"Which role do you want to assign the selected employee?",
                choices: roles.rows
            }
    
        ]);
    
        await pool.query(
            `UPDATE employee SET role_id = $1 WHERE id = $2`,
            [answers.role_id, answers.id]);

        console.log("Employee Successfully Updated!");
        promptUser();   
    

    } catch(err){
        console.log('Error executing query', err);
    }
};


//------ View All Roles ------//
async function viewAllRoles(){
    try{
        const res = await pool.query('SELECT role.title, role.salary, department.name FROM role join department on role.department_id = department.id');
        console.table(res.rows);
        promptUser();

    } catch(err){
        console.log('Error executing query', err);
    }
};



//------ Add Role ------//
async function addRole(){
    try{
        const departments = await pool.query("SELECT id as value, name as name from department");
        const answers = await inquirer.prompt([
            {
                type:'input',
                name:'title',
                message:"What is the name of the role?"
            },
            {
                type:'input',
                name:'salary',
                message:"What is the salary of the role?"
            },
            {
                type:'list',
                name:'department_id',
                message:"Which department does the role belong to?",
                choices: departments.rows
            }
    
        ]);
    
    
        const res = await pool.query(`INSERT INTO role (title, salary, department_id) values ($1, $2, $3);`, 
        [answers.title, answers.salary, answers.department_id]);

        console.log('Role successfully added!'); 
        promptUser(); 
    
    
    
    } catch(err){
        console.log('Error executing query', err);
    }
};



//------ View All Departments ------//
async function viewAllDepartments(){
    try{
        const res = await pool.query('SELECT * FROM department');
        console.table(res.rows);
        promptUser();
    } catch(err){
        console.log('Error executing query', err);
    }
};


//------ Add Department ------//
async function addDepartment(){
    try{
        const answers = await inquirer.prompt([
            {
                type:'input',
                name:'name',
                message:"What is the name of the department?"
            }
        ]);
    
        const res = await pool.query(`INSERT INTO department (name)
        VALUES($1);`, 
        [answers.name]);

        console.log('Department successfully added!'); 
        promptUser();  

    } catch(err){
            console.log('Error executing query', err);
    }
};



// invokes the application
promptUser();



