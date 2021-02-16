import { Body, Controller, Get, Post } from '@nestjs/common';
import { ToDosService } from './todos.service';
import { CreateToDoDto } from './dto/create-todo.dto';
import { ToDo } from './schemas/todo.schema';

@Controller('todos')
export class ToDosController {
  constructor(private readonly todosService: ToDosService) { }

  @Post()
  async create(@Body() createToDoDto: CreateToDoDto) {
    await this.todosService.create(createToDoDto);
  }

  @Get()
  async findAll(): Promise<ToDo[]> {
    return this.todosService.findAll();
  }
}
