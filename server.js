const inquirer = require("inquirer");
const {Pool} = require("pg");



const pool = new Pool({
    user:'',
    password:'',
    host:'localhost',
    database:'employee_db'
},
console.log(`Connected to the employee_db database`)
);

pool.connect();

