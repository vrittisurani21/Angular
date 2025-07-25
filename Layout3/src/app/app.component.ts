import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { Content1Component } from "./content1/content1.component";
import { Content2Component } from "./content2/content2.component";
import { FooterComponent } from "./footer/footer.component";
import { Content3Component } from './content3/content3.component';
import { Content4Component } from './content4/content4.component';
import { Contentmini1Component } from './contentmini1/contentmini1.component';
import { Contentmini2Component } from './contentmini2/contentmini2.component';
import { Contentmini3Component } from './contentmini3/contentmini3.component';
import { Contentmini4Component } from './contentmini4/contentmini4.component';
import { Header1Component } from './header1/header1.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,Header1Component,Content1Component, Content2Component,Content3Component,Content4Component,Contentmini1Component,Contentmini2Component,Contentmini3Component,Contentmini4Component,FooterComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Layout3';
}
