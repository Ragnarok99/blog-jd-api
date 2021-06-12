import { EntityRepository, Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';

import { CreateUserDto } from './dto/create-user.dto';

import { User } from './entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const encryptedPassword = await bcrypt.hash(createUserDto.password, 8);

    const user = User.create({ ...createUserDto, password: encryptedPassword });
    await user.save();

    return user;
  }

  async validate(username: string, password: string) {
    const user = await User.findOne({ username });
    if (!user) return null;

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) return null;

    return user;
  }

  async getById(userId: string) {
    const user = await User.findOne({ id: userId });
    return user;
  }
}
