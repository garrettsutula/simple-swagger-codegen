import fs from 'fs';
import getCode from './lib/codegen';

const swaggerFile = JSON.parse(fs.readFileSync('./templates/swagger.json', 'utf-8'));
const templateFile = fs.readFileSync('./templates/swaggerController.mustache', 'utf-8');

const imports = [
  { name: 'fs', path: 'fs' },
  { name: 'util', path: 'util' },
];

const code = getCode({
  moduleName: 'Test',
  swagger: swaggerFile,
  template: templateFile,
  imports,
});

fs.writeFileSync('./dist/api/controllers/pet.mjs', code);
console.log(code);
