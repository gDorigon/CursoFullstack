/*
DTO -> Data transfer object ( Objeto de transferencia de dados)

> Validar ou transformar dados

> Se usa para representar quais dados e em que formatos de uma determinada cama a aceita e trabalha
*/

import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateTaskDto {

   @IsString({ message: "O nome precisa ser um texto e maior que 4 caracteres" })
   @MinLength(4, { message: "O nome precisa ser um texto e maior que 4 caracteres" })
   @IsNotEmpty({ message: "O nome não pode ser algo vazio" })
   readonly name: string;

   @IsString({ message: "O nome precisa ser um texto e maior que 4 caracteres" })
   @MaxLength(20, { message: "O nome precisa ser um texto e maior que 4 caracteres" })
   @IsNotEmpty({ message: "O nome não pode ser algo vazio" })
   readonly description: string;
}