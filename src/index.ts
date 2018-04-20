/* index.ts
 * Main logic for application
 * WIP: manage middleware
 */

import 'reflect-metadata';
import * as express from 'express';
import * as routes from './routes';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as compression from 'compression';
import * as helmet from 'helmet';

dotenv.config();

const app: express.Application = express();
const port: number = Number(process.env.PORT) || 3000;
const host: string = process.env.HOST || 'localhost';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.use(helmet());

routes.init(app);

app.listen(port, host, () => {
  console.log(`Listening on ${host}:${port}`);
});

// src/index.ts
