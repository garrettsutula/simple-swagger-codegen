import SwaggerExpress from 'swagger-express-mw';
import express from 'express';
import path from 'path';
import swaggerUiDist from 'swagger-ui-dist';

const app = express();
export default app;

const swaggerUi = swaggerUiDist.absolutePath();
app.use(express.static(swaggerUi));

const config = {
  appRoot: path.dirname(), // required config
};

SwaggerExpress.create(config, (err, swaggerExpress) => {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);
  const port = 8080;
  app.listen(port);
});
