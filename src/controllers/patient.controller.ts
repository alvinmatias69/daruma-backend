/* patient.controller.ts
 * Route controller for patient object
 */
import {
  Request,
  Response,
  Router
} from 'express';

import * as bcrypt from 'bcrypt';

import { RequestLib, PatientLib } from '../lib';
import { Patient } from '../entity';

const router: Router = Router();

router.post('/', async (req: Request, res: Response) => {
  const requiredKey: string[] = [
    'id',
    'name',
    'email',
    'password',
    'phone',
    'address'
  ];

  const { body } = req;
  const validity: [boolean, string[]] = RequestLib.validate(body, requiredKey);

  if (!validity[0]) {
    return res.status(400).json({ error: `Fields ${validity[1].join(', ')} are required` });
  };

  let checkPatient = await PatientLib.getPatient({ email: body.email });

  if (!!checkPatient) {
    return res.status(409).json({ error: "email already existed" });
  };

  const saltRounds: number = 10;

  let patient: Patient = new Patient(
    body.id,
    body.name,
    body.phone,
    body.address
  );
  patient.email = body.email;
  patient.is_registered = true;
  patient.password = bcrypt.hashSync(body.password, saltRounds);

  checkPatient = await PatientLib.getPatient({ id: patient.id });

  let createStatus: boolean;

  if (!!checkPatient) {
    createStatus = await PatientLib.updatePatient(patient);
  } else {
    createStatus = await PatientLib.insertPatient(patient);
  }

  res.json({ success: createStatus });
});


router.post('/login', async (req: Request, res: Response) => {
  const requiredKey: string[] = [
    'email',
    'password'
  ];

  const { body } = req;
  const validity: [boolean, string[]] = RequestLib.validate(body, requiredKey);

  if (!validity[0]) {
    return res.status(400).json({ error: `Fields ${validity[1].join(', ')} are required` });
  };

  const patient = await PatientLib.getPatient({ email: body.email });

  if (!patient) {
    return res.status(401).json({ error: 'Email is not recognized' });
  }

  if (bcrypt.compareSync(body.password, patient.password)) {
    return res.json({
      id: patient.id,
      name: patient.name,
      email: patient.email,
      address: patient.address,
      phone: patient.phone
    });
  } else {
    return res.status(401).json({ error: 'Wrong password' });
  };
});

export const PatientController: Router = router;

// src/controllers/patient.controller.ts
