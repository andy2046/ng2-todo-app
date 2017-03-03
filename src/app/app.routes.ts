import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { KanbanComponent } from './kanban/kanban.component';
import { CardformComponent } from './cardform/cardform.component';

export const AppRoutes: Routes = [
	{ path: '', component: KanbanComponent},
	{ path: 'edit/:id', component: CardformComponent, outlet: 'popup' },
	{ path: 'new', component: CardformComponent, outlet: 'popup' },
	{ path: '**', redirectTo: '' }
];
