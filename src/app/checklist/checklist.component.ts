import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'check-list',
    template: `<div [ngClass]="'checklist'"> <ul> <li [ngClass]="'checklist__task'" *ngFor="let task of tasks; let i = index"> <input type="checkbox" [(ngModel)]="task.done" [checked]="task.done" /> <span [innerText]="task.name" *ngIf="!task.done"></span> <s *ngIf="task.done"><span [innerText]="task.name"></span></s> <a title="remove" href="#" [ngClass]="'checklist__task--remove'" (click)="emitDeleteTask(task.id,i)"> </a> </li> </ul> <input type="text" [ngClass]="'checklist--add-task'" placeholder="Type then hit Enter to add a task" (keyup.enter)="emitAddTask($event)" /></div>`
})

export class ChecklistComponent {
		@Input() cardId: string;
		@Input() tasks: Array<Object> ;
		
		@Output() addTask = new EventEmitter<Object>();
		@Output() deleteTask = new EventEmitter<Object>();
		
		emitAddTask(e:Event):void {
			this.addTask.emit({cardId:this.cardId, value: (<HTMLInputElement>e.target).value});
			(<HTMLInputElement>e.target).value = "";
		}
		
		emitDeleteTask(taskId:string, idx:number):void {
			this.deleteTask.emit({cardId:this.cardId, taskId:taskId, taskIndex:idx});
		}

}