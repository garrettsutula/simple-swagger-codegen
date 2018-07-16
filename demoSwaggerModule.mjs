import demo from './demo';

const outputPath = './dist/api/controllers/pet.mjs';

const imports = [
  { name: 'util', path: 'util' },
  { name: 'db', path: '../lib/db' },
];

demo('./templates/swaggerModule.mustache', outputPath, imports);
