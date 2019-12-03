import {Component, OnInit, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ServicesComponent implements OnInit {
  flatCleaningInfo: any = {
    name: 'Генеральне прибирання ',
    mainInfo: ['Видаляємо пил з усіх поверхонь;',
      'миємо раковину, плиту, холодильник і меблі на кухні зовні;',
      'очищаємо від бруду і жиру всі кухонні поверхні;',
      'миємо і поліруємо дзеркала і скляні поверхні;',
      'миємо і протираємо всі предмети інтер\'єру;',
      'миємо і поліруємо меблі і меблеву фурнітуру;',
      'протираємо карнізи і видаляємо павутиння;',
      'відпарювачем чистимо штори та тюлі (по домовленості);',
      'миємо підвіконня та радіатори;',
      'миємо двері, рами, ручки, вимикачі;',
      'миємо і дезінфікуємо ванну кімнату, туалет;',
      'миємо підлогу, плінтуса.'
    ],
    additionalInfo: [
      {
        name: 'КУХНЯ',
        services: [ '- газова плита;', '- раковина;', '- всі поверхні;',
          '- витирання пилу;', '- підвіконня, батарея;', '- миття підлоги, плінтусів;', '- миття дверей, ручки, вимикачі.'
        ]
      },
      {
        name: 'КІМНАТА',
        services: ['- протирання всіх доступних поверхонь;', '- дзеркала і скляні поверхні;',
          '- підвіконня, батарея;', '- світильники;', '- двері, ручки, вимикачі;',
          '- поліровка меблів;', '- сухий пилосос, миття підлоги, плінтусів.']
      },
      {
        name: 'САНВУЗОЛ',
        services: ['- миття, дезінфекція ванни, унітазу;', '- раковини;',
          '- дзеркала;', '- сантехніка; ', '- миття плитки, підлоги;', '- двері, ручки, вимикачі.']
      },
      {
        name: 'ДОДАТКОВО',
        services: [ '- Холодильник в середині', '- духовка', '- мікрохвильовка',
          '- гриль', '- відпарювання і чистка штор ', '- відпарювання, розглажування одягу ',
          '- виносимо побутове сміття.'
        ]
      }
    ],
    prices: [
      {
        name: 'Квартира без меблів ',
        price: '30 грн.\\м.2',
      },
      {
        name: 'Квартира з меблями  ',
        price: '35 грн.\\м.2',
      },
      {
        name: 'Миття вікон',
        price: '35 грн.\\м.2 ',
      },
      {
        name: 'Миття вікон після ремонту ',
        price: '40 грн.\\м.2',
      },
    ]
  };
  constructor() {
  }

  ngOnInit() {
  }


}
