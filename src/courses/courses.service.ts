import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CoursesRepository } from './courses.repository';
import { CreateCourseDto } from './dto/create-course.dto';
import { GetCoursesParamsDto } from './dto/get-courses-params.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  /**
   *
   */
  constructor(
    @InjectRepository(CoursesRepository)
    private coursesRepository: CoursesRepository,
  ) {}
  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    return this.coursesRepository.createCourse(createCourseDto);
  }

  async findAll(getCoursesParamsDto: GetCoursesParamsDto): Promise<Course[]> {
    return await this.coursesRepository.getCourses(getCoursesParamsDto);
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
