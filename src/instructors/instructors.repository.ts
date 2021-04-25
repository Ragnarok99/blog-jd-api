import { EntityRepository, Repository } from 'typeorm';
import { Instructor } from './entities/instructor.entity';

@EntityRepository(Instructor)
export class InstructorsRepository extends Repository<Instructor> {
  async getInstructors(): Promise<Instructor[]> {
    const instructors = await Instructor.find();

    return instructors;
  }
}
