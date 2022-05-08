import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ROUTING } from './app.routing';
import { CoreModule } from './core/core.module';
import { TokenInterceptor } from './core/services/token.interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ROUTING,
    NgMultiSelectDropDownModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule
  ],

  providers: [{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, 
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
