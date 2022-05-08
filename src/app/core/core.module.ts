import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HeroComponent } from './components/hero/hero.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
//import { MatSelectCountryModule } from "@angular-material-extensions/select-country";

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FAQComponent } from './pages/faq/faq.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ExploreCardComponent } from './components/explore-card/explore-card.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AuthService } from './services/auth.service';
import { HeaderComponent } from './components/header/header.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { MessagingComponent } from './pages/messaging/messaging.component';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
//import { MatSelectionList } from '@angular/material/se'
import {MatListModule} from '@angular/material/list';
import { CreateRoomComponent } from './pages/messaging/create-room/create-room.component';
export function tokenGetter() {
  return localStorage.getItem('Token') || '{}' ;
}

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {
  extraHeaders:{
    authorization: tokenGetter()
  }
} };


@NgModule({
  declarations: [
    NavbarComponent,
    SignInComponent,
    HeroComponent,
    ContactComponent,
    FooterComponent,
    TestimonialsComponent,
    CarouselComponent,
    HomeComponent,
    SignUpComponent,
    FAQComponent,
    ExploreComponent,
    SidebarComponent,
    ExploreCardComponent,
    HeaderComponent,
    MessagingComponent,
    CreateRoomComponent,
    
  ],
  providers: [AuthService],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    HttpClientModule,
    MatPaginatorModule,
    MatCardModule,
    MatListModule ,
    SocketIoModule.forRoot(config)
    
   // MatSelectCountryModule.forRoot('de')
    
    
  ],
  exports: [
    NavbarComponent,
    SignInComponent,
    HeroComponent,
    ContactComponent,
    FooterComponent,
    TestimonialsComponent,
    CarouselComponent,
    SignUpComponent,
    HomeComponent,
    FAQComponent,
    ExploreComponent,
    SidebarComponent,
    ExploreCardComponent,
    HttpClientModule,
    
    
  ]
})
export class CoreModule { }
