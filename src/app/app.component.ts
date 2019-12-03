import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Клінінгова компанія Clinko | Прибирання Львів | Хімчистка меблів львів';
  constructor(private titleService: Title, private meta: Meta) {}

  ngOnInit()  {
    this.meta.updateTag({
      name: 'keywords', content: 'генеральне прибирання Львів, прибирання після ремонту львів, миття вікон львів, прибирання в неробочий та нічний час, хімчистка меблів львів ',
    });
    this.meta.updateTag({
      name: 'description', content: 'Послуги:-генеральне прибирання Львів; -хімчистка меблів; -прибирання в неробочий та нічний час львів; -прибирання після ремонту львів,-миття вікон львів; '
    });
    this.titleService.setTitle(this.title);
  }



  calc(el) {
    console.log();
  }

}
