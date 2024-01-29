import chalk from 'chalk'
import { writeFileSync } from 'fs'
import ora from 'ora'

/**
 *
 * @param {Array} answers
 * @returns void
 */
const createReadmeFile = (answers) => {
   const spinner = ora('Creating Readme.md').start()

   try {
      writeFileSync(
         process.cwd() + '/README.md',
         [
            ...answers,
            '\n',
            `This project was generated with [Docify-Cli](https://www.npmjs.com/package/${process.env.npm_package_name}).`,
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
export default createReadmeFile
