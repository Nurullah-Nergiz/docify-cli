import { execSync } from 'child_process';

const getGitUsername = () => {
   try {
      // Run the 'git config' command to get the Git username
      return execSync('git config user.name').toString().trim();
   } catch (error) {
      console.error('Error:', error);
      return null;
   }
};

export default getGitUsername;
