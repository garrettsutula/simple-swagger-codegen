import fs from 'fs';
import getCode from './lib/codegen';

function demo(templatePath, outputPath, imports, constants) {
  const swaggerFile = fs.readFileSync('./swagger.yaml', 'utf-8');
  const templateFile = fs.readFileSync(templatePath, 'utf-8');

  const code = getCode({
    moduleName: 'Test',
    swagger: swaggerFile,
    template: templateFile,
    imports,
    constants,
  });
  console.log(code);
  fs.writeFileSync(outputPath, code);
}

export default demo;
