import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
   constructor(private readonly taskService: TasksService) { }

   @Get()
   findAllTasks() {
      return this.taskService.findAll()
   }

   @Get(":id")
   findOneTask(@Param('id') id: string) {
      console.log(id);
      return this.taskService.findOne(id);
   }

   @Post("/create")
   createTask(@Body() body: any) {
      return this.taskService.create(body)
   }

   @Patch(":id")
   updateTask(@Param("id") id: string, @Body() body: any) {

      return this.taskService.update(id, body)

   }

   @Delete(":id")
   deleteTask(@Param("id") id: string) {
      return this.taskService.delete(id)
   }

}
