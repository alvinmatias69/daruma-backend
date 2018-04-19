/* Patient.ts
 * An entity model for patient object
 */

import {
  Entity,
  Column,
  PrimaryColumn
} from 'typeorm';

@Entity()
export class Patient {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column('text')
  address: string;

  @Column()
  is_registered: boolean;
};

// src/entity/Patient.ts
