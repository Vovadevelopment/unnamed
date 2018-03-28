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
  private imagesScrolled: Object = {
    image1: false,
    image2: false,
    image3: false,
    image4: false
  };
  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    // console.log(this.image1.nativeElement.getBoundingClientRect(), window.innerHeight, window.pageXOffset, window.pageYOffset);

    // console.log(this.isElementInViewport(this.image1.nativeElement));
  }
  constructor() {}

  ngAfterViewInit() {
    // alert(document.getElementById("foo").offsetTop)
  }

  private isElementInViewport(el) {

    let rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
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
