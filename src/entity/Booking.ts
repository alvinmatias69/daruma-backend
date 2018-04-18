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

  @OneToOne(type => Patient)
  @JoinColumn()
  patient: Patient;

  @OneToOne(type => Hospital)
  @JoinColumn()
  hospital: Hospital;
};

// src/entity/Booking.ts
