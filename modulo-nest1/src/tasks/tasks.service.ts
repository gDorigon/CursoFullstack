import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {

   private tasks: Task[] = [
      {
         id: 1,
         name: "seguir o dorigon no yt",
         description: "teste",
         completed: false
      }
   ]


   findAll() {
      return this.tasks
   }

   findOne(id: number) {
      const task = this.tasks.find(task => task.id === id)

      if (task) return task;

      //throw new HttpException("Essa tarefa não existe.", HttpStatus.NOT_FOUND)

      throw new NotFoundException("Esta tarefa não existe")

   }

   create(createTaskDto: CreateTaskDto) {

      const newId = this.tasks.length + 1

      const newTask = {
         id: newId,
         ...createTaskDto,
         completed: false
      }

      this.tasks.push(newTask)


      return newTask
   }


   update(id: number, updateTaskDto: UpdateTaskDto) {
      const taskIndex = this.tasks.findIndex(task => task.id === Number(id))

      if (taskIndex < 0) {
         throw new NotFoundException("Esta tarefa não existe")
      }

      const taskItem = this.tasks[taskIndex]

      this.tasks[taskIndex] = {
         ...taskItem,
         ...updateTaskDto,
      }


      return this.tasks[taskIndex]
   }

   delete(id: number) {
      const taskIndex = this.tasks.findIndex(task => task.id === Number(id))

      if (taskIndex < 0) {
         throw new NotFoundException("Esta tarefa não existe")
      }

      this.tasks.splice(taskIndex, 1)
      return {
         message: "Tarefa excluida com sucesso"
      }
   }

}
