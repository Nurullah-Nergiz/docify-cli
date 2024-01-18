import chalk from 'chalk'
import prompts from 'prompts'
import questions from './questions/index.js'
import createReadmeFile from './utils/writeReadmeFile.js'
// @ts-ignore
import Conf from 'conf'

// App init
export default async function init() {
   console.clear()
   console.log(chalk.hex('#1e90ff')('Docify - Documentation Generation Tool'))

   const config = new Conf({ projectName: 'Docify-cli' })
   // @ts-ignore
   const res = await prompts(questions, {
      onCancel: () => process.exit(),
      // @ts-ignore
      onSubmit: ({ name }, val) => {
         config.set(name, val)
      },
   })
   createReadmeFile(Object.values(res).filter((ans) => ans?.trim() != ''))
}
