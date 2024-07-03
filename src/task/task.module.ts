import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
    controllers: [TaskController],
    providers: [TaskService], // criação modular do nest
})
export class TaskModule {}
