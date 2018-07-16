import demo from './demo';

const outputPath = './dist/api/controllers/main.mjs';

const imports = [
  { name: 'fs', path: 'fs' },
  { name: 'util', path: 'util' },
];

demo('./templates/swaggerController.mustache', outputPath, imports);
