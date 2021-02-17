import { Body, Controller, Get, Post } from '@nestjs/common';
import { ToDosService } from './todos.service';
import { CreateToDoDto } from './dto/create-todo.dto';
import { ToDo } from './schemas/todo.schema';

@Controller('todos')
export class ToDosController {
  constructor(private readonly todosService: ToDosService) { }

  @Post()
  async create(@Body() createToDoDto: CreateToDoDto): Promise<ToDo> {
    return await this.todosService.create(createToDoDto);
  }

  @Get()
  async findAll(): Promise<ToDo[]> {
    return this.todosService.findAll();
  }

  @Post('delete')
  async delete(@Body() createToDoDto: CreateToDoDto): Promise<string> {
    return await this.todosService.delete(createToDoDto);
  }

  @Post('toggleDone')
  async toggleDone(@Body() createToDoDto: CreateToDoDto): Promise<string> {
    return await this.todosService.updateDone(createToDoDto);
  }
}
