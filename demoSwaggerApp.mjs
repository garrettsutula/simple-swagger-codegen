import demo from './demo';

const outputPath = './dist/app.mjs';

const imports = [
  { name: 'SwaggerExpress', path: 'swagger-express-mw' },
  { name: 'express', path: 'express' },
  { name: 'path', path: 'path' },
  { name: 'swaggerUiDist', path: 'swagger-ui-dist' },
];

const constants = {
  port: 8080,
};

demo('./templates/swaggerApp.mustache', outputPath, imports, constants);
