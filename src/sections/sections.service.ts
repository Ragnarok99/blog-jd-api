import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { Section } from './entities/section.entity';
import { SectionsRepository } from './sections.repository';

@Injectable()
export class SectionsService {
  /**
   *
   */
  constructor(
    @InjectRepository(SectionsRepository)
    private sectionRepository: SectionsRepository,
  ) {}
  async create(createSectionDto: CreateSectionDto): Promise<Section> {
    return await this.sectionRepository.createSection(createSectionDto);
  }

  findAll() {
    return `This action returns all sections`;
  }

  findOne(id: number) {
    return `This action returns a #${id} section`;
  }

  update(id: number, updateSectionDto: UpdateSectionDto) {
    return `This action updates a #${id} section`;
  }

  remove(id: number) {
    return `This action removes a #${id} section`;
  }
}
