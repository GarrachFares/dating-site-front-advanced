import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./core/components/contact/contact.component";
import { HeroComponent } from "./core/components/hero/hero.component";



const APP_ROUTING: Routes=[
    {path:'home',component:HeroComponent},
    {path:'contact',component:ContactComponent}
]

export const ROUTING = RouterModule.forRoot(APP_ROUTING)