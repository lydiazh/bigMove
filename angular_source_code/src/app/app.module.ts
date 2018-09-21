import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServComponent } from './serv/serv.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';

import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { CollapseModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServComponent,
    NavbarComponent,
    ContactComponent,
    NewsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CollapseModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'serv', component: ServComponent},
      {path: 'news', component: NewsComponent},
      {path: 'contact', component: ContactComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
