import {Task} from './task.interface';

export interface Card {
  id: string;
  title: string;
  description: string;
  color: string;
  status: string;
  tasks: Task[];
}

