import fs from 'fs'

export const getFolderChoices = async (input) => {
   // Replace this with your logic to fetch folder names based on user input or a predefined list
   const folderNames = fs.readdirSync('./media/') // Get folder names in the current directory

   // Map folder names to the format expected by prompts library
   const choices = folderNames.map((folder) => ({
      title: folder,
      value: 'media/' + folder,
      selected: true,
   }))

   return choices
}
