// @ts-ignore
import conf from 'conf'

const config = new conf({ projectName: 'Docify-cli' })

export const links = {
   website: '',
   github: 'https://github.com/',
   x: 'https://x.com/',
   linkedin: 'https://linkedin.com/in/',
   medium: 'https://medium.com/@',
   youtube: 'https://youtube.com/@',
}

/**
 * @param {String} name
 * @returns {String}
 */
export const getInitialBadge = (name) => {
   if (config.get(name))
      return config
         .get(name)
         .match(/link=([^\s&]+)/)[1]
         .replaceAll(links[name], '')
         .replaceAll(')', '')
         .replaceAll(']', ' ')
         .split(' ')[0]
         .replaceAll(links[name],"")
   else return ''
}

/**
 * @param {String} name
 * @param {String} val
 * @returns {String}
 */
export const getFormatBadge = (name, val) => {
   if (val.trim() != '') {
      const link = links[name];
      const value = val.replace(link,"")
      
      return `- [![${name} ${value}](https://img.shields.io/badge/-transparent?style=social&logo=${name}&logoColor=%2523FF0000&label=${value}&labelColor=000000&color=000000&link=${
         link + value
      })](${link + value})`
   } else return ''
}
/* - [![youtube nurullah-nergiz](https://img.shields.io/badge/-transparent?style=social&logo=youtube&logoColor=%2523FF0000&label=nurullah-nergiz&labelColor=000000&color=000000&link=https://youtube.com/@nurullah-nergiznurullah-nergiz)]
 (https://youtube.com/@nurullah-nergiznurullah-nergiz) */
