const inquirer = require("inquirer");
const {Pool} = require("pg");



const pool = new Pool({
    user:'',
    password:'',
    host:'localhost',
    database:'employees_db'
},
console.log(`Connected to the employees_db database`)
);

pool.connect();


function promptUser(){
    return inquirer.prompt([
        {
            type:'list',
            name:'prompt',
            message:'What would you like to do?',
            choices:[
                {
                    message:'View all employees',
                    name:''
                },
                {
                    message:'Add employee',
                    name:''
                },
                {
                    message:'Update Employee Role',
                    name:''
                },
                {
                    message:'View All Roles',
                    name:''
                },
                {
                    message:'Add Role',
                    name:''
                },
                {
                    message:'View All Departments',
                    name:''
                },
                {
                    message:'Add Department',
                    name:''
                },
                {
                    message:'Quit',
                    name:''
                }
            ]
        }
    ])
};

function init(){
    promptUser()
    .then((answers) => {
        let selection = answers.selection;
        switch(selection){
            case 'View all employees':
                break;
            case 'Add employee':
                break;
            case 'Update Employee Role':
                break;
            case 'View All Roles':
                break;
            case 'Add Role':
                break;
            case 'View All Departments':
                break;
            case 'Add Department':
                break;
            case 'Quit':
                break;
        }
    })

}






init();
