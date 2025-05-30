import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
   constructor(private readonly taskService: TasksService) { }

   @Get()
   findAllTasks() {
      return this.taskService.findAll()
   }

   @Get(":id")
   findOneTask(@Param('id', ParseIntPipe) id: number) {
      console.log(id);
      console.log(typeof id)
      return this.taskService.findOne(id);
   }

   @Post("/create")
   createTask(@Body() CreateTaskDto: CreateTaskDto) {
      return this.taskService.create(CreateTaskDto)
   }

   @Patch(":id")
   updateTask(@Param("id", ParseIntPipe) id: number, @Body() updateTaskDto: UpdateTaskDto) {

      return this.taskService.update(id, updateTaskDto)

   }

   @Delete(":id")
   deleteTask(@Param("id", ParseIntPipe) id: number) {
      return this.taskService.delete(id)
   }

}
