import { glob } from 'glob'

/**
 *
 * @returns {[{title?: String,value?: String,selected?: true | Boolean,} | undefined]}
 */
export const getFolderChoices = (async () => {
   try {
      const folderNames = await glob(
         [
            './**/*.png',
            './**/*.jpg',
            './**/*.jpeg',
            './**/*.gif',
            './**/*.svg',
            './**/*.webp',
            './**/*.avif',
         ],
         {
            ignore: 'node_modules/**',
         },
      )

      // Map folder names to the format expected by prompts library
      // @ts-ignore
      return folderNames.map((folder) => ({
         title: folder,
         value: folder,
      }))
   } catch (error) {
      // console.log(error)
      // @ts-ignore
      return []
   }
})
