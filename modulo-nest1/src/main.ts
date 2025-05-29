import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';


/*
src/app.module.rs : Modulo principal do aplicativo
src/app.controller: Define as rodas e lida com requisiçoes
src/app.services.ts: Contem a logica do negicio, separado do controlador
*/

// Iniciaiza      
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
