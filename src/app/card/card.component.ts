import { Component, Input } from '@angular/core';
import { CardsService } from '../service/cards.service';
import {Task} from '../interface/task.interface';
import {AddTask} from '../interface/addTask.interface';
import {DeleteTask} from '../interface/deleteTask.interface';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'card-cmp',
    template: `<div [ngClass]="'card'"> <div [ngStyle]="sideColor" [style.background-color]="color"></div> <div [ngClass]="'card__edit'"><a title="edit" [routerLink]="[{outlets:{'popup':['edit', id]}}]">&#9998;</a></div> <div [ngClass]="showStyle()" (click)="toggleDetails()"><span [innerText]="title"></span></div> <div [hidden]="!show" [ngClass]="'cssSlideUp card__details'"> <span [innerHTML]="description"></span> <check-list [cardId]="id" [tasks]="tasks" (addTask)="addTask($event)" (deleteTask)="deleteTask($event)" ></check-list> </div> </div>`
})

export class CardComponent {
		@Input() id: string;
		@Input() color: string;
		@Input('cardTitle') title: string;
		@Input() description: string;
		@Input() tasks: Array<Task> ;
		
		show:boolean = false;
		
		private _cardsService: CardsService;
		
		constructor(private cardsService : CardsService){
			this._cardsService = cardsService;
		}

		
		sideColor = {
			'position': 'absolute',
			'zIndex': -1,
			'top': '0px',
			'bottom': '0px',
			'left': '0px',
			'width': '7px',
			'background-color': this.color
		};
		
		toggleDetails():void {
			this.show = !this.show;
		}
		
		showStyle():string {
			return this.show ? "card__title card__title--is-open" : "card__title";
		}
		
		addTask(e:AddTask):void {
			this._cardsService.addTask(e);
		}
		
		deleteTask(e:DeleteTask):void {
			this._cardsService.deleteTask(e);
		}

}