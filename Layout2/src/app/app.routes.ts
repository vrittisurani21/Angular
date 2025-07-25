import { Routes } from '@angular/router';
import { Content1Component } from './content1/content1.component';
import { Content2Component } from './content2/content2.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path:'', component:Content1Component},
    {path:'Content1', component:Content2Component},
    {path:'Home', component:HomeComponent},
    {path:'About', component:AboutComponent}

];
