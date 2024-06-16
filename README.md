Boot Camp Module 12 Challenge

# Description
This is the week 12 Module Challenge for the U of M Coding Bootcamp

# SQL: Employee Tracker
The challenge was to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and PostgreSQL.

## User Story
```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

## Application Screenshot
![image](https://github.com/alarrabee/sql-employee-tracker/assets/149320486/d2ce1553-79e1-4387-9f36-5d38c5f84af9)


## Installation Instructions
Prerequisites
- Node.js
- npm
- PostgreSQL

1. Clone the repository
    ```bash
   https://github.com/alarrabee/sql-employee-tracker.git
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Connecting to PostgreSQL
   Set up .env file with credentials
   
4. Create database in PostgreSQL with schema.sql

5. Insert seeds in PostgreSQL with seeds.sql

6. Invoke application
   ```bash
   node index.js
   ```

## Usage Information
Using the command-line select a prompt and answer with desired information

### Demo


## Acknowledgments
Guidance provided by edX Web Development Tutor Team (Megan Meyers)
