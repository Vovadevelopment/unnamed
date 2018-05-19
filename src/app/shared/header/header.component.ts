import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {EventsService} from '../../services/events.service';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('headerMark') headerMark: ElementRef;

  scrollSubject = new Subject();

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    console.log('Scrolling');
    this.eventsService.updateScrollPosition($event);
  }

  constructor(private eventsService: EventsService) { }

  ngOnInit() {

  }

}
