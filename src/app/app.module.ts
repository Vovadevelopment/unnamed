import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import {RouterModule} from '@angular/router';
import { ServicesComponent } from './pages/services/services.component';
const routes = [
  { path: 'services', component: ServicesComponent },
  { path: '', redirectTo: 'services', pathMatch: 'full' }
  // { path: 'addFI', component: AddFiComponent, canActivate: [CanActivateRoute]  },
  // { path: 'editFI/:id', component: AddFiComponent, canActivate: [CanActivateRoute]  },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: MainComponent, canActivate: [CanActivateRoute] },
  // { path: 'invoices/:id', component: InvoiceComponent, canActivate: [CanActivateRoute] },
  // { path: '**', component: MainComponent, canActivate: [CanActivateRoute] }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
