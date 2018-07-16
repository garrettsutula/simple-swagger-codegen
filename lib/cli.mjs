import fs from 'fs';
import cli from 'commander';
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

    const result = getCode({
      moduleName: file,
      swagger: swaggerFile,
      template: templateFile,
    });

    fs.writeFileSync(`./${file}.js`, result);
  });

cli.parse(process.argv);
