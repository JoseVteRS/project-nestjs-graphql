import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './entity/todo.entity';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    {
      id: 1,
      description: 'Hola mundo',
      done: false,
    },
    {
      id: 2,
      description: 'Comprar pan',
      done: true,
    },
    {
      id: 3,
      description: 'Estudiar',
      done: true,
    },
    {
      id: 4,
      description: 'Comprar regalos',
      done: true,
    },
  ];

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number): Todo {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) throw new NotFoundException('Todo not found');
    return todo;
  }
}
