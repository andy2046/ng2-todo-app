import { Component, Input } from '@angular/core';
import {Card} from '../interface/card.interface';

@Component({
    selector: 'card-list',
    template: `<div [ngClass]="'list'"> <h1><span [innerText]="listTitle"></span></h1> <card-cmp *ngFor="let card of cards" [id]="card.id" [cardTitle]="card.title" [description]="card.description" [color]="card.color" [tasks]="card.tasks" > </card-cmp> </div>`
})

export class ListComponent {
		@Input() id: string;
		@Input() listTitle: string;
		@Input() cards: Array<Card> ;
		

}