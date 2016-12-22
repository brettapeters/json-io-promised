var test = require('tape');
var fs = require('fs');
var emptyDir = require('./helpers/empty-dir');
var isValidJSON = require('./helpers/is-valid-JSON');
var writeJSON = require('../lib/writeJSON');

var tmpDir = fs.mkdtempSync('/tmp/');

test('writeJSON', function(t) {
  t.plan(3);

  writeJSON('1337 /h@x0r', {}).then(function() {
    t.fail('Bad filename was not rejected');
  }).catch(function(err) {
    t.pass('Bad filename is rejected');
  });

  var obj = [{"foo":1,"bar":["cool","beans"]},
             {"sup":"dude","hella":"tight"}];
  var validJSON = tmpDir + '/' + 'valid.json';
  writeJSON(validJSON, obj).then(function() {
    fs.readFile(validJSON, 'utf-8', function(err, data) {
      t.ok(isValidJSON(data), 'Valid JSON is written');
    });
  });

  var existing = tmpDir + '/' + 'exists.txt';
  fs.writeFileSync(existing, 'File already exists');
  writeJSON(existing, 'Overwritten').then(function() {
    t.fail('Existing file was overwritten');
  }).catch(function(err) {
    t.pass('Existing file is not overwritten')
  });
});

test.onFinish(function() {
  emptyDir(tmpDir);
  fs.rmdirSync(tmpDir);
});
