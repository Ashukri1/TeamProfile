const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const generateHTML = require("./utils/generateHTML");

const teamArr = [];

const addManager = async () => {
  try {
    const answers = await inquirer.prompt([
      {
        name: "name",
        type: "input",
        message: "What is the Manager's name?",
        validate: (name) => name !== "",
      },
      {
        name: "id",
        type: "input",
        message: "What is the Manager's ID number?",
        validate: (id) => id !== "",
      },
      {
        name: "email",
        type: "input",
        message: "What is the Manager's email?",
        validate: (email) => email !== "",
      },
      {
        name: "officeNumber",
        type: "input",
        message: "What is the Manager's office number?",
        validate: (officeNumber) => officeNumber !== "",
      },
    ]);

    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    teamArr.push(manager);
    addEmployee();
  } catch (error) {
    console.error(error);
  }
};

const addEngineer = async () => {
  try {
    const answers = await inquirer.prompt([
      {
        name: "name",
        type: "input",
        message: "What is the Engineer's name?",
        validate: (name) => name !== "",
      },
      {
        name: "id",
        type: "input",
        message: "What is the Engineer's ID number?",
        validate: (id) => id !== "",
      },
      {
        name: "email",
        type: "input",
        message: "What is the Engineer's email?",
        validate: (email) => email !== "",
      },
      {
        name: "userName",
        type: "input",
        message: "What is the Engineer's GitHub username?",
        validate: (userName) => userName !== "",
      },
    ]);

    const engineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.userName
    );
    teamArr.push(engineer);
    addEmployee();
  } catch (error) {
    console.error(error);
  }
};

const addIntern = async () => {
  try {
    const answers = await inquirer.prompt([
      {
        name: "name",
        type: "input",
        message: "What is the Intern's name?",
        validate: (name) => name !== "",
      },
      {
        name: "id",
        type: "input",
        message: "What is the Intern's ID number?",
        validate: (id) => id !== "",
      },
      {
        name: "email",
        type: "input",
        message: "What is the Intern's email?",
        validate: (email) => email !== "",
      },
      {
        name: "school",
        type: "input",
        message: "What is the Intern's school name?",
        validate: (school) => school !== "",
      },
    ]);

    const intern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    teamArr.push(intern);
    addEmployee();
  } catch (error) {
    console.error(error);
  }
};

const addEmployee = async () => {
  try {
    const chosen = await inquirer.prompt([
      {
        name: "employee",
        type: "list",
        message: "Please select the employee you'd like to add or choose to finish.",
        choices: ["Engineer", "Intern", "I am done with my team."],
      },
    ]);

    switch (chosen.employee) {
      case "Engineer":
        await addEngineer();
        break;
      case "Intern":
        await addIntern();
        break;
      default:
        startHtml();
    }
  } catch (error) {
    console.error(error);
  }
};

const startHtml = () => {
  const dom = generateHTML(teamArr);
  fs.writeFile("index.html", dom, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Great job! The HTML file has been created successfully.");
    }
  });
};

const init = () => {
  addManager();
};

init();
