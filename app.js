const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { exit } = require("process");
const Employee = require("./lib/Employee");
const { Console } = require("console");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```


async function employeePromt() {
    const { name, id, email, role } = await
        inquirer
            .prompt([

                //Employee Info  

                {
                    name: 'name',
                    message: 'New employee name',
                    default: "Null",
                },

                {
                    name: 'id',
                    message: 'New employee Id',
                    default: "Null",
                },

                {
                    name: 'email',
                    message: 'New employee Email',
                    default: "Null",
                },

                {
                    type: 'list',
                    name: 'role',
                    message: 'Roll of new employee?',
                    choices: ['Manager', 'Engineer', 'Intern'],
                },
            ])

    switch (role) {
        case 'Manager':
            console.log("The Man");
            inquirer
            .prompt([
                {
                    name: 'officeNumber',
                    message: 'Office Number?',
                    default: "Null",
                },
            ])
            .then ((answers) => {
                console.log(answers);
            })
            break;

        case 'Engineer':
            console.log("Makes Stuff Good");
            inquirer
            .prompt([
                {
                    name: 'github',
                    message: 'Github Account?',
                    default: "Null",
                },
            ])
            .then ((answers) => {
                console.log(answers);
            })
            break;

        case 'Intern':
            console.log("The Coffee");
            inquirer
            .prompt([
                {
                    name: 'school',
                    message: 'What school did they attend?',
                    default: "Null",
                },
            ])
            .then ((answers) => {
                console.log(answers);
            })
            break;

        default:
            console.log("Opps");
    }
}

employeePromt();


