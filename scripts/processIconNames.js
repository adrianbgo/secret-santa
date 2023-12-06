const fs = require('fs');
const path = require('path');

async function main() {
    const iconsDir = path.join(__dirname, '..','public','svg-icons');
    const iconNames = fs.readdirSync(iconsDir).map(n => n.substring(0,n.lastIndexOf('.')));
    const outFile = path.join(__dirname, '..', 'app', '_types', 'IconNames.tsx');
    const content = 'export type IconNames = ' + iconNames.map(n => `'${n}'`).join(' | ') + ';';
    fs.writeFileSync(outFile, content);
}

main();