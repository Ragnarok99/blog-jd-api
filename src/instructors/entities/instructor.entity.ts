import { Course } from 'src/courses/entities/course.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Instructor extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  rating: number;

  @Column()
  students: number;

  @OneToMany(() => Course, (course) => course.instructor)
  courses: Course[];
}
