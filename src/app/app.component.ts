import {AfterViewInit, Component, ElementRef, HostListener, ViewChild} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('image1') image1: ElementRef;
  @ViewChild('image2') image2: ElementRef;
  @ViewChild('image3') image3: ElementRef;
  @ViewChild('image4') image4: ElementRef;
  constructor() {}

  ngAfterViewInit() {
    // alert(document.getElementById("foo").offsetTop)
  }



  calc(el) {
    console.log();
  }

  private animateImage(el : ElementRef, direction : string) : void {
    switch(direction) {
      case 'right':
        // el.nativeElement.style.property =
        break;
      case 'left':

        break;
    }
  }

}
