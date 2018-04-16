/* routes.ts
 * Define project routes
 */

import { Application } from 'express';

import Controllers from './controllers';

const init = (app: Application): void => {
  for (let routeName in Controllers) {
    app.use(`/${routeName}`, Controllers[routeName]);
  };
};

export { init };

// src/route.ts
