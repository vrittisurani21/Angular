import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContentComponent } from "./content/content.component";
import { HeaderComponent } from './header/header.component';
import { Sidebar1Component } from './sidebar1/sidebar1.component';
import { Sidebar2Component } from './sidebar2/sidebar2.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContentComponent,HeaderComponent,Sidebar1Component,Sidebar2Component,ContentComponent,FooterComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Layout1';
}
