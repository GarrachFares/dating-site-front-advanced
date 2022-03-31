import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./core/components/contact/contact.component";
import { HomeComponent } from "./core/components/home/home.component";
import { SignUpComponent } from "./core/components/sign-up/sign-up.component";



const APP_ROUTING: Routes=[
    {path:'home',redirectTo:'/',pathMatch:'full'},
    {path:'',component:HomeComponent},
    {path:'contact',component:ContactComponent},
    {path:'sign-up',component:SignUpComponent}
]

export const ROUTING = RouterModule.forRoot(APP_ROUTING)