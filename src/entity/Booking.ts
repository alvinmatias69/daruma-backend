/* Booking.ts
 * An entity model for booking transactional table object
 */

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn
} from 'typeorm';

import { Patient } from './Patient';
import { Hospital } from './Hospital';
import { RoomClass } from './RoomClass';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  booking_date: string;

  @Column()
  is_success: boolean;

  @Column()
  is_active: boolean;

  @Column()
  is_processing: boolean;

  @Column()
  hospital_id: number;

  @Column()
  room_class_id: number;

  @Column()
  patient_id: string;

  constructor(booking_date: string,
    hospital_id: number,
    room_class_id: number,
    patient_id: string) {

    this.booking_date = booking_date;
    this.hospital_id = hospital_id;
    this.room_class_id = room_class_id;
    this.patient_id = patient_id;

  };
};

// src/entity/Booking.ts
