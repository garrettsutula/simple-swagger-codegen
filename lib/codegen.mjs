import mustache from 'mustache';
import _ from 'lodash';
import jsYaml from 'js-yaml';

const yaml = jsYaml.safeLoad;

function processSwagger(moduleName, swagger, imports, constants) {
  const data = {
    moduleName,
    imports,
    constants,
    domain: (swagger.schemes && swagger.schemes.length > 0 && swagger.host && swagger.basePath) ? `${swagger.schemes[0]}://${swagger.host}${swagger.basePath.replace(/\/+$/g, '')}` : '',
    info: swagger.info,
    classes: swagger.tags,
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
  imports,
  constants,
}) {
  if (!template || !swagger || !moduleName) {
    throw new Error('Missing required parameter.');
  }

  let parsedSwagger;
  try {
    parsedSwagger = JSON.parse(swagger);
  } catch (e) {
    parsedSwagger = yaml(swagger);
  }

  const data = processSwagger(moduleName, parsedSwagger, imports, constants);
  return mustache.render(
    template,
    data,
  );
}

export default getCode;
