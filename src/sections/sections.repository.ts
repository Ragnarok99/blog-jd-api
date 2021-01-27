import { EntityRepository, Repository } from 'typeorm';
import { CreateSectionDto } from './dto/create-section.dto';
import { Section } from './entities/section.entity';

@EntityRepository(Section)
export class SectionsRepository extends Repository<Section> {
  async createSection(createSectionDto: CreateSectionDto): Promise<Section> {
    const section = new Section(createSectionDto);

    await section.save();

    return section;
  }
}
