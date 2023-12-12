import {writeFileSync} from 'fs'

/**
 *
 * @param {Array} answers
 */
const writeFile = (answers, res) => {
   writeFileSync(
      process.cwd() + '/README.md',
      [
         ...answers,
         '\n---',
         '## License',
         `![GitHub License](https://img.shields.io/github/license/${
            res?.githubUserName
               .split(
                  '- [![GitHub](https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white)](https://www.github.com/',
               )[1]
               .split(')')[0]
         }/${res?.name.split('# ')[1]}?style=social&logo=github&label=License)`,
         'This project was generated with [CLI-Readme-Generator](https://www.npmjs.com/package/cli-readme-generator).',
      ].join('\n\n'),
   )
}
export default writeFile
