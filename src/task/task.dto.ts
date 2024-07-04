export class TaskDto {
    id: string;
    description: string;
    title: string;
    status: string;
    experatioDate: Date;
}

// modulo para manipular dados 

export interface findAllParameters {
    status: string;
    title: string;

}