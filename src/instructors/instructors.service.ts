import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateInstructorDto } from './dto/create-instructor.dto';
import { UpdateInstructorDto } from './dto/update-instructor.dto';
import { Instructor } from './entities/instructor.entity';
import { InstructorsRepository } from './instructors.repository';

@Injectable()
export class InstructorsService {
  /**
   *
   */
  constructor(
    @InjectRepository(InstructorsRepository)
    private instructorRepository: InstructorsRepository,
  ) {}
  create(createInstructorDto: CreateInstructorDto) {
    return 'This action adds a new instructor';
  }

  findAll(): Promise<Instructor[]> {
    return this.instructorRepository.getInstructors();
  }

  findOne(id: number) {
    return `This action returns a #${id} instructor`;
  }

  update(id: number, updateInstructorDto: UpdateInstructorDto) {
    return `This action updates a #${id} instructor`;
  }

  remove(id: number) {
    return `This action removes a #${id} instructor`;
  }
}
