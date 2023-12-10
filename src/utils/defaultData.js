import { readFileSync } from 'fs';

const getDefaultData = () => {
   try {
      return JSON.parse(readFileSync(process.cwd() + '/package.json', 'utf8'));
   } catch (error) {
      console.error('Error:', error);
      return null;
   }
};

export default getDefaultData();
