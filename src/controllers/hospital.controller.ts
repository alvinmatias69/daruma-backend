/* hospital.controller.ts
 * Controller for hospital object
 */
import {
  Router,
  Response,
  Request
} from 'express';

import { HospitalLib } from '../lib';

const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
  const { format='minimal', where='{}', whereLike='{}', limit=30, skip=0 } = req.query;

  const hospitalList = await HospitalLib.getHospitalList();
  const groupedRoom = HospitalLib.groupClassByHospital(hospitalList);
  const groupedHospital = HospitalLib.groupHospital(hospitalList);

  let responseList = format === 'full'
    ? HospitalLib.getFullList(groupedHospital, groupedRoom)
    : HospitalLib.getMinimalList(groupedHospital, groupedRoom);

  responseList = responseList.slice(skip, skip+limit);

  try {

    responseList = HospitalLib.evaluateWhere(
      responseList,
      JSON.parse(where),
      JSON.parse(whereLike));

    res.json(responseList);
    
  } catch (e) {
    res.status(400).send('Invalid where or whereLike queries');
  }
});

export const HospitalController: Router = router;

// src/controllers/hospital.controller.ts
