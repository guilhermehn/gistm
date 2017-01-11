const path = require('path')

function getPackageConf() {
  const DEFAULTS = {
    destination: '.'
  }

  try {
    const packagePath = path.join(process.cwd(), 'package.json')
    const pkg = require(packagePath)
    return pkg.hasOwnProperty('gistm') ? pkg.gistm : DEFAULTS
  }
  catch (err) {
    if (process.DEBUG) {
      console.log(err)
    }
    return DEFAULTS
  }
}

module.exports = getPackageConf
