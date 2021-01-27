import { Lesson } from 'src/lessons/entities/lesson.entity';
import {
  Entity,
  BaseEntity,
  Column,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Section extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  order: number;

  @OneToMany((type) => Lesson, (lesson) => lesson.section, { eager: true })
  lessons: Lesson[];
}
