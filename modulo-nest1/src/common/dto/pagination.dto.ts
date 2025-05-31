import { Type } from "class-transformer";
import { IsIn, IsInt, IsOptional, Max, Min } from "class-validator";

export class PaginationDto {
   @IsOptional()
   @IsInt()
   @Max(50)
   @Min(0)
   @Type(() => Number)
   limit: number;

   @IsOptional()
   @IsInt()
   @Min(0)
   @Type(() => Number)
   offset: number;
}