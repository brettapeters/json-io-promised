var fs = require('fs');

function emptyDir(path) {
  try { var files = fs.readdirSync(path); }
  catch(e) { return; }
  if (files.length > 0) {
    for (var i = 0; i < files.length; i++) {
      var file = path + '/' + files[i];
      if (fs.statSync(file).isFile()) {
        fs.unlinkSync(file);
      }
    }
  }
}

module.exports = emptyDir;
