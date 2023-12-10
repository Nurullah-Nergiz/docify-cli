import defaultData from '../utils/defaultData.js';
import getGitUsername from '../utils/getGitUserName.js';

const {description, name, version, homepage, author} = defaultData;

export default [
   {
      type: 'text',
      name: 'name',
      message: 'Project name?',
      initial: name,
      format: (val) => '# ' + val,
      validate: (val) => (val.trim() != '' ? true : ''),
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
      format: (val) => `## Download:\n\`\`\`bash\n${val}\n\`\`\``,
   },
   {
      type: 'text',
      name: 'nodeVersion',
      message: 'Minimum node version?',
      initial: process.version,
   },
   {
      type: 'text',
      name: 'githubUserName',
      message: 'GitHub username?',
      initial: getGitUsername(),
   },
   {
      type: 'text',
      name: 'author',
      message: 'Author',
      initial: author,
   },
   {
      type: 'text',
      name: 'linkedin',
      message: 'Linkedin (in/@)',
      format: (val) =>
         `[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/${val})`,
   },
   {
      type: (prev) => (prev == 'pizza' ? 'text' : null),
      name: 'topping',
      message: 'Name a topping',
      initial: 'aasd',
   },
];
