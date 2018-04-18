/* Hospital.ts
 * An entity model for hospital object
 */

import {
  Entity,
  Column,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
export class Hospital {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text')
  address: string;

  @Column()
  phone: string;

  @Column()
  coordinate_long: string;

  @Column()
  coordinate_lat: string;
}

// src/entity/Hospital.ts
