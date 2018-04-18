/* RoomClass.ts
 * Entity model for class room name
 */

import {
  Entity,
  PrimaryColumn,
  Column
} from 'typeorm';

@Entity()
export class RoomClass {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;
};

// src/entity/RoomClass.ts
