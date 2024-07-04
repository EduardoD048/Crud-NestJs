import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

// tudo que não é controller é provider

// modulo necessario do nest, por que ele é modular
@Module({
    controllers: [TaskController],
    providers: [TaskService], // criação modular do nest
})
export class TaskModule {}
