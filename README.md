# JSON IO Promised

This is a simple promise-based wrapper around Node's File System that reads & writes JSON files.

## Usage

```javascript
var jio = require('json-io-promised');

jio.readJSON(fileName).then(function(object) {
  // Do something with the parsed JSON
}).catch(function(err) {
  // Handle errors
});

jio.writeJSON(fileName, object).then(function() {
  // Do something upon successful write
}).catch(function(err) {
  // Handle errors
})
```
