/* room_class.lib.ts
 * Library helper for room_class controller
 */

import { getModel } from '../entity';

const getAll = async () => {
  const RoomClassRepository = await getModel('RoomClass');

  const RoomClassList = await RoomClassRepository
    .createQueryBuilder('room_class')
    .select()
    .getRawMany();

  return RoomClassList;
};

export {
  getAll
};

// src/lib/room_class.lib.ts
