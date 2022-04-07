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


import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FAQComponent } from './pages/faq/faq.component';
import { ExploreComponent } from './pages/explore/explore.component';




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
    SignUpComponent,
    HomeComponent,
    FAQComponent,
    ExploreComponent,
    
  ]
})
export class CoreModule { }
