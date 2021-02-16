import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ToDosController } from './todos.controller';
import { ToDosService } from './todos.service';
import { ToDo, ToDoSchema } from './schemas/todo.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: ToDo.name, schema: ToDoSchema }])],
  controllers: [ToDosController],
  providers: [ToDosService],
})
export class ToDosModule {}
