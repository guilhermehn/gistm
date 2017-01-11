const fs = require('fs')
const path = require('path')

function writeGistFile(destination = '.', filename, contents) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path.join(destination, filename), contents, 'utf8', err => {
      if (err) {
        if (process.DEBUG) {
          console.log(err)
        }
        return reject(err)
      }

      resolve()
    })
  })
}

module.exports = writeGistFile
