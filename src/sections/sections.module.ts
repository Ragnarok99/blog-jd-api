import { Module } from '@nestjs/common';
import { SectionsService } from './sections.service';
import { SectionsController } from './sections.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SectionsRepository } from './sections.repository';

@Module({
  controllers: [SectionsController],
  providers: [SectionsService],
  imports: [TypeOrmModule.forFeature([SectionsRepository])],
})
export class SectionsModule {}
