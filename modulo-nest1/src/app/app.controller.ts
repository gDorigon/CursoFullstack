import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../app/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/teste")
  getTest() {
    return "rota de teste da API"
  }

  @Post("/teste")
  createTest() {
    return "ROTA FUNCIONANDO"
  }
}
