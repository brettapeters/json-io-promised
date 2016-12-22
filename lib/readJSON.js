var fs = require('fs');

function readJSON(file) {
  return new Promise(function(resolve, reject) {
    fs.readFile(file, 'utf-8', function(err, data) {
      if (err) reject(err);
      else {
        try {
          resolve(JSON.parse(data));
        } catch(err) {
          reject(err);
        }
      }
    });
  });
}

module.exports = readJSON;
