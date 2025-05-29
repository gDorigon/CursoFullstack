import { Controller, Get } from '@nestjs/common';
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
    return "rota de teste da APIa"
  }
}
