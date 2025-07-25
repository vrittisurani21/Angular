import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Content1Component } from './content1/content1.component';
import { GalleryComponent } from './gallery/gallery.component';


export const routes: Routes = [
    {path:'',component:Content1Component},
    {path:'home', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'gallery',component:GalleryComponent}

];
