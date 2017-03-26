import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardformComponent } from './cardform/cardform.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { KanbanComponent } from './kanban/kanban.component';
import { ListComponent } from './list/list.component';
import { CardsService } from './service/cards.service';

import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardformComponent,
    ChecklistComponent,
    KanbanComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	RouterModule.forRoot(AppRoutes)
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
