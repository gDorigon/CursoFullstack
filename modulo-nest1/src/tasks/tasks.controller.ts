import { Controller, Get, Param, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
   constructor(private readonly taskService: TasksService) { }

   @Get()
   findAllTasks(@Query() queryParam: any) {
      return this.taskService.findAll()
   }

   @Get(":id")
   findOneTask(@Param('id') id: string) {
      console.log(id);
      return this.taskService.findOne(id);
   }

}
