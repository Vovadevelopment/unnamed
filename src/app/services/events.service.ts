import {HostListener, Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class EventsService {
  scrollSubject = new Subject();
  constructor(private http: Http) { }
  getTableData() {
    return this.http
      .get('https://api.instagram.com/v1/users/self/media/recent/?access_token=7333117598.91ffdb4.d7184e7531d14f859b6b694623885cd6')
      .map(response => response.json());
  }

  updateScrollPosition(event) {
    this.scrollSubject.next(event);
  }

  isElementInViewport(el) {

    let rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
  }

}
