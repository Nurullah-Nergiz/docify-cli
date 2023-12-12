import defaultData from '../utils/defaultData.js'
import getGitUsername from '../utils/getGitUserName.js'

const {description, name, author, dependencies, devDependencies} = defaultData

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
      initial: `npm install ${name}`,
      format: (val) =>
         val.trim() != ''
            ? `---\n\n## Download\n\n\`\`\`bash\n${val}\n\`\`\``
            : '',
   },
   {
      type: 'text',
      name: 'usage',
      message: 'Usage',
      initial: `import ${name
         .split('-')
         .map((n, i) =>
            i !== 0 ? n[0].toUpperCase() + n.substring(1).toLowerCase() : n,
         )
         .join('')} from '${name}';`,
      format: (val) => `---\n\n## Download\n\n\`\`\`bash\n${val}\n\`\`\``,
   },
   {
      type: 'text',
      name: 'nodeVersion',
      message: 'Recommended NodeJS Version?',
      initial: process.version,
      format: (val) => {
         return (
            (
               val.trim() != ''
                  ? `Recommended NodeJS Version [${val}](https://nodejs.org/dist/${val})\n\n`
                  : '' +
                    `## Dependencies\n\n\t` +
                    [...Object.entries(dependencies)].map(([key, val]) => {
                       return `${key}: ${val};\n\t`
                    }) +
                    `\n## Dependencies\n\n\t` +
                    [...Object.entries(devDependencies)].map(([key, val]) => {
                       return `${key}: ${val};\n\t`
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
      initial: author,
      format: (val) =>
         val.trim() != '' ? `---\n\n## Author\n\n - ${val}` : '',
   },
   {
      type: 'text',
      name: 'website',
      message: 'Website',
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
      message: 'Twitter (X))',
      format: (val) =>
         val.trim() != ''
            ? `- [![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?logo=Twitter&logoColor=white)](https://twitter.com/${val})`
            : '',
   },
   {
      type: 'text',
      name: 'linkedin',
      message: 'Linkedin (in/@)',
      format: (val) =>
         val.trim() != ''
            ? `- [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/${val})`
            : '',
   },
   {
      type: 'text',
      name: 'medium',
      message: 'Medium User Name @',
      format: (val) =>
         val.trim() != ''
            ? `- [![Medium](https://img.shields.io/badge/Medium-12100E?logo=medium&logoColor=white)](https://medium.com/@${val})`
            : '',
   },
   {
      type: 'text',
      name: 'youtube',
      message: 'Youtube Chanel ID:',
      format: (val) =>
         val.trim() != ''
            ? `- [![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?logo=YouTube&logoColor=white)](https://youtube.com/@${val})`
            : '',
   },
   {
      type: (prev) => (prev == 'pizza' ? 'text' : null),
      name: 'topping',
      message: 'Name a topping',
      initial: 'aasd',
   },
]
