import { writeFileSync } from 'fs';

/**
 *
 * @param {Array} answers
 */
const writeFile = (answers) => {
   writeFileSync(process.cwd() + '/README.md', answers.join('\n\n'));
};
export default writeFile;
