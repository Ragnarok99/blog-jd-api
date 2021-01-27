import { Section } from 'src/sections/entities/section.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Lesson extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  url: string;

  @Column()
  order: number;

  @ManyToOne((type) => Section, (section) => section.lessons, { eager: false })
  section: Section;

  constructor(params) {
    const { title, url, order } = params || {};
    super();
    this.title = title;
    this.url = url;
    this.order = order;
  }
}
