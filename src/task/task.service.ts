    import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
    import { TaskDto, findAllParameters } from './task.dto';

    @Injectable()
    export class TaskService {

        private tasks: TaskDto[] = [];
        create(task: TaskDto) {
        this.tasks.push(task);
        console.log(this.tasks)
    }

    findById(id: string): TaskDto {
        const foundTask = this.tasks.filter(t => t.id === id); // verifica se o id passado é igual ao id do array

        if (foundTask.length > 0) {
        return foundTask[0];
    
        }

        throw new NotFoundException('Task not found');
    }

    findAll(params: findAllParameters): TaskDto[] { // logica para filtrar as tasks de acordo com os parametros passados
        return this.tasks.filter(t => {
            if (params.status && params.title) {
                return t.status === params.status && t.title === params.title;
            }
            if (params.status) {
                return t.status === params.status;
            }
            if (params.title) {
                return t.title === params.title;
            }
            return true;
        });
    }
        
    update(task: TaskDto) {
        
        let taskIndex = this.tasks.findIndex(t => t.id === task.id);

        if (taskIndex !== -1) {
            this.tasks[taskIndex] = task;
            return;
        }

        throw new HttpException(`Task with id ${task.id} not found`,HttpStatus.BAD_REQUEST);
        }   


        delete(id: string) {
            let taskIndex = this.tasks.findIndex(t => t.id === id);
            if (taskIndex >= 0) {
                this.tasks.splice(taskIndex, 1);
                return;
            }
            throw new HttpException(`Task with id ${id} not found`, HttpStatus.BAD_REQUEST);
        
    }
    
}