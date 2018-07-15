import mustache from 'mustache';
import _ from 'lodash';

function processSwagger(opts) {
  const swagger = {};
  _.extend(swagger, opts.swagger);
  const methods = [];
  const data = {
    moduleName: opts.moduleName,
    domain: (swagger.schemes && swagger.schemes.length > 0 && swagger.host && swagger.basePath) ? swagger.schemes[0] + '://' + swagger.host + swagger.basePath.replace(/\/+$/g,'') : '',
    operations: [],
    definitions: [],
    securityDefinitions: [],
    customParams: opts.customParams ? opts.customParams : null,
  };

  _.forEach(swagger.paths, (methods, path)=>{
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

function getCode(opts){
  if(!opts.template || !opts.swagger || !opts.moduleName){
    throw new Error('Missing required parameter.');
  }
  const data = processSwagger(opts);

  return mustache.render(
    opts.template,
    data,
  );

}

export default getCode;
