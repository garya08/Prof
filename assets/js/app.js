const fs = require('fs');

// read json file

const data = fs.readFileSync('./test.json', {encoding: 'utf-8'});   // чтение JSON файла
// console.log(data);
let dataObj = JSON.parse(data);     // парсинг объекта

document.querySelector('.userbloc').innerHTML = `<section class="section_user></section>`

let tex = document.createElement('p').innerHTML = `<span>${dataObj.username}</span><br><span>${dataObj.adress}</span><br><span>${dataObj.tel}</span>`;
document.querySelector('.userbloc').appendChild(tex);