import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { typeOrmConfig } from './config/typeorm.config';
import { LessonsModule } from './lessons/lessons.module';
import { SectionsModule } from './sections/sections.module';
import { CoursesModule } from './courses/courses.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    LessonsModule,
    SectionsModule,
    CoursesModule,
    CategoriesModule,
    ConfigModule.forRoot(),
  ],
})
export class AppModule {}
