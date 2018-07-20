const mustache = require('mustache');
const _ = require('lodash');
const spec = require('swagger-tools').specs.v2;

function renderTemplate(template, swagger) {
  return mustache.render(template, swagger);
}

function processSwagger(swaggerDoc, imports, customParams) {
  return new Promise((resolve, reject) => {
    spec.resolve(swaggerDoc, (err, swagger) => {
      if (err) {
        reject(err);
      }

      const parsedSwagger = {
        swagger,
        imports,
        customParams,
        domain: (swagger.schemes && swagger.schemes.length > 0 && swagger.host && swagger.basePath) ? `${swagger.schemes[0]}://${swagger.host}${swagger.basePath.replace(/\/+$/g, '')}` : '',
        info: swagger.info,
        classes: swagger.tags,
        operations: [],
        definitions: [],
        securityDefinitions: swagger.securityDefinitions,
      };

      _.forEach(swagger.paths, (methods, path) => {
        _.forEach(methods, (operation, method) => {
          operation.path = path;
          operation.method = method;
          parsedSwagger.operations.push(operation);
        });
      });

      _.forEach(swagger.definitions, (definition, name) => {
        definition.name = name;
        parsedSwagger.definitions.push(definition);
      });

      resolve(parsedSwagger);
    });
  });
}

module.exports = {
  renderTemplate,
  processSwagger,
};
