export class TaskDto {
    id: string;
    description: string;
    title: string;
    status: string;
    experatioDate: Date;
}

export interface findAllParameters {
    status: string;
    title: string;

}