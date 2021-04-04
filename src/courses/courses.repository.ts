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
  ): Promise<Course[]> {
    // const query = this.createQueryBuilder('course');

    // return await query.getMany();

    return await Course.find();
  }
}
