import { readFileSync } from 'fs';

const data = readFileSync('./static/social-cards/default.png').toString('base64')
const image = 'data:image/png;base64,' + data.slice(0, 100) + data.slice(-100) + "==";
console.log(`background-image: url("${image}");`)
console.log(data.slice(0, 100))
console.log(data.slice(-100))