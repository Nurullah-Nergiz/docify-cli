import { writeFileSync } from "fs";
import defaultData from "./defaultData.js";

const writeFile = (answers) => {
   writeFileSync(
      process.cwd() + "/README.md",
      [
         "\n",
         `# ${answers.name}`,
         answers.description,
         "## Install:",
         "```bash",
         `git clone https://github.com/${answers.githubUserName ?? "{user name}"}/${answers.name}.git`,
         "```",
         "## Use Of:",
         "```bash",
         `${answers.command ? answers.command : ""}`,
         "```",
         "-----",
         "## Scripts:",
         `${Object.entries(defaultData.scripts)
            .map(([key, val]) => "\t* " + key + ": " + val)
            .join("\n")}`,
         "\n",
         `${defaultData.dependencies ? "## Dependencies" : ""}`,
         `${Object.entries(defaultData?.dependencies)
            .map(([key, val]) => "\t * " + key + ": " + val)
            .join("\n")}`,
         "",
         `${defaultData.devDependencies ? "## Dev Dependencies: " : ""}`,
         `${Object.entries(defaultData.devDependencies ?? {})
            .map(([key, val]) => "\t . " + key + ": " + val)
            .join("\n")}`,
         "-----",
         `${answers.author ? "## Author: " + answers.author : ""}`,
         `${answers.linkedinUserName ? "## LinkedIn: " : ""}`,
         `${
            answers.linkedinUserName
               ? "[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/" +
                 answers.linkedinUserName +
                 ")"
               : ""
         }`,
         "## License: ",
         "![Repo License](https://img.shields.io/github/license/Nurullah-nergiz/Readme-generator)",
      ].join("\n")
   );
};
export default writeFile;
