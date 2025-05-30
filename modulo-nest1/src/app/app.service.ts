import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Meu primeiro Projeto em NEST JS';
  }
}
