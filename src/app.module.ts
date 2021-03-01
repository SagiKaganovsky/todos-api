import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ToDosModule } from './todos/todos.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://tododb:6EmmghhoccwyUTMc@todocluster.rpdv8.mongodb.net/todos?retryWrites=true&w=majority'),
    ToDosModule,
  ],
})
export class AppModule {}
