function isValidJSON(data) {
  try {
    var parsed = JSON.parse(data);
  } catch(e) {
    return false;
  }
  if (typeof parsed === 'object' && parsed !== null) {
    return true;
  } else {
    return false;
  }
}

module.exports = isValidJSON;
