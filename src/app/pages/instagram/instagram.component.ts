import {Component, OnInit } from '@angular/core';
import {EventsService} from '../../services/events.service';
@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.scss']
})
export class InstagramComponent implements OnInit {
  myData = [];
  photos = [];
  onShowPhoto = false;
  choosenPhoto = [];

  constructor(private eventsService: EventsService) {
  }


  ngOnInit() {
    this.eventsService.getTableData().subscribe(myData => {
      this.myData = myData.data;
      for (let i = 0; i < this.myData.length; i++) {
        // this.instagramPhoto = this.myData[i].images.low_resolution.url;
        this.photos.push({
         'url': this.myData[i].images.low_resolution.url,
          'large': this.myData[i].images.standard_resolution.url,
          'id': this.myData[i].id
        });
      }
      // console.log(this.myData, 'my arr');
    });
  }
  showCloser(id) {
    for (let i = 0; i < this.photos.length; i++) {
      if (this.photos[i].id === id) {
      this.choosenPhoto.push(this.photos[i]);
      }
    }
    console.log( this.choosenPhoto , 'my choosen photo');
    this.onShowPhoto = true;
  }
  hideBigPhoto() {
    this.onShowPhoto = false;
  }
}







    //   userId: '7333117598',
    //   clientId: '91ffdb4d5bea4ee1809ff36ec48d0867',
    //   accessToken: '7333117598.91ffdb4.d7184e7531d14f859b6b694623885cd6',


