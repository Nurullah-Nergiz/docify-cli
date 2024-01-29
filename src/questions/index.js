import defaultData from '../utils/defaultData.js'
import { getFolderChoices } from '../utils/getFolderChoices.js'
import getGitUsername from '../utils/getGitUserName.js'
// @ts-ignore
import Conf from 'conf'

const { description, name, author, dependencies, devDependencies, repository } =
   defaultData
const config = new Conf({ projectName: 'Docify-cli' })

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
            : `git clone https://github.com/${getGitUsername()}/${
                 values.name
              }.git`,
      format: (val) =>
         val.trim() != ''
            ? `---\n\n## Download\n\n\`\`\`bash\n${val}\n\`\`\``
            : '',
   },
   {
      type: () =>  getFolderChoices.length !== 0 ? 'autocompleteMultiselect' : null,
      name: 'value',
      message: 'Select images to display',
      choices: getFolderChoices,
      format: (val) => val.map((img) => `![${val}](${val})\n${val}`).join('\n'),
      initial: 0,
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
               `## Dependencies\n\n\t` +
               [...Object.entries(dependencies)].map(([key, val]) => {
                  console.log(`${key}: ${val};\n\t`)
                  return `${key}: ${val},\n\t`
               }) +
               `\n## Dependencies\n\n\t` +
               [...Object.entries(devDependencies)].map(([key, val]) => {
                  return `${key}: ${val},\n\t`
               })
            )
               // @ts-ignore
               .replaceAll(',', '')
         )
      },
   },

   {
      type: 'text',
      name: 'author',
      message: 'Author',
      initial: author ?? config.get('author'),
      format: (val) =>
         val.trim() != '' ? `---\n\n## Author\n\n - ${val}` : '',
   },
   {
      type: 'text',
      name: 'website',
      message: 'Website',
      initial: config.get('website')
         ? config
              .get('website')
              .match(/link=([^\s&]+)/)[1]
              .slice(0, -1)
         : '',
      format: (val) =>
         val.trim() != ''
            ? `- ![Website](https://img.shields.io/website?url=${val}&up_message=visit&up_color=%23fff&link=${val})`
            : '',
   },
   {
      type: 'text',
      name: 'githubUserName',
      message: 'GitHub Username:',
      initial: getGitUsername(),
      format: (val) =>
         val.trim() != ''
            ? `- [![GitHub](https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white)](https://www.github.com/${val})`
            : '',
   },
   {
      type: 'text',
      name: 'twitter',
      message: 'Twitter (X)',
      initial: config.get('twitter')
         ? config.get('twitter').slice(0, 114).replace('- ', '').slice(0, -1)
         : '',
      format: (val) =>
         val.trim() != ''
            ? `- [![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?logo=Twitter&logoColor=white)](https://twitter.com/${val})`
            : '',
   },
   {
      type: 'text',
      name: 'linkedin',
      message: 'Linkedin (in/@)',
      initial: config.get('linkedin')
         ? config
              .get('linkedin')
              .replace(
                 '[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/',
                 '',
              )
              .replace('- - ', '')
              .slice(0, -1)
         : '',
      format: (val) =>
         val.trim() != ''
            ? `- [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/${val})`
            : '',
   },
   {
      type: 'text',
      name: 'medium',
      message: 'Medium User Name @',
      initial: config.get('medium')
         ? config
              .get('medium')
              .replace(
                 '- [![Medium](https://img.shields.io/badge/Medium-12100E?logo=medium&logoColor=white)](https://medium.com/@',
                 '',
              )
              .replace('- - ', '')
              .slice(0, -1)
         : '',
      format: (val) =>
         val.trim() != ''
            ? `- [![Medium](https://img.shields.io/badge/Medium-12100E?logo=medium&logoColor=white)](https://medium.com/@${val})`
            : '',
   },
   {
      type: 'text',
      name: 'youtube',
      message: 'Youtube Chanel ID:',
      initial: config.get('youtube')
         ? config
              .get('youtube')
              .replace(
                 '- [![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?logo=YouTube&logoColor=white)](https://youtube.com/@',
                 '',
              )
              .replace('- - ', '')
              .slice(0, -1)
         : '',
      format: (val) =>
         val.trim() != ''
            ? `- [![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?logo=YouTube&logoColor=white)](https://youtube.com/@${val})`
            : '',
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
