import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { LessonsModule } from './lessons/lessons.module';
import { SectionsModule } from './sections/sections.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    LessonsModule,
    SectionsModule,
  ],
})
export class AppModule {}
