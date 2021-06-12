import { EntityRepository, Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { GetCoursesParamsDto } from './dto/get-courses-params.dto';
import { Course } from './entities/course.entity';

@EntityRepository(Course)
export class CoursesRepository extends Repository<Course> {
  async createCourse(createCourseDto: CreateCourseDto): Promise<Course> {
    const course = Course.create(createCourseDto);
    await course.save();

    return course;
  }

  async getCourses(
    getCoursesParamsDto: GetCoursesParamsDto,
  ): Promise<[Course[], number]> {
    const { skip = 0, limit = 0 } = getCoursesParamsDto;
    const query = await this.findAndCount({
      take: limit,
      skip,
      relations: ['sections', 'category', 'user'],
    });

    return query;
  }
}
