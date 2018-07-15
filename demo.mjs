import fs from 'fs';
import getCode from './lib/codegen';

let swaggerFile = JSON.parse(fs.readFileSync('./templates/swagger.json', 'utf-8'));
let templateFile = fs.readFileSync('./templates/classGenerator.mustache', 'utf-8');

const code = getCode({
  moduleName: 'Test',
  swagger: swaggerFile,
  template: templateFile,
});

console.log(code);
