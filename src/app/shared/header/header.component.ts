import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {EventsService} from '../../services/events.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('headerMark') headerMark: ElementRef;

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.scrollSubject.subscribe((event)=>{
      console.log(event);
      console.log(this.eventsService.isElementInViewport(this.headerMark))
    })

  }

}
