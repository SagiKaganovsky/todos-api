import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateToDoDto } from './dto/create-todo.dto';
import { ToDo, ToDoDocument } from './schemas/todo.schema';

@Injectable()
export class ToDosService {
    constructor(
        @InjectModel(ToDo.name) private readonly todoModel: Model<ToDoDocument>,
    ) { }

    async create(createToDoDto: CreateToDoDto): Promise<ToDo> {
        const createdToDo = new this.todoModel();
        createdToDo.id = createToDoDto.id;
        createdToDo.title = createToDoDto.title;
        createdToDo.done = createdToDo.done;
        createdToDo.modifiedDate = new Date();
        createdToDo.createdDate = new Date();
        return createdToDo.save();
    }

    async findAll(): Promise<ToDo[]> {
        return this.todoModel.find().exec();
    }
}
