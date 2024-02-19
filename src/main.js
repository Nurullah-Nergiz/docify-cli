import chalk from 'chalk'
import prompts from 'prompts'
import questions from './questions/index.js'
import createReadmeFile from './utils/writeReadmeFile.js'

import checkUpdate from './libs/checkUpdate.js'
import { setConfig } from './libs/setConfig.js'

// App init
export default async function init() {
   console.clear()
   console.log(chalk.hex('#1e90ff')('Docify - Documentation Generation Tool'))

   await checkUpdate()

   // console.log(config.get().usage)

   // @ts-ignore
   const res = await prompts(questions, {
      onCancel: () => {
         process.exit()
      },
      // @ts-ignore
      onSubmit: ({ name }, val) => {
         setConfig({ key: name, val })
      },
   })

   console.clear()
   createReadmeFile(Object.values(res).filter((ans) => ans?.trim() != ''))
}
