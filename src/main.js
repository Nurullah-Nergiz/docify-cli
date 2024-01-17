import chalk from 'chalk'
import prompts from 'prompts'
import questions from './questions/index.js'
import createReadmeFile from './utils/writeReadmeFile.js'
import writeCacheFile from './utils/writeCache.js'

// App init
export default async function init() {
   console.clear()
   console.log(chalk.hex('#1e90ff')('Docify - Documentation Generation Tool'))

   const cacheValue = {}
   // @ts-ignore
   const res = await prompts(questions, {
      onCancel: () => process.exit(),
      // onSubmit: ({ name }, val) => {
      //    // cache and save file
      //    cacheValue[name] = val
      // },
   })
   // writeCacheFile(cacheValue)
   createReadmeFile(
      Object.values(res).filter((ans) => ans?.trim() != ''),
      res,
   )
}
