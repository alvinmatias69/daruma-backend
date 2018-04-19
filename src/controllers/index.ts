/* index.ts
 * Manage controller to be used by router
 */

// import controller
import { HospitalController } from './hospital.controller';
import { RoomClassController } from './room_class.controller'; 

// export with preferable routes name as key
export default {
  hospital: HospitalController,
  room_class: RoomClassController,
};

// src/controllers/index.ts
