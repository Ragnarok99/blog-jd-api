import { EntityRepository, Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './entities/category.entity';

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {
  async getCategories(): Promise<Category[]> {
    return await Category.find();
  }

  async createCategory(
    createCategoryDTO: CreateCategoryDto,
  ): Promise<Category> {
    const newCategory = new Category();
    newCategory.name = createCategoryDTO.name;

    await newCategory.save();

    return newCategory;
  }
}
