const inquirer = require("inquirer");
const {Pool} = require("pg");



const pool = new Pool({
    user:'postgres',
    password:'password',
    host:'localhost',
    database:'employees_db'
},
console.log(`Connected to the employees_db database`)
);

pool.connect();




