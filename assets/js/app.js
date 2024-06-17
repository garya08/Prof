const fs = require('fs');

// read json file

const data = fs.readFileSync('./test.json', {encoding: 'utf-8'});   // чтение JSON файла
// console.log(data);
let dataObj = JSON.parse(data);     // парсинг объекта

document.querySelector('.userbloc').innerHTML = `<section class="section_user></section>`
const {username, adress, tel} = dataObj;

let u = document.createElement('p');
u = innerHTML = `<span>${username}</span><br><span>${adress}</span><br><span>${tel}</span>`
document.querySelector('.section_user').appendChild(u);
