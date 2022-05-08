import { RouterModule, Routes } from "@angular/router";
//import { SignInComponent } from "./core/components/sign-in/sign-in.component";


import { SignUpComponent } from "./core/components/sign-up/sign-up.component";
import { ContactComponent } from "./core/pages/contact/contact.component";
import { DashboardComponent } from "./core/pages/dashboard/dashboard.component";
import { ExploreComponent } from "./core/pages/explore/explore.component";
import { FAQComponent } from "./core/pages/faq/faq.component";
import { HomeComponent } from "./core/pages/home/home.component";
import { MessagingComponent } from "./core/pages/messaging/messaging.component";
import { ProfilComponent } from "./core/pages/profil/profil.component";



const APP_ROUTING: Routes=[
    {path:'home',redirectTo:'/',pathMatch:'full'},
    {path:'',component:HomeComponent},
    {path:'contact',component:ContactComponent},
    {path:'sign-up',component:SignUpComponent},
    {path:'faq',component:FAQComponent},
    {path:'explore',component:ExploreComponent,children:[
        {path:'',component:DashboardComponent},
        {path:'profil',component:ProfilComponent}
    ]},
    {path:'messaging',component:MessagingComponent},
    
    //{path:'sign-in',component:SignInComponent}
]

export const ROUTING = RouterModule.forRoot(APP_ROUTING)