/* patient.lib.ts
 * Library helper for patient object
 */
import { getModel, Patient } from '../entity';

const getPatient = async (field) => {
  const patientRepository = await getModel('Patient');

  const key = Object.keys(field)[0];

  const patient = await patientRepository
    .createQueryBuilder('patient')
    .where(`patient.${key} = '${field[key]}'`)
    .getOne();

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
