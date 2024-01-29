// @ts-ignore
import conf from 'conf'

const config = new conf({ projectName: 'Docify-cli' })
const links = {
   website:"",
   github: 'https://github.com/',
   twitter: 'https://twitter.com/',
   linkedin: 'https://linkedin.com/in/',
   medium: 'https://medium.com/',
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
   else return ''
}

/**
 * @param {String} name
 * @param {String} val
 * @returns {String}
 */
export const getFormatBadge = (name, val) => {
   if (val.trim() != '')
      return `- [![${name} ${val}](https://img.shields.io/badge/-transparent?style=social&logo=${name}&logoColor=%2523FF0000&label=${val}&labelColor=000000&color=000000&link=${
         links[name] + val
      })](${links[name] + val})`
   else return ''
}
/* - [![youtube nurullah-nergiz](https://img.shields.io/badge/-transparent?style=social&logo=youtube&logoColor=%2523FF0000&label=nurullah-nergiz&labelColor=000000&color=000000&link=https://youtube.com/@nurullah-nergiznurullah-nergiz)]
 (https://youtube.com/@nurullah-nergiznurullah-nergiz) */