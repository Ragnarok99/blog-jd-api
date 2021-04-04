import { Category } from 'src/categories/entities/category.entity';
import { Section } from 'src/sections/entities/section.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
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

  @ManyToOne((_) => Category, (category) => category.courses)
  category: Category;

  @Column()
  categoryId: number;

  /**
   *
   */
  constructor(params) {
    super();

    const { title, description, rate, author, imageUrl, categoryId } =
      params || {};
    this.title = title;
    this.description = description;
    this.rate = rate;
    this.author = author;
    this.imageUrl = imageUrl;
    this.categoryId = categoryId;
  }
}
