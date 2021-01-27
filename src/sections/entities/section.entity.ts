import { Course } from 'src/courses/entities/course.entity';
import { Lesson } from 'src/lessons/entities/lesson.entity';
import {
  Entity,
  BaseEntity,
  Column,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Section extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  order: number;

  @OneToMany(() => Lesson, (lesson) => lesson.section, { eager: true })
  lessons: Lesson[];

  @ManyToOne(() => Course, (course) => course.sections, { eager: false })
  course: Course;

  @Column()
  courseId: number;

  /**
   *
   */
  constructor(params) {
    super();

    const { title, order, courseId } = params || {};

    this.title = title;
    this.order = order;
    this.courseId = courseId;
  }
}
