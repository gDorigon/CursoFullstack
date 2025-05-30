import { IsBoolean, IsOptional } from "class-validator";

import { PartialType } from "@nestjs/mapped-types";
import { CreateTaskDto } from '../dto/create-task.dto'

export class UpdateTaskDto extends PartialType(CreateTaskDto) {

  @IsBoolean()
  @IsOptional()
  readonly completed?: boolean;
}