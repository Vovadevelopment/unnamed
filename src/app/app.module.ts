import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RouterModule} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EventsService } from './services/events.service';
import { AccordionModule, TabViewModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/panel';
import { GrowlModule } from 'primeng/growl';
import {MessageService} from 'primeng/components/common/messageservice';
import {SidebarModule} from 'primeng/components/sidebar/sidebar';
import {InputTextModule} from 'primeng/inputtext';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to'

const routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
  // { path: 'addFI', component: AddFiComponent, canActivate: [CanActivateRoute]  },
  // { path: 'editFI/:id', component: AddFiComponent, canActivate: [CanActivateRoute]  },
  // { path: '', redirectTo: 'services', pathMatch: 'full' },
  // { path: 'services', component: MainComponent, canActivate: [CanActivateRoute] },
  // { path: 'invoices/:id', component: InvoiceComponent, canActivate: [CanActivateRoute] },
  // { path: '**', component: MainComponent, canActivate: [CanActivateRoute] }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(routes),
    AccordionModule,
    PanelModule,
    TabViewModule,
    GrowlModule,
    SidebarModule,
    InputTextModule,
    ScrollToModule.forRoot()
  ],
  providers: [EventsService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
