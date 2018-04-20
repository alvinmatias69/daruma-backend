/* booking.lib.ts
 * Helper library for booking object
 */
import { getModel, Booking } from '../entity';

const insertBooking = async (booking: Booking) => {
  const bookingRepository = await getModel('Booking');

  try {
    await bookingRepository 
      .createQueryBuilder('booking')
      .insert()
      .into(Booking)
      .values([ booking ])
      .execute();

    return true;
  } catch (e) {
    return false;
  }
};

export {
  insertBooking
};

// src/lib/booking.lib.ts
