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

    async create(createCatDto: CreateToDoDto): Promise<ToDo> {
        const createdCat = new this.todoModel(createCatDto);
        return createdCat.save();
    }

    async findAll(): Promise<ToDo[]> {
        return this.todoModel.find().exec();
    }
}
