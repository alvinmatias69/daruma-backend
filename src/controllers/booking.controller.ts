/* booking.controller.ts
 * Route controller for booking object
 */

import {
  Router,
  Response,
  Request
} from 'express';

import { RequestLib, PatientLib, BookingLib } from '../lib';
import { Patient, Booking } from '../entity';

const router: Router = Router();

router.post('/', async (req: Request, res: Response) => {
  const requiredKey: string[] = [
    'patient_id',
    'name',
    'phone',
    'address',
    'booking_date',
    'class_id',
    'hospital_id'
  ];

  const { body } = req;
  const validity: [boolean, string[]] = RequestLib.validate(body, requiredKey);

  if (!validity[0]) {
    return res.status(400).json({ error: `Fields ${validity[1].join(', ')} are required` });
  };

  const patient = await PatientLib.getPatient({ id: body.patient_id });

  if (!patient) {
    const newPatient: Patient = new Patient(
      body.patient_id,
      body.name,
      body.phone,
      body.address
    );

    const insertPatientStatus: boolean = await PatientLib.insertPatient(newPatient);

    if (!insertPatientStatus) {
      return res.status(500).json({ error: 'Register users failure' });
    };
  };

  const booking = new Booking(
    body.booking_date,
    body.hospital_id,
    body.class_id,
    body.patient_id
  );

  const bookingStatus: boolean = await BookingLib.insertBooking(booking);

  if (bookingStatus) {
    res.json({ 'success': true });
  } else {
    res.status(500).json({ error: 'Insert booking failure' });
  }

});

export const BookingController: Router = router;
// src/controllers/booking.controller.ts
