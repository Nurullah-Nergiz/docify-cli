import { getFormatBadge, getInitialBadge } from '../utils/badge.js'
import defaultData from '../utils/defaultData.js'
import { getFolderChoices } from '../utils/getFolderChoices.js'
import getGitUsername from '../utils/getGitUserName.js'
import config from '../utils/conf.js'

const { description, name, author, dependencies, devDependencies, repository } =
   defaultData
const folderChoices = await getFolderChoices()


/**
 * @type {import('inquirer').QuestionCollection}
 */
export default [
   {
      type: 'text',
      name: 'name',
      message: 'Project name?',
      initial: name,
      format: (val) => '# ' + val,
   },
   {
      type: 'text',
      name: 'description',
      message: 'Description?',
      initial: description,
   },
   {
      type: 'text',
      name: 'download',
      message: 'Download',
      initial: (val, values) =>
         repository?.url
            ? `git clone ${repository.url}`
            : `git clone https://github.com/${getGitUsername}/${values.name
                 .slice(1)
                 .trim()}.git`,
      format: (val) =>
         val.trim() != ''
            ? `---\n\n## Download\n\n\`\`\`bash\n${val}\n\`\`\``
            : '',
   },
   {
      type: () =>
         folderChoices.length !== 0 ? 'autocompleteMultiselect' : null,
      name: 'value',
      message: 'Select images to display',
      choices: folderChoices,
      format: (val) => val.map((img) => `![${val}](${val})\n${val}`).join('\n'),
      initial: 0,
      // fallback: "as",
   },
   {
      type: 'text',
      name: 'nodeVersion',
      message: 'Recommended NodeJS Version?',
      initial: process.version,
      format: (val) => {
         return (
            (
               (val.trim() != ''
                  ? `Recommended NodeJS Version [${val}](https://nodejs.org/dist/${val})\n\n`
                  : '') +
               `## Dependencies\n\n \t` +
               [...Object.entries(dependencies)].map(([key, val]) => {
                  return `${key}: ${val}\n\t`
               }) +
               `\n## Dependencies\n\n \t` +
               [...Object.entries(devDependencies)].map(([key, val]) => {
                  return `${key}: ${val}\n\t`
               })
            )
               // @ts-ignore
               .replaceAll(',', '')
               .replaceAll('\n\t', ',\n\t')
         )
      },
   },

   {
      type: 'text',
      name: 'author',
      message: 'Author',
      initial: () => {
         if (author) return author
         else if (config.get('author'))
            return config
               .get('author')
               .replaceAll('\n', '')
               .replaceAll('-', '')
               .slice(9)
               .trim()
         else return ''
      },
      format: (val) =>
         val.trim() != '' ? `---\n\n## Author\n\n - ${val}` : '',
   },
   {
      type: 'text',
      name: 'website',
      message: 'Website',
      initial: getInitialBadge('website'),
      format: (val) => getFormatBadge('website', val),
   },
   {
      type: 'text',
      name: 'githubUserName',
      message: 'GitHub Username:',
      initial: getGitUsername ?? getInitialBadge('github'),
      format: (val) => getFormatBadge('github', val),
   },
   {
      type: 'text',
      name: 'x',
      message: 'Twitter (X)',
      initial: getInitialBadge('x'),
      format: (val) => getFormatBadge('x', val),
   },
   {
      type: 'text',
      name: 'linkedin',
      message: 'Linkedin (in/@)',
      initial: getInitialBadge('linkedin'),
      format: (val) => getFormatBadge('linkedin', val),
   },
   {
      type: 'text',
      name: 'medium',
      message: 'Medium User Name @',
      initial: getInitialBadge('medium'),
      format: (val) => getFormatBadge('medium', val),
   },
   {
      type: 'text',
      name: 'youtube',
      message: 'Youtube Chanel ID:',
      initial: getInitialBadge('youtube'),
      format: (val) => getFormatBadge('youtube', val),
   },
   {
      type: 'select',
      name: 'license',
      message: 'Pick a color',
      choices: [
         {
            title: 'MIT',
            description: 'This option has a description',
            value: 'MIT',
         },
         { title: 'Apache 2.0', value: 'Apache-2.0' },
         { title: 'GPL 3.0', value: 'GPL-3.0' },
         { title: 'GPL 3.0', value: 'GPL-3.0' },
         { title: 'OTHER', value: 'other' },
      ],
      format: (val, values) => {
         console.log(values)
         return val !== 'other'
            ? `---\n## License\n${values.name.slice(
                 1,
              )} is licensed under the ${val} License. See the [LICENSE](LICENSE) file for more information.`
            : ''
      },
   },
   {
      type: (prev) => (prev == '' ? 'text' : null),
      name: 'topping',
      message: 'Name a topping',
      format: (val, values) =>
         `---\n## License\n${values.name.slice(
            1,
         )} is licensed under the ${val} License. See the [LICENSE](LICENSE) file for more information.`,
   },
]

// fun
