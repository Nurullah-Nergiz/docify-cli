import chalk from 'chalk'
import prompts from 'prompts'
import questions from './questions/index.js'
import writeFile from './utils/writeFile.js'

// App init
;(async () => {
   console.clear()
   console.log(chalk.hex('#1e90ff')('Docify - Documentation Generation Tool'))

   // @ts-ignore
   const res = await prompts(questions, {
      onCancel: () => process.exit(),
   })
   writeFile(
      Object.values(res).filter((ans) => ans?.trim() != ''),
      res,
   )
})()
