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
    res.status(400).json({ error: 'Invalid where or whereLike queries' });
  }
});


router.get('/count', async (req: Request, res: Response) => {
  const count = await HospitalLib.getHospitalCount();

  res.json(count);
});


router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  const hospitalList = await HospitalLib.getHospitalList(id);
  const groupedRoom = HospitalLib.groupClassByHospital(hospitalList);
  const groupHospital = HospitalLib.groupHospital(hospitalList);

  const response = HospitalLib.getFullList(groupHospital, groupedRoom)[0];

  res.json(response);
});


export const HospitalController: Router = router;

// src/controllers/hospital.controller.ts
