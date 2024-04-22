import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user: User = await this.prismaService.user.create({
      data: {
        ...createUserDto,
      },
    });
    return user;
  }

  async findAll(): Promise<User[]> {
    const users: User[] = await this.prismaService.user.findMany();
    return users;
  }

  async findOne(id: number): Promise<User> {
    const user: User = await this.prismaService.user.findFirstOrThrow({
      where: {
        id: id,
      },
    });
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user: User = await this.prismaService.user.update({
      where: { id: id },
      data: {
        ...updateUserDto,
      },
    });
    return user;
  }

  async remove(id: number): Promise<void> {
    await this.prismaService.user.delete({ where: { id: id } });
  }
}
