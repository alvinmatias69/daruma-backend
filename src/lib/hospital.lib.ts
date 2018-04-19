/* hospital.lib.ts
 * library helper for hospital route
 */

import { getModel, Booking } from '../entity';

const getHospitalList = async () => {
  const hospitalRepository = await getModel('Hospital');

  const hospitalList = await hospitalRepository
    .createQueryBuilder('hospital')
    .select([
      'hospital.id id',
      'hospital.name name',
      'hospital.address address',
      'hospital.phone phone',
      'hospital.coordinate_long longitude',
      'hospital.coordinate_lat latitude',
      'room_class.id class_id',
      'room_class.name type',
      'room.price price',
      'room.capacity capacity',
      'COALESCE(booking.total, 0) occupied'
    ])
    .innerJoin('room', 'room', 'room.hospital_id = hospital.id')
    .innerJoin('room_class', 'room_class', 'room.class_id = room_class.id')
    .leftJoin(
      booking => booking
        .select([
          'COUNT(id) total',
          'hospital_id',
          'room_class_id'
        ])
        .from(Booking, 'booking')
        .where('booking.is_active')
        .groupBy('booking.hospital_id')
        .addGroupBy('booking.room_class_id'),
      'booking',
      'booking.hospital_id = hospital.id AND booking.room_class_id = room_class.id')
    .getRawMany();

  return hospitalList;
};


const groupClassByHospital = hospitalList => {
  let groupedRoom = {};

  hospitalList.forEach(hospital => {
    if (!(hospital.id in groupedRoom)) {
      groupedRoom[hospital.id] = [];
    }

    groupedRoom[hospital.id].push({
      id: hospital.class_id,
      name: hospital.type,
      price: hospital.price,
      available_count: hospital.capacity - hospital.occupied
    });
  });

  return groupedRoom;
};


const groupHospital = hospitalList => {
  let hospitalIdList = [];
  let groupedHospital = [];

  hospitalList.forEach(hospital => {
    if (hospitalIdList.indexOf(hospital.id) < 0) {

      hospitalIdList.push(hospital.id);
      groupedHospital.push({
        id: hospital.id,
        name: hospital.name,
        address: hospital.address,
        phone: hospital.phone,
        longitude: hospital.longitude,
        latitude: hospital.latitude
      });

    };
  });

  return groupedHospital;
};


const getMinimalList = (groupedHospital, groupedRoom) => {
  const hospitalList = groupedHospital
    .map(hospital => ({
      id: hospital.id,
      name: hospital.name,
      address: hospital.address,
      phone: hospital.phone,
      longitude: hospital.longitude,
      latitude: hospital.latitude,
      available_class: groupedRoom[hospital.id].map(room => room.id),
      min_price: groupedRoom[hospital.id]
        .map(room => room.price)
        .reduce((min, current) => min > current ? current : min),
      max_price: groupedRoom[hospital.id]
        .map(room => room.price)
        .reduce((max, current) => max < current ? current : max),
      rooms: []
    }));

  return hospitalList;
};


const getFullList = (groupedHospital, groupedRoom) => {
  const hospitalList = getMinimalList(groupedHospital, groupedRoom)
    .map(hospital => {
      hospital.rooms = groupedRoom[hospital.id];
      return hospital;
    });

  return hospitalList;
};


const evaluateWhere = (hospitalList, where, whereLike) => {
  return hospitalList
    .filter(hospital => {

      if (!where) {
        return true;
      }

      let condition: boolean = true;
      Object.keys(where).forEach(key => {
        if (key in hospital) {
          condition = hospital[key] == where[key]; 
        };
      });
      return condition;

    })
    .filter(hospital => {

      if (!whereLike) {
        return true;
      }

      let condition: boolean = true;
      Object.keys(whereLike).forEach(key => {
        if (key in hospital) {
          condition = String(hospital[key]).includes(whereLike[key]);
        }
      });
      return condition;
    });
};


export {
  getHospitalList,
  groupClassByHospital,
  groupHospital,
  getMinimalList,
  getFullList,
  evaluateWhere
};

// src/lib/hospital.lib.ts
