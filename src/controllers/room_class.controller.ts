/* room_class.controller.ts
 * Routes controller for room_class object
 */

import {
  Request,
  Response,
  Router
} from 'express';

import { RoomClassLib } from '../lib';

const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
  const RoomClassList = await RoomClassLib.getAll();

  res.json(RoomClassList);
});

export const RoomClassController: Router = router;

// src/controllers/room_class.controller.ts
