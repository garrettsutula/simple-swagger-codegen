import demo from './demo';

const outputPath = './dist/package.json';

const imports = [
  { name: 'express', version: '^4.12.3' },
  { name: 'swagger-express-mw', version: '^0.1.0' },
  { name: 'swagger-ui-dist', version: '^3.17.4' },
];

demo('./templates/swaggerPackage.mustache', outputPath, imports);
