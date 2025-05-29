import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

  listAllTasks(){
    return [
      { id: 1, task: "Comprar Pão" }
    ]
  }

  findOneTask(){
    return "Tarefa Matheus Teste..."
  }

}
