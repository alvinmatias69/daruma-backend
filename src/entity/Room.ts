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

@Entity()
export class Room {
  @PrimaryColumn()
  class_id: number;

  @PrimaryColumn()
  hospital_id: number;

  @Column()
  price: number;

  @Column()
  capacity: number;
};

// src/entity/Room.ts
