/* room_class.lib.ts
 * Library helper for room_class controller
 */

import { getModel } from '../entity';

const getAll = async () => {
  const RoomClassRepository = await getModel('RoomClass');

  const RoomClassList = await RoomClassRepository
    .createQueryBuilder('room_class')
    .select([
      'room_class.id id',
      'room_class.name name'
    ])
    .getRawMany();

  return RoomClassList;
};

export {
  getAll
};

// src/lib/room_class.lib.ts
