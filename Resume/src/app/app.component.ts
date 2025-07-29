import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormDataComponent } from "./form-data/form-data.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormDataComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
