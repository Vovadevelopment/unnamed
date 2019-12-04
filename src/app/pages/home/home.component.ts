import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Прибирання квартир, прибирання після ремонту | Львів | Clinko';
  constructor(private titleService: Title, private meta: Meta) {
  }

  ngOnInit() {
    this.meta.updateTag({
      name: 'keywords', content: 'Прибирання квартир, ' +
        ' прибирання після ремонту львів,' +
        ' миття вікон львів, ' +
        'прибирання львів' +
        ' хімчистка меблів львів ' +
      'клінінгова компанія львів',
    });
    this.meta.updateTag({
      name: 'description', content: 'Послуги:' +
        '-генеральне прибирання;' +
        '-хімчистка меблів;' +
        '-миття вікон; ' +
        '-прибирання в неробочий та нічний час львів;' +
        '-прибирання після ремонту львів,'
    });
    this.titleService.setTitle(this.title);
  }

}
