import inquirer from "inquirer";
import questions from "./questions/default.js";
import writeFile from "./utils/writeFile.js";

async function main() {
   console.clear();
   console.log("Cli Readme Generator App");

   const answers = await inquirer.prompt(questions);
   writeFile(answers);
}

main();
