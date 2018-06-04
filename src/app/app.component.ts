import {AfterViewInit, Component, ElementRef, HostListener, ViewChild} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor() {}

  ngAfterViewInit() {
    // alert(document.getElementById("foo").offsetTop)
  }



  calc(el) {
    console.log();
  }

}
