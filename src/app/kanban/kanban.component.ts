import { Component, Input, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { CardsService } from '../service/cards.service';
import {Card} from '../interface/card.interface';
import {ActivatedRoute} from '@angular/router';
import {Observer} from "rxjs/Observer";
import {Observable} from "rxjs/Observable";
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'kanban',
    template: `<div [ngClass]="'app'"> <a title="new" [routerLink]="[{outlets:{'popup':['new']}}]" [ngClass]="'float-button'" >+</a> <card-list [id]="'todo'" [listTitle]="'To Do'" [cards]="todoCards" ></card-list> <card-list [id]="'in-progress'" [listTitle]="'In Progress'" [cards]="inprogressCards" ></card-list> <card-list [id]="'done'" [listTitle]="'Done'" [cards]="doneCards" ></card-list> </div>`
})

export class KanbanComponent implements OnInit, OnDestroy {
	
	cardsAll:Card[] = [];
	todoCards:Array<Card> = [];
	inprogressCards:Array<Card> = [];
	doneCards:Array<Card> = [];
	subscription: Subscription;
	
	cardsFilter(stat:string):Array<Card> {
		
		return this.cardsAll.filter((card) => card.status == stat);
		
		}; 
	
	private _cardsService: CardsService;
	
	constructor(private cardsService : CardsService){
			this._cardsService = cardsService;
			
	}
	
	ngOnInit() {
        // we will initialize our model here
			this.subscription = this._cardsService.getCards().subscribe(data => {
				this.cardsAll = data;
				this.todoCards = this.cardsFilter("todo");
				this.inprogressCards = this.cardsFilter("in-progress");
				this.doneCards = this.cardsFilter("done");
			});
    }
	
	ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
	
}