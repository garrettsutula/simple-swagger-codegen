# Swagger to Javascript Codegen
Mininmalist Swagger > Javascript codegen, assumes validation, linting and rules enforcement done at swagger definition and/or mustache template. Simply renders a provided mustache template against a swagger swagger definition.

## TODO
- add to npm
- add tests

## Installation
Download/clone this repo for now using `curl`, `git` or your favorite github client app. Requires Node.js version `10.0` or higher. Use [nvm](https://github.com/creationix/nvm) to easily switch between different versions of node runtimes.

## Usage

```javascript
const fs = require('fs');
const codegen = require('./lib/codegen');
const swaggerDoc = require('./swagger.json');

const template = fs.readFileSync('./templates/classGenerator.mustache', 'utf-8');

const swagger = processSwagger(swaggerDoc);

const code = getCode({
  swagger,
  template,
  imports: {...},
  customParams: {...},
});

fs.writeFileSync('./app.js', code);
```

## Example

Run example with the command `node example.js`

## Options
`processSwagger(...)` accepts one argument: a swagger document parsed into a JSON object. You can do this

`getCode({...})` accepts the following parameters:

```yaml
  swagger:
    type: object
    required: true
    description: swagger object
  template:
    type: object
    required: true
    description: a .mustache template
  imports:
    type: array
    required: false
    description: optional data structure for node.js module imports
  customParams:
    type: object
    required: false
    description: optional variables to add to the object passed to mustache
```

### Template Variables
The following data are passed to the [mustache templates](https://github.com/janl/mustache.js):

```yaml
moduleName:
  type: string
  description: Your AngularJS module name - provided by your options field
domain:
  type: string
  description: If all options defined: swagger.schemes[0] + '://' + swagger.host + swagger.basePath
securityDefinitions:
  type: array
  items:
    type: object
    properties:
      name:
        type: string
      type:
        type: string
      authorizationUrl:
        type: string
      flow:
        type: string
      scopes:
        type: object
definitions:
  type: array
  items:
    type: object
    properties:
      name:
        type: string
      type:
        type: string
      properties:
        type: object
operations:
  type: array
  items:
    type: object
    properties:
      summary:
        type: string
      description:
        type: string
      operationId:
        type: string
      path:
        type: string
      method:
        type: string
      tags:
        type: array
        items:
          type: string
      consumes:
        type: array
        items:
          type: string
      produces:
        type: array
        items:
          type: string
      parameters:
        type: array
        items:
          type: object
          properties:
            in:
              type: string
            name:
              type: string
            description:
              type: string
            required:
              type: boolean
            schema:
              type: object
                $ref:
                  type: string
        responses:
          type: object
        security:
          type: array
          items:
            type: object
```

#### Custom Mustache Parameters
You can also pass in your own parameters for the mustache templates by adding a `customParams` object:

```javascript
var source = codegen.getCode({
    ...
    customParams: {
      foo: 'bar',
      app_build_id: env.BUILD_ID,
      app_version: pkg.version
    }
});
```

