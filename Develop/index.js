// TODO: Include packages needed for this application
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What's the title of your project?",
        validate(answer) {
            if (answer.length > 1) {
                return true;
            }
            return 'Please enter a valid project title';
        },
    },
    {
        type: 'input',
        name: 'description',
        message: "What's your project description?",
        validate(answer) {
            if (answer.length > 1) {
                return true;
            }
    
            return 'Please enter a valid project description';
        },
    },
    {
        type: 'input',
        name: 'installation',
        message: "What are your installation instructions?",
        validate(answer) {
            if (answer.length > 1) {
                return true;
            }
    
            return 'Please list installation instructions for your application';
        },
    },
    {
        type: 'input',
        name: 'usage',
        message: "What's your project application usage?",
        validate(answer) {
            if (answer.length > 1) {
                return true;
            }
    
            return 'Please explain instructions for using your application';
        },
    },
    {
        type: 'list',
        name: 'license',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        validate(answer) {
            if (answer.length = 1) {
                return true;
            }
    
            return 'Please choose a license for your project';
        },
    },
    {
        type: 'input',
        name: 'contributors',
        message: "Who are your project contributors?",
        validate(answer) {
            if (answer.length > 1) {
                return true;
            }
    
            return 'Please list who contributed to your project';
        },
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: "What's your GitHub username?",
        validate(answer) {
            if (answer.length > 1) {
                return true;
            }
    
            return 'Please enter your Github username';
        },
    },
    {
        type: 'input',
        name: 'email',
        message: "What's your email address?",
        validate(answer) {
            if (answer.length > 1) {
                return true;
            }
    
            return 'Please enter your email address';
        },
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log('Oops.. An error occured: ' + err);
        }
        console.log("Success! Your README.md file has been generated")
    });
};

// TODO: Create a function to initialize app
const writeFileAsync = util.promisify(writeToFile);
async function init() {
    try {
        // Prompt Inquirer questions
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Thank you for your responses! Fetching your GitHub data next...");
    
        // Call GitHub api for user info
        const userInfo = await api.getUser(userResponses);
        console.log("Your GitHub user info: ", userInfo);
    
        // Pass Inquirer userResponses and GitHub userInfo to generateMarkdown
        console.log("Generating your README next...")
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);
    
        // Write markdown to file
        await writeFileAsync('ExampleREADME.md', markdown);

    } catch (err) {
        console.log('Oops.. An error occured: ' + err);
    }
};

// Function call to initialize app
init();