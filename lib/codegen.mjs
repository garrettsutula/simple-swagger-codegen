import mustache from 'mustache';
import _ from 'lodash';

function processSwagger(moduleName, swagger, customParams) {
  const data = {
    moduleName,
    customParams,
    domain: (swagger.schemes && swagger.schemes.length > 0 && swagger.host && swagger.basePath) ? `${swagger.schemes[0]}://${swagger.host}${swagger.basePath.replace(/\/+$/g, '')}` : '',
    operations: [],
    definitions: [],
    securityDefinitions: [],
  };

  _.forEach(swagger.paths, (methods, path) => {
    _.forEach(methods, (operation, method) => {
      operation.path = path;
      operation.method = method;
      data.operations.push(operation);
    });
  });

  _.forEach(swagger.definitions, (definition, name) => {
    definition.name = name;
    data.definitions.push(definition);
  });

  _.forEach(swagger.securityDefinitions, (definition, name) => {
    definition.name = name;
    data.securityDefinitions.push(definition);
  });

  return data;
}

function getCode({
  moduleName,
  template,
  swagger,
  customParams,
}) {
  if (!template || !swagger || !moduleName) {
    throw new Error('Missing required parameter.');
  }
  const data = processSwagger(moduleName, swagger, customParams);

  return mustache.render(
    template,
    data,
  );
}

export default getCode;
