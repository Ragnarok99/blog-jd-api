import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { typeOrmConfig } from './config/typeorm.config';
import { LessonsModule } from './lessons/lessons.module';
import { SectionsModule } from './sections/sections.module';
import { CoursesModule } from './courses/courses.module';
import { CategoriesModule } from './categories/categories.module';
import { DatabaseConfig } from './config/database.config';
import { InstructorsModule } from './instructors/instructors.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [typeOrmConfig],
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV === 'development' ? '.development.env' : '.env',
    }),
    LessonsModule,
    SectionsModule,
    CoursesModule,
    CategoriesModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
    }),
    InstructorsModule,
  ],
})
export class AppModule {}
