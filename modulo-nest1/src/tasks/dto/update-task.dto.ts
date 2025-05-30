/*
DTO -> Data transfer object ( Objeto de transferencia de dados)

> Validar ou transformar dados

> Se usa para representar quais dados e em que formatos de uma determinada cama a aceita e trabalha
*/

export class UpdateTaskDto {
   readonly name?: string;
   readonly description?: string;
   readonly completed?: boolean;
}