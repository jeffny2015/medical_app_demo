import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum UserType {
  Patient = 'patient',
  Doctor = 'doctor'
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({
    type: 'varchar',
    enum: UserType,
    default: UserType.Patient
  })
  type: UserType;
} 