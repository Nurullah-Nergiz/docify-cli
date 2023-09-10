import getGitUsername from "../utils/getGitUserName.js";

export default [
   {
      type: "input",
      name: "name",
      message: "Project name?",
      default: "nurullah",
   },
   {
      type: "input",
      name: "version",
      message: "Version?",
   },
   {
      type: "input",
      name: "description",
      message: "Description?",
   },
   {
      type: "input",
      name: "homepage",
      message: "Homepage?",
   },
   {
      type: "input",
      name: "author",
      message: "Author",
   },
   {
      type: "input",
      name: "command",
      message: "Command",
      default: "npm run dev",
   },
   {
      type: "input",
      name: "nodeVersion",
      message: "Node version?",
      default: process.version,
   },
   {
      type: "input",
      name: "githubUserName",
      message: "GitHub username?",
      default: getGitUsername(),
   },
   {
      type: "input",
      name: "linkedinUserName",
      message: "Linkedin username? (in/@)",
   },
];
