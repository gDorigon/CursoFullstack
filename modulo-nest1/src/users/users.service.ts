import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async findOne(id: number) {
    const user = await this.prisma.user.findFirst({
      where: {
        id: id,
      }
    })

    if (user) return user;

    throw new HttpException('Usuário não encontrado!', HttpStatus.BAD_REQUEST)

  }

}
