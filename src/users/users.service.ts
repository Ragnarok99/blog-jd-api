import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}
  create(createuserDto: CreateUserDto) {
    return this.userRepository.createUser(createuserDto);
  }

  async validateUser(username: string, password): Promise<User | undefined> {
    return this.userRepository.validate(username, password);
  }

  async getById(userId: string) {
    return this.userRepository.getById(userId);
  }
}
