const request = require('request').defaults({
  headers: {
    'User-Agent': 'gistm'
  }
})
const URL = require('url')
const writeGistFile = require('./writeGistFile')

function fetchGist(gistUrl, done) {
  const [author, gistId] = URL.parse(gistUrl).pathname.replace(/^\//, '').split(/\//)

  request(`http://api.github.com/gists/${gistId}`, (err, res, body) => {
    if (err) {
      console.error(err)
      return done(err)
    }

    try {
      const gistData = JSON.parse(body)
      done(null, gistData);
    }
    catch (err) {
      console.error(err)
      return done(err)
    }
  })
}

module.exports = fetchGist
