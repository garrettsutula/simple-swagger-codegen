import fs from 'fs';
import jsYaml from 'js-yaml';
import getCode from './lib/codegen';

const yaml = jsYaml.safeLoad;

function demo(templatePath, outputPath, imports, constants) {
  const swaggerFile = fs.readFileSync('./swagger.yaml', 'utf-8');
  const templateFile = fs.readFileSync(templatePath, 'utf-8');

  let parsedSwagger;
  try {
    parsedSwagger = JSON.parse(swaggerFile);
  } catch (e) {
    parsedSwagger = yaml(swaggerFile);
  }

  const code = getCode({
    moduleName: 'Test',
    swagger: parsedSwagger,
    template: templateFile,
    imports,
    constants,
  });

  fs.writeFileSync(outputPath, code);
}

export default demo;
