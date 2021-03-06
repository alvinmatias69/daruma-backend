/* index.ts
 * Manage database model and connection
 */

import {
  createConnection,
  Connection,
  getRepository,
  getConnection,
  DatabaseType
} from 'typeorm';

// import database model
import { RoomClass } from './RoomClass';
import { Hospital } from './Hospital';
import { Patient } from './Patient';
import { Booking } from './Booking';
import { Room } from './Room';

// include database model into entities object
const entities = {
  RoomClass,
  Hospital,
  Patient,
  Booking,
  Room
};

const getModel = async (modelName: string) => {
  let connection: Connection;

  try {
    connection = await getConnection();
  } catch(e) {
    connection = await createConnection({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: Object.keys(entities).map(entity => entities[entity])
    });
  };

  const repository = connection.getRepository(entities[modelName]);
  return repository;
};

export {
  getModel,
  RoomClass,
  Hospital,
  Patient,
  Booking,
  Room
}

// src/entity/index.ts
