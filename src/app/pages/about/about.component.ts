import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  title = 'Клінінгова компанія Clinko | Львів';

  constructor(private titleService: Title, private meta: Meta) { }

  ngOnInit() {
    this.meta.updateTag({
      name: 'keywords', content: 'Прибирання квартир, ' +
        ' прибирання після ремонту,' +
        ' миття вікон , ' +
        'прибирання ' +
        ' хімчистка меблів  ' +
        'клінінгова компанія ',
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
