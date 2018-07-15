import fs from 'fs';
import cli from 'commander';
import yaml from 'js-yaml';
import getCode from './codegen';

import pkg from '../package.json';

cli
  .version(pkg.version)
  .command('generate <file>')
  .option('-t, --template <name>', 'Your mustache template name', 'Test')
  .option('-s, --swagger <pathToFile>', 'Your swagger file path')
  .action((file, args) => {
    const swaggerFile = fs.readFileSync(args.swagger, 'utf-8');
    const templateFile = fs.readFileSync(args.template, 'utf-8');

    let parsedSwagger;
    try {
      parsedSwagger = JSON.parse(swaggerFile);
    } catch (e) {
      parsedSwagger = yaml(swaggerFile);
    }

    const result = getCode({
      moduleName: file,
      swagger: parsedSwagger,
      template: templateFile,
    });

    console.log(result);
    fs.writeFileSync(`./${file}.js`, result);
  });

cli.parse(process.argv);
