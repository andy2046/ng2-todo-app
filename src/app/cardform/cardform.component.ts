import { Component, Input, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { CardsService } from '../service/cards.service';
import {Card} from '../interface/card.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
    selector: 'cardform',
    templateUrl: 'cardform.html'
})

export class CardformComponent implements OnInit, OnDestroy {
	
	draftCard: Card;
	//@Input('button-label') buttonLabel: string;
	//@Input('card-id') draftCardId: string;
	
	buttonLabel: string;
	editCardId: string;
	
	_router: Router;
	paramsSub: any;
	
	private _cardsService: CardsService;
	
	ngOnInit() {
        // we will initialize our model here
		
    }
	
	ngOnDestroy() {
		this.paramsSub.unsubscribe();
	}
	
	constructor(private cardsService : CardsService, private activatedRoute: ActivatedRoute, router: Router){
			this._cardsService = cardsService;
			this._router = router;
			
			
		this.paramsSub = this.activatedRoute.params.map(params => params['id']).subscribe( (id) => {
		this.editCardId = id;
			
			if (this.editCardId) {
				this.buttonLabel = 'Edit Card';
				this.draftCard = this._cardsService.getCard(this.editCardId);
			} else {
				this.buttonLabel = 'Create Card';
				this.draftCard = {
				id: Date.now()+"",
				title:'',
				description:'',
				status:'todo',
				color:'#c9c9c9',
				tasks:[]
				};
			}
		});
		
		//console.log(this.editCardId);		
						
	}
	
	save(value: any, valid: any) {
		//console.log(value);
		//console.log(valid);
		// pattern="/^\w+( \w+)*$/"
		//console.log(this.draftCard);
		this._cardsService.upsertCards(this.draftCard);
		this._router.navigateByUrl('/');
		
	}
	
	cancel() {
		this._router.navigate(['']);
	}
	
	
}