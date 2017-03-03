/*
*
* taken from https://github.com/Reactive-Extensions/RxJS/blob/8f12f812d497acf639588e90f74d504a9fc801ec/src/core/linq/observable/asobservable.js
*
* not needed if using RxJs beta 2 or higher
*
**/

//

import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {Card} from '../interface/card.interface';

export function asObservable(subject: Subject<Card[]>) {
    return new Observable(fn => subject.subscribe(fn));
}