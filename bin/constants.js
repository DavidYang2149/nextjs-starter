const fs = require('fs');

const errorStartLine = '========================= 🚨 E R R O R 🚨 =========================';
const errorEndLine = '=========================== 🚨 E N D 🚨 ===========================';

let version = '';
fs.readFile('./package.json', 'utf8', (err, data) => {
  version = JSON.parse(data).version;
});

module.exports = { errorStartLine, errorEndLine, version };
