const fs = require('fs');
const path = require('path');

module.exports = (() => {
  const filePath = path.join(__dirname, '.env');
  if (!fs.existsSync(filePath)) {
    return {};
  }
  const envContent = fs
    .readFileSync(filePath, 'utf8')
    .split('\n')
    .filter(Boolean);

  const ret = Object.fromEntries(envContent.map(line => line.split(/\s*=\s*/)));
  Object.assign(process.env, ret);

  return ret;
})();
