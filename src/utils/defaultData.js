import chalk from 'chalk'
import { readFileSync } from 'fs'
import ora from 'ora'

const getDefaultData = () => {
   const spinner = ora('Package.json Reading the File').start()
   try {
      spinner.succeed('Package.json file was successfully read')
      return JSON.parse(readFileSync(process.cwd() + '/package.json', 'utf8'))
   } catch (error) {
      spinner.fail('Package.json file could not read')
      console.error(chalk.red('Error: '), error)
      process.exit()
      return null
   }
}

export default getDefaultData()
