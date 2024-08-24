import chalk from 'chalk'
import prompts from 'prompts'
import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'

import questions from './questions/index.js'
import createReadmeFile from './utils/writeReadmeFile.js'
import checkUpdate from './libs/checkUpdate.js'
import { clearConfig, setConfig } from './libs/setConfig.js'

// App init
export default async function init() {
   console.clear()
   await checkUpdate()

   yargs(hideBin(process.argv))
      // @ts-ignore
      .command({
         command: '$0',
         desc: '',
         // @ts-ignore
         handler: async (argv) => {
            console.log(
               chalk.hex('#1e90ff')('Docify - Documentation Generation Tool'),
            )
            //@ts-ignore
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
            createReadmeFile(
               Object.values(res).filter((ans) => ans?.trim() != ''),
            )
         },
      })
      // @ts-ignore
      .command({
         command: ['cache', 'clear'],
         desc: 'cache data is cleared',
         // @ts-ignore
         handler: (argv) => {
            // @ts-ignore
            clearConfig()
            console.log('cache')
         },
      })
      .version()
      .alias('v', 'version')
      .help('h')
      .alias('h', 'help')
      .demandCommand(1, 'Komut eksik, varsayılan komut çalıştırılıyor.')
      .parse()
}
