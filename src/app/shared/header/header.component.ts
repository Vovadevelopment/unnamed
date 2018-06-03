import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {EventsService} from '../../services/events.service';
import {Subject} from 'rxjs/Subject';
import {NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('headerMark') headerMark: ElementRef;

  scrollSubject = new Subject();

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    // console.log('Scrolling');
    this.eventsService.updateScrollPosition($event);
  }

  constructor(private eventsService: EventsService, private router: Router) {
    router.events.subscribe( (event) => {

      if (event instanceof NavigationStart) {
        // Show loading indicator
      }

      if (event instanceof NavigationEnd) {
        console.log(event);
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator
        // Present error to user
        console.log(event.error);
      }
    });
  }

  ngOnInit() {

  }

}
