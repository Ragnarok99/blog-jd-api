export class CreateUserDto {
  username: string;
  password: string;
  fullname: string;
  address?: string;
  phone?: string;
  birthday?: Date;
}
