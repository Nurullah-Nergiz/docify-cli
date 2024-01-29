import fs from 'fs'

/**
 *
 * @returns {[{title?: String,value?: String,selected?: true | Boolean,} | undefined]}
 */
export const getFolderChoices = (() => {
   try {
      const folderNames = fs.readdirSync('./media/')

      // Map folder names to the format expected by prompts library
      // @ts-ignore
      return folderNames.map((folder) => ({
         title: folder,
         value: 'media/' + folder,
         selected: true,
      }))
   } catch (error) {
      // console.log(error)
      // @ts-ignore
      return []
   }
})()
