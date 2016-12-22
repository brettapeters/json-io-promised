var fs = require('fs');

function writeJSON(file, data) {
  return new Promise(function(resolve, reject) {
    fs.writeFile(file, JSON.stringify(data, null, 2), { flag: 'wx' }, function(err) {
      if (err) reject(err);
      else resolve();
    });
  });
}

module.exports = writeJSON;
