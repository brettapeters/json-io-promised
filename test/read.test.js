var test = require('tape');
var fs = require('fs');
var readJSON = require('../lib/readJSON');

var validJSON = __dirname + '/valid.json';
var invalidJSON = __dirname + '/invalid.json';

test('readJSON', function(t) {
  t.plan(3);

  readJSON(validJSON).then(function(data) {
    t.ok(Array.isArray(data), 'Valid JSON data is parsed');
  });

  readJSON('badFilename.json').then(function() {
    t.fail('Bad filename was not rejected');
  }).catch(function(err) {
    t.ok(err, 'Bad filename is rejected');
  });

  readJSON(invalidJSON).then(function(data) {
    t.fail('Invalid JSON was not rejected');
  }).catch(function(err) {
    t.ok(err, 'Invalid JSON is rejected');
  })
})
