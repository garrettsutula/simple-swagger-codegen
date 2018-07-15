import fs from 'fs';
import getCode from './lib/codegen';

const swaggerFile = JSON.parse(fs.readFileSync('./templates/swagger.json', 'utf-8'));
const templateFile = fs.readFileSync('./templates/swaggerApp.mustache', 'utf-8');

const imports = [
  { name: 'SwaggerExpress', path: 'swagger-express-mw' },
  { name: 'express', path: 'express' },
  { name: 'path', path: 'path' },
  { name: 'swaggerUiDist', path: 'swagger-ui-dist' },
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

fs.writeFileSync('./dist/app.mjs', code);
console.log(code);
