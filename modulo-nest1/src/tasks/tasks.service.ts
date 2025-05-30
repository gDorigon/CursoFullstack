import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './entities/task.entity';

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

   findOne(id: string) {
      const task = this.tasks.find(task => task.id === Number(id))

      if (task) return task;

      //throw new HttpException("Essa tarefa não existe.", HttpStatus.NOT_FOUND)

      throw new NotFoundException("Esta tarefa não existe")

   }

   create(body: any) {

      const newId = this.tasks.length + 1

      const newTask = {
         id: newId,
         ...body
      }

      this.tasks.push(newTask)


      return newTask
   }


   update(id: string, body: any) {
      const taskIndex = this.tasks.findIndex(task => task.id === Number(id))

      if (taskIndex < 0) {
         throw new NotFoundException("Esta tarefa não existe")
      }

      const taskItem = this.tasks[taskIndex]

      this.tasks[taskIndex] = {
         ...taskItem,
         ...body,
      }


      return this.tasks[taskIndex]
   }

   delete(id: string) {
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
