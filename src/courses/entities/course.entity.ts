import { Category } from 'src/categories/entities/category.entity';

import { Section } from 'src/sections/entities/section.entity';
import { User } from 'src/users/entities/user.entity';
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

  @OneToMany(() => Section, (section) => section.course)
  sections: Section[];

  @ManyToOne((_) => Category, (category) => category.courses)
  category: Category;

  @Column()
  categoryId: number;

  @Column()
  slug: string;

  @ManyToOne(() => User, (user) => user.courses)
  user: User;
}
