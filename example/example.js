const fs = require('fs');
const codegen = require('../lib/codegen');

const template = fs.readFileSync('./controllerGenerator.mustache', 'utf-8');
const swaggerDoc = JSON.parse(fs.readFileSync('./swagger.json', 'utf-8'));

const imports = [
  { name: 'fs', path: 'fs' },
  { name: 'util', path: 'util' },
];

codegen.processSwagger(swaggerDoc, imports).then((swagger) => {
  const code = codegen.renderTemplate(template, swagger);
  fs.writeFileSync('./controller.js', code);
});
