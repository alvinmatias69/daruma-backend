/* Room.ts
 * An entity model for room object
 */

import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  PrimaryColumn
} from 'typeorm';

import { Patient } from './Patient';
import { Hospital } from './Hospital';

@Entity()
export class Room {
  @OneToOne(type => Patient)
  @JoinColumn()
  @PrimaryColumn()
  patient: Patient;

  @OneToOne(type => Hospital)
  @JoinColumn()
  @PrimaryColumn()
  hospital: Hospital;

  @Column()
  price: number;

  @Column()
  capacity: number;
}:

// src/entity/Room.ts
