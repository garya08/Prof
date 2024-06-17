const fs = require('fs');

// read json file

const data = fs.readFileSync('/assets/server/db.json', {encoding: 'utf-8'});   // чтение JSON файла
// console.log(data);
var dataObj = JSON.parse(data);     // парсинг объекта
console.log(dataObj);
