const fs = require('fs');

module.exports = () => {
  const data = fs.readFileSync('./lib/database/18+.json');
  const jsonData = JSON.parse(data);
  const boksIndex = Math.floor(Math.random() * jsonData.length);
  const boksKey = jsonData[boksIndex];
  return `${boksKey.teks}`;
};
