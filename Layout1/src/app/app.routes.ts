import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { Sidebar1Component } from './sidebar1/sidebar1.component';
import { Sidebar2Component } from './sidebar2/sidebar2.component';

export const routes: Routes = [
    {path:"header", component:HeaderComponent},
    {path:"content",component:ContentComponent},
    {path:"footer",component:FooterComponent},
   {path:"sidebar2",component:Sidebar2Component},
   {path:"sidebar1",component:Sidebar1Component},
];
