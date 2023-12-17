export interface Task {
    id:number;
    description: string;
    isFinish: boolean | string;
    imageUrl?: string;
}