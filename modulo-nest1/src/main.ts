import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';


/*
src/app.module.rs : Modulo principal do aplicativo
src/app.controller: Define as rodas e lida com requisiçoes
src/app.services.ts: Contem a logica do negicio, separado do controlador
*/

// Iniciaiza      
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Se true, ele remove as chaves que não estão no DTO
    transform: false, // se ativo, tenta converter o tipo das variveis
  }))
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
