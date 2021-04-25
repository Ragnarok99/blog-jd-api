import { Module } from '@nestjs/common';
import { InstructorsService } from './instructors.service';
import { InstructorsController } from './instructors.controller';
import { InstructorsRepository } from './instructors.repository';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [InstructorsController],
  providers: [InstructorsService],
  imports: [TypeOrmModule.forFeature([InstructorsRepository])],
})
export class InstructorsModule {}
