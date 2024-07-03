import { Body, Controller , Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { TaskDto, findAllParameters } from './task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {

    constructor(private readonly taskService: TaskService) {
        
    }

    @Post()
    create(@Body() task: TaskDto) {
        this.taskService.create(task);
    }

    @Get('/:id')
    findById(@Param('id') id: string): TaskDto {
        return this.taskService.findById(id);

    }

    @Get()
    findAll(@Query() params: findAllParameters): TaskDto[] {
        return this.taskService.findAll(params);
    }

    @Put()
    update(@Body() task: TaskDto) {
        this.taskService.update(task);
    }


    @Delete('/:id')
    delete(@Param('id') id: string) {
        this.taskService.delete(id);
    }
}