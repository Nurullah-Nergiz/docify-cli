import axios from 'axios'

const getPackageVersion = async () =>
   axios
      .get('https://registry.npmjs.org/docify-cli/latest')
      .then((data) => data.data)

export default getPackageVersion
