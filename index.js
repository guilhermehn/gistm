const path = require('path')
const fetchGist = require('./lib/fetchGist')
const writeGistFile = require('./lib/writeGistFile')
const conf = require('./lib/getPackageConf')()

function gistm(url, userOptions, done = _ => _) {
  const options = Object.assign({}, conf, userOptions)

  fetchGist(url, (err, data) => {
    const dest = path.join(process.cwd(), options.destination)

    Object.keys(data.files).forEach(filename => {
      writeGistFile(dest, filename, data.files[filename].content)
        .then(done)
        .catch(err => {
          if (process.DEBUG) {
            console.error(err)
          }

          done(err)
        })
    })
  })
}

module.exports = gistm
