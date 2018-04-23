/* room.lib.ts
 * Room Library
 */
import { getModel, Room } from '../entity';

const getRoomPrice = async (class_id: number, hospital_id: number) => {
  const roomRepository = await getModel('Room');

  const room = await roomRepository
    .createQueryBuilder('room')
    .select('room.price price')
    .where('room.class_id = :class_id', { class_id })
    .andWhere('room.hospital_id = :hospital_id', { hospital_id })
    .getRawOne();

  return room.price;
};

export {
  getRoomPrice,
};
// src/lib/room.lib.ts
