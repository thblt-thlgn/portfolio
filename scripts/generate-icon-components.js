/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

const iconFolder = 'src/assets/icons';
const componentsFolder = 'src/components/svg-icon/icons';

const iconFolderPath = path.join(__dirname, '..', iconFolder);
const componentsFolderPath = path.join(__dirname, '..', componentsFolder);
const typingFilePath = path.join(__dirname, '..', 'src/icon-names.d.ts');

rimraf.sync(componentsFolderPath);
rimraf.sync(typingFilePath);
fs.mkdirSync(componentsFolderPath);

const iconNames = fs
  .readdirSync(iconFolderPath)
  .filter((fileName) => fileName.endsWith('.svg'))
  .map((fileName) => fileName.split('.')[0]);

iconNames.forEach((fileName) => {
  const filePath = path.join(componentsFolderPath, `${fileName}-icon.tsx`);
  const content = `import { ReactComponent } from 'assets/icons/${fileName}.svg';\nexport default ReactComponent;\n`;
  fs.writeFileSync(filePath, content);
});

fs.writeFileSync(
  typingFilePath,
  `type IconName = ${iconNames.map((name) => `'${name}'`).join(' | ')};\n`,
);
