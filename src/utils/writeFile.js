import chalk from 'chalk'
import { writeFileSync } from 'fs'
import ora from 'ora'

/**
 *
 * @param {Array} answers
 * @param {Object} res
 * @returns void
 */
const writeFile = (answers, res) => {
   const spinner = ora('Creating Readme.md').start()

   try {
      writeFileSync(
         process.cwd() + '/README.md',
         [
            ...answers,
            '\n---',
            '## License',
            `![GitHub License](https://img.shields.io/github/license/${
               res?.githubUserName
                  .split(
                     '- [![GitHub](https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white)](https://www.github.com/',
                  )[1]
                  .split(')')[0]
            }/${
               res?.name.split('# ')[1]
            }?style=social&logo=github&label=License)`,
            'This project was generated with [CLI-Readme-Generator](https://www.npmjs.com/package/cli-readme-generator).',
         ].join('\n\n'),
      )
      setTimeout(() => {
         spinner.succeed('Readme.md file created')
         process.exit()
      }, 300)
   } catch (error) {
      spinner.fail('Could not create readme.md file')
      console.error(chalk.red('Error: '), error)
   }
}
export default writeFile
