import { EntityRepository, Repository } from 'typeorm';
import { CreateLessonDto } from './dto/create-lesson.dto';

import { Lesson } from './entities/lesson.entity';

@EntityRepository(Lesson)
export class LessonsRepository extends Repository<Lesson> {
  async createLesson(createLessonDto: CreateLessonDto): Promise<Lesson> {
    const lesson = new Lesson(createLessonDto);

    await lesson.save();

    return lesson;
  }
}
