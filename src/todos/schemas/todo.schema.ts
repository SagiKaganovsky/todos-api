import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ToDoDocument = ToDo & Document;

@Schema()
export class ToDo {
  @Prop()
  title: string;

  @Prop()
  createdDate: Date;

  @Prop()
  modifiedDate: Date;

  @Prop()
  done: boolean;
}

export const ToDoSchema = SchemaFactory.createForClass(ToDo);
