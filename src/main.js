import chalk from 'chalk';
import prompts from 'prompts';
import questions from './questions/index.js';
import writeFile from './utils/writeFile.js';
// import ora from 'ora';
// import getDefaultData from './utils/defaultData.js';

(async () => {
   console.clear();
   console.log(chalk.hex('#1e90ff')('Cli-readme-generator'));
   // const spinner = ora('Loading package.json').start();

   // setTimeout(() => spinner.succeed('loaded'), 1000);

   const res = await prompts(questions);

   console.log('res', res);
   writeFile(Object.values(res).filter((ans) => ans?.trim() != ''));
   // => response => { username, age, about }
})();
