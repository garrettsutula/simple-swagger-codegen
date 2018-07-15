# Swagger to Javascript Codegen
Mininmalist Swagger > Javascript codegen, assumes validation, linting and rules enforcement done at swagger definition and/or mustache template. Simple renders a provided mustache template against a swagger swagger definition.

## TODO
- get yaml parsing working again
- reimplement cli
- more mustache template examples
- maybe support typescript in the future (invoke angular cli???)
- add to npm
- add tests

## Installation
Download/clone this repo for now using `curl`, `git` or your favorite github client app.

## Example

Run example with the command `node --experimental-modules demo.js`

```javascript
import fs from 'fs';
import getCode from 'codegen';

let swaggerFile = JSON.parse(fs.readFileSync('./templates/swagger.json', 'utf-8'));
let templateFile = fs.readFileSync('./templates/classGenerator.mustache', 'utf-8');

const code = getCode({
  moduleName: 'Test',
  swagger: swaggerFile,
  template: templateFile,
});
```

## Options
`getCode()` supports the following options:

```yaml
  moduleName:
    type: string
    required: true
    description: module/class name (used for output file name in CLI)
  template:
    type: object
    required: true
    description: a .mustache template
  swagger:
    type: object
    required: true
    description: swagger object
  customParams:
    type: object
    required: false
    description: optional variables to add to the object passed to mustache
```

### Template Variables
The following data are passed to the [mustache templates](https://github.com/janl/mustache.js):

TODO: finish yaml definition here.

```yaml
moduleName:
  type: string
  description: Your AngularJS module name - provided by your options field
domain:
  type: string
  description: If all options defined: swagger.schemes[0] + '://' + swagger.host + swagger.basePath
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
```

#### Custom Mustache Variables
You can also pass in your own variables for the mustache templates by adding a `mustache` object:

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

