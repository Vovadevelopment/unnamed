import {HostListener, Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class EventsService {
  private scrollSubject = new Subject();
  constructor() { }
  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    this.scrollSubject.next($event);
  }

  watchScrollEvent() {
    return this.scrollSubject;
  }

}
