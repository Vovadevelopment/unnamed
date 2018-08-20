import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ServicesComponent implements OnInit {

  pricesList: object ={
    windowClean: {
      id: '#1',
      collapsed: true
    },
    carpetClean: {
      id: '#2',
      collapsed: true
    },
    afterRepairClean: {
      id: '#3',
      collapsed: true
    },
    generalClean: {
      id: '#4',
      collapsed: true
    },
    busClean: {
      id: '#5',
      collapsed: true
    }
  };

  constructor(private _scrollToService: ScrollToService) {
  }

  ngOnInit() {

  }

  public triggerScrollTo(id) {
    const config: ScrollToConfigOptions = {
      target: this.pricesList[id]['id'],
      offset: -180
    };
    this._scrollToService.scrollTo(config);
    // for(let key in this.pricesList) {
    //   if(this.pricesList.hasOwnProperty(key)) {
    //     this.pricesList[key].collapsed = true;
    //   }
    // }
    this.pricesList[id].collapsed = false
  }


}
