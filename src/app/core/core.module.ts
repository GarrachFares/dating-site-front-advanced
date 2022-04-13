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
import { MatSelectCountryModule } from "@angular-material-extensions/select-country";

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FAQComponent } from './pages/faq/faq.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ExploreCardComponent } from './components/explore-card/explore-card.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';




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
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    HttpClientModule,
    MatSelectCountryModule.forRoot('de')
    
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
    
  ]
})
export class CoreModule { }
