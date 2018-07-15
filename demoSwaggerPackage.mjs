import fs from 'fs';
import getCode from './lib/codegen';

const swaggerFile = JSON.parse(fs.readFileSync('./templates/swagger.json', 'utf-8'));
const templateFile = fs.readFileSync('./templates/swaggerPackage.mustache', 'utf-8');

const imports = [
  { name: 'express', version: '^4.12.3' },
  { name: 'swagger-express-mw', version: '^0.1.0' },
  { name: 'swagger-ui-dist', version: '^3.17.4' },
];

const customParams = {
  port: 8080,
};

const code = getCode({
  moduleName: 'Test',
  swagger: swaggerFile,
  template: templateFile,
  imports,
  customParams,
});

fs.writeFileSync('./dist/package.json', code);
console.log(code);
