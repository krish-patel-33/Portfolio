const fs = require('fs');
const path = require('path');
const file = 'c:/kernal/MCA/project/portfolio/src/components/Contact.jsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/\\`/g, '`').replace(/\\\$/g, '$');
fs.writeFileSync(file, content);
console.log('Fixed syntax in Contact.jsx');
