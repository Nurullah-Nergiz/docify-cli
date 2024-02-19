import Table from 'cli-table'
import semver from 'semver'
import getPackageVersion from '../services/getPackageVersion.js'
import { readFileSync } from 'fs'
import { dirname, join } from 'path'

/**
 *
 * @returns {Object}
 */
const { version } = (() => {
   try {
      return JSON.parse(
         readFileSync(
            join(import.meta.url, '../', '../', '../', '/package.json').replace(
               'file:',
               '',
            ),
            'utf8',
         ),
      )
   } catch (error) {
      console.log(error)
      process.exit()
      return null
   }
})()

const checkUpdate = async () => {
   const res = await getPackageVersion()
   if (version && semver.compare(version || '1.0.0', res.version) < 0) {
      const table = new Table({
         chars: {
            top: '═',
            'top-mid': '╤',
            'top-left': '╔',
            'top-right': '╗',
            bottom: '═',
            'bottom-mid': '╧',
            'bottom-left': '╚',
            'bottom-right': '╝',
            left: '║',
            'left-mid': '',
            mid: '',
            'mid-mid': '',
            right: '║',
            'right-mid': '',
            middle: '',
         },
         colAligns: ['middle'],
         style: {
            'padding-left': 8,
            'padding-right': 8,
            border: ['blue'],
         },
      })
      table.push(
         [
            `Update available! ${version} → ${res.version}`,
         ],
         [`Changelog: https://github.com/Nurullah-Nergiz/docify-cli`],
         [`Run "npm i -g docify-cli" to update.`],
         [''],
         [
            'Follow Docify-Cli for updates: https://nurullahnergiz.com/projects/docify-cli/master',
         ],
      )
      console.log(table.toString())
   }
}

export default checkUpdate
