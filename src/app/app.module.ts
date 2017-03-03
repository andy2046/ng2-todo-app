import { NgModule } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { CardComponent } from './card/card.component';
import { CardformComponent } from './cardform/cardform.component';
import { ListComponent } from './list/list.component';
import { KanbanComponent } from './kanban/kanban.component';
import { CardsService } from './service/cards.service';

import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';

@NgModule({
    imports: [
        BrowserModule,
		FormsModule,
		RouterModule.forRoot(AppRoutes)
    ],
    declarations: [
		ChecklistComponent,
		CardComponent,
		CardformComponent,
		ListComponent,
		KanbanComponent,
        AppComponent
    ],
	providers: [CardsService],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
