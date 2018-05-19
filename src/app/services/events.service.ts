import {HostListener, Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class EventsService {

  constructor() { }

  updateScrollPosition(event) {

  }

  isElementInViewport(el) {

    let rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
  }

}
