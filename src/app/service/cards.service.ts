import { Injectable } from '@angular/core';
import {Card} from '../interface/card.interface';
import {AddTask} from '../interface/addTask.interface';
import {DeleteTask} from '../interface/deleteTask.interface';
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/Rx";
import {asObservable} from "./asObservable";

@Injectable()
export class CardsService {
	
	CARDS = [ { "id":"1", "title": "Read the Book", "description": "I should read the <strong>whole</strong> book", "color": "#BD8D31", "status": "in-progress", "tasks": [ { "id":"1", "name": "Read table of content", "done": true } ] }, { "id": "3", "title": "Go eating", "description": "I should eat the <strong>whole</strong> BBQ chicken", "color": "#0074D9", "status": "done", "tasks": [ { "id":"1", "name": "just eat", "done": true } ] }, { "id": "2", "title": "Write some code", "description": "Code along with the samples in the book. My source code can be found at <a title='github' href='https://github.com/andy2046'>github</a>", "color": "#3A7E28", "status": "todo", "tasks": [ { "id":"1", "name": "ContactList Example", "done": true }, { "id": "2", "name": "Kanban Example", "done": false }, { "id": "3", "name": "My own experiments", "done": false } ] } ];
	
	private _cards: BehaviorSubject<Card[]> = new BehaviorSubject([]);
	
	
	constructor() {
        this.loadInitialData();
    }
	
	loadInitialData() {
		this._cards.next([...this.CARDS]);
	}
	
	getCards(): Observable<Card[]> { 
		return asObservable(this._cards);
  }
  
  getCard(cardId:string):Card {
	  return this.CARDS.filter(function (Card) {
		  return Card.id == cardId;
		  })[0];
  }
  
  upsertCards(Card:Card):void {
	  let cardIndex = this.CARDS.findIndex((card)=>card.id == Card.id);
	  
	  if(cardIndex == -1) {
		  this.CARDS.push(Card);		  
	  } else {
		  this.CARDS[cardIndex] = Card;		  
	  }
	  
	  //console.log(this.CARDS);
	  this._cards.next([...this.CARDS]);
  }
  
  addTask(e:AddTask):void {
	  //console.log(e);
			let cardIndex = this.CARDS.findIndex((card)=>card.id == e.cardId);
			let newTask = {id:Date.now()+"", name:e.value, done:false};
			this.CARDS[cardIndex].tasks.push(newTask);
			this._cards.next([...this.CARDS]);
		}
		
	deleteTask(e:DeleteTask):void {
		//console.log(e);
			let cardIndex = this.CARDS.findIndex((card)=>card.id == e.cardId);
			this.CARDS[cardIndex].tasks.splice(e.taskIndex,1);
			this._cards.next([...this.CARDS]);
		}
	
}