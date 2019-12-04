import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  title = ' Замовити прибирання | Клінінгова компанія Clinko | Львів';
  isSelected = false;

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
  inputAnimation() {
    this.isSelected = true;
  }

}
