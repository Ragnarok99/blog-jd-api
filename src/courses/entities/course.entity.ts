import { Section } from 'src/sections/entities/section.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Course extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  rate: number;

  @Column()
  author: string;

  @Column()
  imageUrl: string;

  @OneToMany(() => Section, (section) => section.course, { eager: true })
  sections: Section[];

  /**
   *
   */
  constructor(params) {
    super();

    const { title, description, rate, author, imageUrl } = params || {};
    this.title = title;
    this.description = description;
    this.rate = rate;
    this.author = author;
    this.imageUrl = imageUrl;
  }
}
