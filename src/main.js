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

   // @ts-ignore
   const res = await prompts(questions);

   console.log('res', res);
   writeFile([
      ...Object.values(res).filter((ans) => ans?.trim() != ''),
      // '\n---\n',
      // `\n![GitHub License](https://img.shields.io/github/license/${
      //    res?.githubUserName
      //       .split(
      //          '- [![GitHub](https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white)](https://www.github.com/',
      //       )[1]
      //       .split(')')[0]
      // }/${res?.name.split('# ')[1]}?style=social&logo=github&label=License)`,
      // 'create readme',
   ]);
   // => response => { username, age, about }
})();
