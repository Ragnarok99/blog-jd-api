import { EntityRepository, Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { GetCoursesParamsDto } from './dto/get-courses-params.dto';
import { Course } from './entities/course.entity';

@EntityRepository(Course)
export class CoursesRepository extends Repository<Course> {
  async createCourse(createCourseDto: CreateCourseDto): Promise<Course> {
    const course = new Course(createCourseDto);
    await course.save();

    return course;
  }

  async getCourses(
    getCoursesParamsDto: GetCoursesParamsDto,
  ): Promise<[Course[], number]> {
    const { skip = 0, limit = 0 } = getCoursesParamsDto;
    console.log({ limit });
    const query = this.createQueryBuilder('course');

    query.take(limit);
    query.skip(skip);

    return await query.getManyAndCount();
  }
}
