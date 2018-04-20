/* patient.lib.ts
 * Library helper for patient object
 */
import { getModel, Patient } from '../entity';

const getPatient = async (field) => {
  const patientRepository = await getModel('Patient');

  const key = Object.keys(field)[0];

  const patient = await patientRepository
    .createQueryBuilder('patient')
    .select([
      'patient.id id',
      'patient.name name',
      'patient.address address',
      'patient.phone phone',
      'patient.password password',
      'patient.email email',
    ])
    .where(`patient.${key} = '${field[key]}'`)
    .getRawOne();

  return patient;
};


const insertPatient = async (patient: Patient) => {
  const patientRepository = await getModel('Patient');

  try {
    await patientRepository
      .createQueryBuilder('patient')
      .insert()
      .into(Patient)
      .values([ patient ])
      .execute();

    return true;
  } catch (e) {
    return false;
  };
};


const updatePatient = async (patient: Patient) => {
  const patientRepository = await getModel('Patient');

  try {
    await patientRepository
      .createQueryBuilder('patient')
      .update(Patient)
      .set(patient)
      .where('id = :id', { id: patient.id })
      .execute();

    return true;
  } catch (e) {
    return false;
  };
};

export {
  getPatient,
  insertPatient,
  updatePatient,
};
// src/lib/patient.lib.ts
