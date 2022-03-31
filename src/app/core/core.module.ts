import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HeroComponent } from './components/hero/hero.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './components/home/home.component';

import { SignUpComponent } from './components/sign-up/sign-up.component';



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
    
    SignUpComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    SignInComponent,
    HeroComponent,
    ContactComponent,
    FooterComponent,
    TestimonialsComponent,
    CarouselComponent,
    HomeComponent,
    SignUpComponent
  ]
})
export class CoreModule { }
